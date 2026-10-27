import { AppImage } from '@/shared/ui/app-image'
import { Badge } from '@/shared/ui/badge'
import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'

import { projects } from '../model/projects'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Проекты"
          title={
            <>
              <Highlight>Сделано</Highlight> участниками клуба
            </>
          }
          description="Каждый проект начинался с идеи на встрече клуба. Твой может быть следующим."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group flex h-full flex-col gap-4">
                <div className="overflow-hidden rounded-3xl bg-azure-soft">
                  <AppImage
                    src={project.image}
                    alt={`Скриншот проекта ${project.title}`}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 px-1">
                  <p className="text-xs text-muted-foreground">{project.team}</p>
                  <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
