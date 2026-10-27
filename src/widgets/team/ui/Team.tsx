import { cn } from '@/shared/lib/utils'
import { AppImage } from '@/shared/ui/app-image'
import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'

import { teamMembers } from '../model/members'

const portraitTones = ['bg-pastel-sky', 'bg-pastel-peach', 'bg-pastel-mint', 'bg-pastel-lilac']

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Команда"
          title={
            <>
              <Highlight>Люди,</Highlight> которые делают клуб
            </>
          }
          description="Студенты старших курсов, которые когда-то тоже пришли сюда новичками."
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <li key={member.name} className="flex flex-col gap-3">
              <div
                className={cn(
                  'overflow-hidden rounded-3xl',
                  portraitTones[index % portraitTones.length],
                )}
              >
                <AppImage
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="px-1">
                <h3 className="font-heading font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.info}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
