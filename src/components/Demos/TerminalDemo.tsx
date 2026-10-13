import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/languageContext";

interface TermLine {
  cmd?: string;
  text: string;
}

const PROMPT = "visitor@mauricio.rios:~$";

export const TerminalDemo = () => {
  const { t } = useLanguage();
  const [lines, setLines] = useState<TermLine[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLines([{ text: t.demos.terminal.welcome }]);
  }, [t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const run = (cmd: string): string => {
    const term = t.demos.terminal;
    switch (cmd.trim().toLowerCase()) {
      case "help": return term.help;
      case "whoami": return term.whoami;
      case "skills": return term.skills;
      case "projects": return term.projects;
      case "experience": return term.experience;
      case "contact": return term.contact;
      case "": return "";
      default: return term.unknown(cmd);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const cmd = input;
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([{ text: t.demos.terminal.welcome }]);
    } else {
      setLines((prev) => [...prev, { cmd, text: "" }, { text: run(cmd) }]);
    }
    setInput("");
  };

  return (
    <Box
      bg="#0b0e14"
      borderRadius="10px"
      border="1px solid #2d3748"
      fontFamily="monospace"
      onClick={() => inputRef.current?.focus()}
      cursor="text"
    >
      <Box ref={scrollRef} h={{ base: "45vh", md: "380px" }} overflowY="auto" p={4} fontSize="sm">
        {lines.map((line, i) =>
          line.cmd !== undefined ? (
            <Text key={i} mb={1} color="gray.400">
              <Text as="span" color="green.300">{PROMPT}</Text> {line.cmd}
            </Text>
          ) : (
            <Text key={i} mb={2} color="gray.200" whiteSpace="pre-wrap">
              {line.text}
            </Text>
          )
        )}
        {/* Prompt activo */}
        <Flex alignItems="baseline" gap={2}>
          <Text color="green.300" flexShrink={0}>{PROMPT}</Text>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#a7f3c5",
              fontFamily: "monospace",
              fontSize: "inherit",
              caretColor: "#48bb78",
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
};
