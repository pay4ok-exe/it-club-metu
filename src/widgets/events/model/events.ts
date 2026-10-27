import { imageUrl } from '@/shared/lib/image-url'

export type ClubEvent = {
  id: string
  type: string
  title: string
  day: string
  month: string
  time: string
  place: string
}

// TODO: контент — актуальная афиша клуба
export const featuredEvent = {
  type: 'Хакатон',
  title: 'METU Hack 2026',
  date: '21–22 ноября',
  description:
    '48 часов, команды по 3–5 человек, кейсы от IT-компаний и призы. Для новичков — отдельный трек с менторами.',
  place: 'Главный корпус, коворкинг',
  image: imageUrl('event-hackathon.webp'),
}

export const upcomingEvents: ClubEvent[] = [
  {
    id: 'git-workshop',
    type: 'Воркшоп',
    title: 'Git и GitHub с нуля',
    day: '5',
    month: 'ноя',
    time: '18:00',
    place: 'Ауд. 305',
  },
  {
    id: 'internship-meetup',
    type: 'Митап',
    title: 'Как попасть на первую стажировку',
    day: '12',
    month: 'ноя',
    time: '18:30',
    place: 'Актовый зал',
  },
  {
    id: 'ctf-newbies',
    type: 'Турнир',
    title: 'CTF для новичков',
    day: '28',
    month: 'ноя',
    time: '17:00',
    place: 'Онлайн',
  },
  {
    id: 'game-jam',
    type: 'Геймджем',
    title: 'Игра за 48 часов',
    day: '5',
    month: 'дек',
    time: '18:00',
    place: 'Коворкинг',
  },
]
