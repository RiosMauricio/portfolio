import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties, DragEvent, FormEvent } from "react";
import { useLanguage } from "@/i18n/languageContext";
import "@/styles/Kanban.css";

type ColId = "todo" | "doing" | "done";
// 0 = sin prioridad; el chip cicla 0→1→2→3→0 al click.
type Priority = 0 | 1 | 2 | 3;

interface KanbanCard {
  id: string;
  // Las semillas guardan `seed` y se traducen al renderizar; las tareas
  // del usuario guardan `text` plano y quedan en el idioma en que se
  // escribieron.
  seed?: string;
  text?: string;
  p: Priority;
}

type Board = Record<ColId, KanbanCard[]>;

const COLS: ColId[] = ["todo", "doing", "done"];
const COL_COLOR: Record<ColId, string> = {
  todo: "#f472b6",
  doing: "#22d3ee",
  done: "#4ade80",
};
const PRIOS: Priority[] = [0, 1, 2, 3];
const PRIO_KEY = ["none", "low", "med", "high"] as const;
const STORAGE_KEY = "mrdemos.kanban.v1";

const seedBoard = (): Board => ({
  todo: [
    { id: "seed-deploy", seed: "deploy", p: 3 },
    { id: "seed-readme", seed: "readme", p: 1 },
    { id: "seed-tests", seed: "tests", p: 2 },
  ],
  doing: [
    { id: "seed-crt", seed: "crt", p: 2 },
    { id: "seed-bug", seed: "bug", p: 3 },
  ],
  done: [
    { id: "seed-avatar", seed: "avatar", p: 0 },
    { id: "seed-coffee", seed: "coffee", p: 0 },
  ],
});

const isBoard = (v: unknown): v is Board => {
  if (typeof v !== "object" || v === null) return false;
  const b = v as Record<string, unknown>;
  return COLS.every(
    (col) =>
      Array.isArray(b[col]) &&
      (b[col] as unknown[]).every(
        (card) =>
          typeof card === "object" &&
          card !== null &&
          typeof (card as KanbanCard).id === "string" &&
          (typeof (card as KanbanCard).text === "string" ||
            typeof (card as KanbanCard).seed === "string"),
      ),
  );
};

const loadBoard = (): Board => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedBoard();
    const parsed: unknown = JSON.parse(raw);
    if (!isBoard(parsed)) return seedBoard();
    for (const col of COLS) {
      for (const card of parsed[col]) {
        if (!PRIOS.includes(card.p)) card.p = 0;
      }
    }
    return parsed;
  } catch {
    /* storage bloqueado o JSON corrupto: arranca con las semillas */
    return seedBoard();
  }
};

const uid = (): string =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `t-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export const KanbanDemo = () => {
  const { t } = useLanguage();
  const k = t.demos.kanban;
  const [board, setBoard] = useState<Board>(loadBoard);
  const [draft, setDraft] = useState("");
  const [dragId, setDragId] = useState<string | null>(null);
  const [dropAt, setDropAt] = useState<{ col: ColId; index: number } | null>(null);
  const listsRef = useRef<Record<ColId, HTMLUListElement | null>>({
    todo: null,
    doing: null,
    done: null,
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
    } catch {
      /* modo privado / sin storage: el tablero igual funciona en memoria */
    }
  }, [board]);

  const moveCard = (id: string, toCol: ColId, toIndex: number) => {
    setBoard((prev) => {
      const next: Board = { todo: [...prev.todo], doing: [...prev.doing], done: [...prev.done] };
      let card: KanbanCard | undefined;
      for (const col of COLS) {
        const i = next[col].findIndex((c) => c.id === id);
        if (i >= 0) {
          [card] = next[col].splice(i, 1);
          if (col === toCol && i < toIndex) toIndex -= 1;
        }
      }
      if (!card) return prev;
      const clamped = Math.max(0, Math.min(toIndex, next[toCol].length));
      next[toCol].splice(clamped, 0, card);
      return next;
    });
  };

  const moveStep = (id: string, step: -1 | 1) => {
    const from = COLS.find((col) => board[col].some((c) => c.id === id));
    if (!from) return;
    const target = COLS.indexOf(from) + step;
    if (target < 0 || target >= COLS.length) return;
    moveCard(id, COLS[target], board[COLS[target]].length);
  };

  const removeCard = (id: string) => {
    setBoard((prev) => ({
      todo: prev.todo.filter((c) => c.id !== id),
      doing: prev.doing.filter((c) => c.id !== id),
      done: prev.done.filter((c) => c.id !== id),
    }));
  };

  const cyclePrio = (id: string) => {
    setBoard((prev) => ({
      todo: prev.todo.map((c) => (c.id === id ? { ...c, p: ((c.p + 1) % 4) as Priority } : c)),
      doing: prev.doing.map((c) => (c.id === id ? { ...c, p: ((c.p + 1) % 4) as Priority } : c)),
      done: prev.done.map((c) => (c.id === id ? { ...c, p: ((c.p + 1) % 4) as Priority } : c)),
    }));
  };

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setBoard((prev) => ({ ...prev, todo: [...prev.todo, { id: uid(), text, p: 0 }] }));
    setDraft("");
  };

  // Índice de inserción según la mitad de cada tarjeta bajo el cursor.
  const listIndexAt = (list: HTMLUListElement | null, y: number): number => {
    if (!list) return 0;
    const items = Array.from(list.querySelectorAll<HTMLElement>("[data-kb-id]"));
    for (let i = 0; i < items.length; i++) {
      const r = items[i].getBoundingClientRect();
      if (y < r.top + r.height / 2) return i;
    }
    return items.length;
  };

  const onCardDragStart = (id: string) => (e: DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "move";
    setDragId(id);
  };

  const onCardDragEnd = () => {
    setDragId(null);
    setDropAt(null);
  };

  const onColDragOver = (col: ColId) => (e: DragEvent<HTMLElement>) => {
    if (!dragId) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const index = listIndexAt(listsRef.current[col], e.clientY);
    setDropAt((prev) => (prev?.col === col && prev.index === index ? prev : { col, index }));
  };

  const onColDragLeave = (col: ColId) => (e: DragEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setDropAt((prev) => (prev?.col === col ? null : prev));
    }
  };

  const onColDrop = (col: ColId) => (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    const id = dragId ?? e.dataTransfer.getData("text/plain");
    if (id) moveCard(id, col, dropAt?.col === col ? dropAt.index : board[col].length);
    setDragId(null);
    setDropAt(null);
  };

  const seedText = (card: KanbanCard): string =>
    card.seed ? ((k.seeds as Record<string, string>)[card.seed] ?? card.seed) : (card.text ?? "");

  const showSlot = (col: ColId, index: number) =>
    dropAt?.col === col && dropAt.index === index;

  return (
    <div className="kb-root">
      <div className="kb-top">
        <span className="kb-title">{k.heading}</span>
        <button type="button" className="kb-btn" onClick={() => setBoard(seedBoard())}>
          {k.reset}
        </button>
      </div>

      <form className="kb-form" onSubmit={addTask}>
        <input
          className="kb-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={k.inputPlaceholder}
          aria-label={k.inputPlaceholder}
          maxLength={90}
        />
        <button type="submit" className="kb-btn kb-add" aria-label={k.add}>
          +
        </button>
      </form>

      <div className="kb-board">
        {COLS.map((col, ci) => (
          <section
            key={col}
            className={`kb-col${dropAt?.col === col ? " is-target" : ""}`}
            style={{ "--col": COL_COLOR[col] } as CSSProperties}
            aria-label={k.columns[col]}
            onDragOver={onColDragOver(col)}
            onDragLeave={onColDragLeave(col)}
            onDrop={onColDrop(col)}
          >
            <header className="kb-col-head">
              <span>{k.columns[col]}</span>
              <span className="kb-count">{board[col].length}</span>
            </header>
            <ul
              className="kb-cards"
              ref={(el) => {
                listsRef.current[col] = el;
              }}
            >
              {board[col].map((card, i) => (
                <Fragment key={card.id}>
                  {showSlot(col, i) && <li className="kb-drop-slot" aria-hidden="true" />}
                  <li
                    data-kb-id={card.id}
                    className={`kb-card${dragId === card.id ? " is-dragging" : ""}`}
                    draggable
                    onDragStart={onCardDragStart(card.id)}
                    onDragEnd={onCardDragEnd}
                  >
                    <div className="kb-card-top">
                      <span className="kb-text">{seedText(card)}</span>
                      <button
                        type="button"
                        className="kb-del"
                        aria-label={k.deleteTask}
                        onClick={() => removeCard(card.id)}
                      >
                        ×
                      </button>
                    </div>
                    <div className="kb-card-foot">
                      <button
                        type="button"
                        className="kb-move"
                        aria-label={k.moveTo(k.columns[COLS[ci - 1] ?? col])}
                        disabled={ci === 0}
                        onClick={() => moveStep(card.id, -1)}
                      >
                        ◀
                      </button>
                      <button
                        type="button"
                        className="kb-move"
                        aria-label={k.moveTo(k.columns[COLS[ci + 1] ?? col])}
                        disabled={ci === COLS.length - 1}
                        onClick={() => moveStep(card.id, 1)}
                      >
                        ▶
                      </button>
                      <button
                        type="button"
                        className={`kb-prio kb-prio-${card.p}`}
                        aria-label={k.priorityLabel(k.priorities[PRIO_KEY[card.p]])}
                        onClick={() => cyclePrio(card.id)}
                      >
                        {k.priorities[PRIO_KEY[card.p]]}
                      </button>
                    </div>
                  </li>
                </Fragment>
              ))}
              {showSlot(col, board[col].length) && (
                <li className="kb-drop-slot" aria-hidden="true" />
              )}
              {board[col].length === 0 && !showSlot(col, 0) && (
                <li className="kb-empty">{k.dropHint}</li>
              )}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};
