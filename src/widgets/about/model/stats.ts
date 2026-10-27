import { siteConfig } from '@/shared/config'

// TODO: контент — сверить цифры с клубом
export const stats = [
  {
    value: siteConfig.membersCount,
    label: 'участников',
    text: 'Студенты всех факультетов — от программистов до дизайнеров.',
  },
  { value: '40+', label: 'событий в год', text: 'Хакатоны, митапы, воркшопы и разборы задач.' },
  {
    value: '25',
    label: 'проектов',
    text: 'Сайты, боты и игры, которые участники сделали в командах.',
  },
]
