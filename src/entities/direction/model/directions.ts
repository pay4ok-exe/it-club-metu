import {
  BrainCircuit,
  Gamepad2,
  Monitor,
  PenTool,
  Server,
  ShieldCheck,
  Smartphone,
  Trophy,
} from 'lucide-react'

import type { Direction } from './types'

// TODO: контент — сверить список направлений и расписание с клубом
export const directions: Direction[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'Сайты и интерфейсы на React и TypeScript — от первой кнопки до готового продукта.',
    icon: Monitor,
    tags: ['Популярное', 'С нуля'],
    schedule: 'Пн, 18:00',
    tone: 'blue',
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'API, базы данных и серверы на Python, Go и Node.js.',
    icon: Server,
    tags: ['С нуля'],
    schedule: 'Вт, 18:00',
    tone: 'green',
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'Приложения для iOS и Android на Flutter и Kotlin.',
    icon: Smartphone,
    tags: ['Новое'],
    schedule: 'Ср, 18:00',
    tone: 'orange',
  },
  {
    id: 'data-ai',
    title: 'Data Science и ИИ',
    description: 'Анализ данных, машинное обучение и нейросети на Python.',
    icon: BrainCircuit,
    tags: ['Популярное'],
    schedule: 'Чт, 18:00',
    tone: 'purple',
  },
  {
    id: 'design',
    title: 'UI/UX-дизайн',
    description: 'Интерфейсы в Figma, прототипы и исследования пользователей.',
    icon: PenTool,
    tags: ['С нуля'],
    schedule: 'Пн, 16:00',
    tone: 'yellow',
  },
  {
    id: 'gamedev',
    title: 'GameDev',
    description: 'Игры на Unity и Godot: механики, геймплей и геймджемы.',
    icon: Gamepad2,
    tags: ['Новое'],
    schedule: 'Пт, 17:00',
    tone: 'pink',
  },
  {
    id: 'cybersecurity',
    title: 'Кибербезопасность',
    description: 'CTF-соревнования, сети и безопасная разработка.',
    icon: ShieldCheck,
    tags: ['CTF'],
    schedule: 'Ср, 19:00',
    tone: 'blue',
  },
  {
    id: 'olympiad',
    title: 'Олимпиадное программирование',
    description: 'Алгоритмы, структуры данных и подготовка к ICPC.',
    icon: Trophy,
    tags: ['ICPC'],
    schedule: 'Сб, 12:00',
    tone: 'green',
  },
]
