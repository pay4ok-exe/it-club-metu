// Глобальные данные сайта.
// TODO: контент — заменить заглушки (полное название вуза, контакты, ссылки) на реальные.
export const siteConfig = {
  name: 'METU IT Club',
  university: 'METU',
  description:
    'IT-клуб METU для студентов 1–2 курса: направления, менторы, хакатоны и первые проекты в портфолио.',
  membersCount: '300+',
  contacts: {
    email: 'itclub@metu.example',
    telegram: 'https://t.me/metu_it_club',
    instagram: 'https://instagram.com/metu_it_club',
    github: 'https://github.com/metu-it-club',
    address: 'Главный корпус, ауд. 305',
  },
} as const

// Якорь секции с формой заявки — на него ведут все кнопки «Вступить»
export const joinHref = '#join-cta'
