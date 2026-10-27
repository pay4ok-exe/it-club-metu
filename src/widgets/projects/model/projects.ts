import { imageUrl } from '@/shared/lib/image-url'

export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  team: string
  image: string
}

// TODO: контент — реальные проекты участников
export const projects: Project[] = [
  {
    id: 'campus-map',
    title: 'Campus Map',
    description: 'Интерактивная карта кампуса с поиском аудиторий и расписанием пар.',
    stack: ['React', 'TypeScript', 'Leaflet'],
    team: 'Команда Frontend',
    image: imageUrl('project-campus-map.webp'),
  },
  {
    id: 'study-buddy',
    title: 'StudyBuddy',
    description: 'Telegram-бот, который подбирает напарника для учёбы по предметам.',
    stack: ['Python', 'aiogram', 'PostgreSQL'],
    team: 'Команда Backend',
    image: imageUrl('project-study-buddy.webp'),
  },
  {
    id: 'pixel-run',
    title: 'Pixel Run',
    description: 'Платформер, собранный за 48 часов на геймджеме клуба.',
    stack: ['Unity', 'C#'],
    team: 'Команда GameDev',
    image: imageUrl('project-pixel-run.webp'),
  },
]
