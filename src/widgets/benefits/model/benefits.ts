import { imageUrl } from '@/shared/lib/image-url'

export type Benefit = {
  eyebrow: string
  title: string
  text: string
  image: string
}

export const benefits: Benefit[] = [
  {
    eyebrow: 'Учись у старших',
    title: 'Менторство',
    text: 'Студенты старших курсов помогают разобраться и не бросить на полпути.',
    image: imageUrl('benefit-mentorship.webp'),
  },
  {
    eyebrow: 'Применяй знания',
    title: 'Командные проекты',
    text: 'Делай реальные продукты в команде — как на настоящей работе.',
    image: imageUrl('benefit-projects.webp'),
  },
  {
    eyebrow: 'Собирай опыт',
    title: 'Портфолио',
    text: 'К концу года у тебя будут проекты, которые не стыдно показать.',
    image: imageUrl('benefit-portfolio.webp'),
  },
  {
    eyebrow: 'Расти дальше',
    title: 'Стажировки',
    text: 'Встречи с компаниями-партнёрами и помощь с первым резюме.',
    image: imageUrl('benefit-internships.webp'),
  },
]
