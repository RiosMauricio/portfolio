import { useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { useLanguage } from "@/i18n/languageContext"
import "@/styles/AboutMe.css"

const EMAIL = "riosmaurii@gmail.com"

const COPY_TEXT = {
  es: { label: "Copiar", done: "¡Copiado!" },
  en: { label: "Copy", done: "Copied!" },
} as const

export const Contact = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false)
  const copyText = COPY_TEXT[lang]

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // Portapapeles no disponible (permiso denegado o contexto inseguro).
    }
  }

  const contacts = [
    {
      key: "email",
      href: `mailto:${EMAIL}`,
      icon: FaEnvelope,
      label: "EMAIL",
      value: EMAIL,
      external: false,
    },
    {
      key: "linkedin",
      href: "https://www.linkedin.com/in/rios-mauricio-4504532b9",
      icon: FaLinkedin,
      label: "LINKEDIN",
      value: "in/rios-mauricio",
      external: true,
    },
    {
      key: "github",
      href: "https://github.com/RiosMauricio",
      icon: FaGithub,
      label: "GITHUB",
      value: "@RiosMauricio",
      external: true,
    },
  ];

  return (
    <div className="contact">
      <p className="contact-prompt">{"> contact --open"}</p>
      <div className="contact-grid">
        {contacts.map(({ key, href, icon: ContactIcon, label, value, external }) => (
          <div key={key} className="px-card contact-card">
            <a
              href={href}
              className="contact-link"
              aria-label={`${label}: ${value}`}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <ContactIcon className="contact-icon" aria-hidden="true" />
              <span className="contact-texts">
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
              </span>
              <span className="contact-arrow" aria-hidden="true">▶</span>
            </a>
            {key === "email" && (
              <button
                type="button"
                className={`contact-copy${copied ? " is-copied" : ""}`}
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? copyText.done : copyText.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
