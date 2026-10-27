import { imageUrl } from '@/shared/lib/image-url'

export type Testimonial = {
  quote: string
  name: string
  info: string
  image: string
}

// TODO: контент — реальные отзывы (с согласия участников)
export const testimonials: Testimonial[] = [
  {
    quote:
      'Пришла в клуб на первом курсе, не умея программировать. Через полгода мы с командой заняли второе место на хакатоне.',
    name: 'Камила',
    info: '2 курс, Информационные системы',
    image: imageUrl('student-1.webp'),
  },
  {
    quote:
      'Здесь я нашёл ментора, который помог разобраться с бэкендом и подготовиться к первой стажировке.',
    name: 'Тимур',
    info: '2 курс, Software Engineering',
    image: imageUrl('student-2.webp'),
  },
  {
    quote: 'Лучшее в клубе — люди. Можно прийти с любой идеей и найти тех, кто поможет её сделать.',
    name: 'Аружан',
    info: '1 курс, Дизайн',
    image: imageUrl('student-3.webp'),
  },
]
