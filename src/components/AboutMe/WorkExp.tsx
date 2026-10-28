import { Heading } from "@chakra-ui/react"
import { useLanguage } from "@/i18n/languageContext"
import "@/styles/AboutMe.css"

export const WorkExp = () => {
  const { t } = useLanguage();

  return (
    <ol className="px-timeline">
      {t.work.map((job) => (
        <li key={job.title} className="px-tl-item">
          <span className="px-tl-marker" aria-hidden="true" />
          <Heading as="h3" size="sm" className="subtitle">{job.title}</Heading>
          {'period' in job && job.period && (
            <p className="px-tl-meta">{job.period}</p>
          )}
          <ul className="px-tl-points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
