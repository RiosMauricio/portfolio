import { Heading } from "@chakra-ui/react"
import { useLanguage } from "@/i18n/languageContext"
import "@/styles/AboutMe.css"

// Títulos tipo "… (en curso)" / "… (in progress)": el paréntesis final se
// extrae y se muestra como badge pixel; el resto queda como título limpio.
const TRAILING_PARENS = /\s*\(([^()]+)\)\s*$/
const IN_PROGRESS = /en curso|in progress/i

const splitBadge = (title: string) => {
  const m = title.match(TRAILING_PARENS)
  if (m && m.index !== undefined && IN_PROGRESS.test(m[1])) {
    return { text: title.slice(0, m.index), badge: m[1] }
  }
  return { text: title, badge: null }
}

export const Education = () => {
  const { t } = useLanguage();

  return (
    <ol className="px-timeline">
      {t.education.map((item) => {
        const { text, badge } = splitBadge(item.title)
        return (
          <li key={item.title} className="px-tl-item">
            <span className="px-tl-marker" aria-hidden="true" />
            <div className="px-tl-head">
              <Heading as="h3" size="sm" className="subtitle">{text}</Heading>
              {badge && <span className="px-badge">{badge}</span>}
            </div>
            <p className="px-tl-meta">{item.place}</p>
          </li>
        );
      })}
    </ol>
  )
}
