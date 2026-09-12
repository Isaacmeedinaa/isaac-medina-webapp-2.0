import { useEffect, useRef } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import type { Project } from '../content'

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!project) return
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    element?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [project])

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect()
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose()
        }
      }}
    >
      {project && (
        <div className="dialog-inner">
          <div className="dialog-top">
            <span className="eyebrow">SELECTED WORK / {project.number}</span>
            <button className="icon-button" onClick={onClose} aria-label="Close project">
              <X size={22} />
            </button>
          </div>
          <div className="dialog-heading">
            <img src={`/images/${project.id}-icon.jpg`} width="64" height="64" alt="" />
            <div>
              <p className="small-label">{project.role}</p>
              <h2 id="project-dialog-title">{project.name}</h2>
            </div>
          </div>
          <p className="dialog-intro">{project.brief}</p>
          <div className="dialog-highlight">
            <Check size={20} />
            <strong>{project.impact}</strong>
          </div>
          <h3>What I brought to the team</h3>
          <ul className="contribution-list">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="dialog-links">
            {project.links.map((link) => (
              <a
                className="button button-dark"
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>
          <p className="project-credit">
            Work completed as part of the {project.company} engineering team. Product names and
            artwork belong to their respective owners.
          </p>
        </div>
      )}
    </dialog>
  )
}
