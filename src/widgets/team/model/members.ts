import { imageUrl } from '@/shared/lib/image-url'

export type TeamMember = {
  name: string
  role: string
  info: string
  image: string
}

// TODO: контент — реальная команда клуба
export const teamMembers: TeamMember[] = [
  {
    name: 'Алия Серикова',
    role: 'Президент клуба',
    info: '4 курс, Computer Science',
    image: imageUrl('team-1.webp'),
  },
  {
    name: 'Данияр Ахметов',
    role: 'Ментор Backend',
    info: '3 курс, Software Engineering',
    image: imageUrl('team-2.webp'),
  },
  {
    name: 'Мария Ким',
    role: 'Ментор UI/UX',
    info: '3 курс, Дизайн',
    image: imageUrl('team-3.webp'),
  },
  {
    name: 'Арман Жумабаев',
    role: 'Организатор событий',
    info: '2 курс, Информационные системы',
    image: imageUrl('team-4.webp'),
  },
]
