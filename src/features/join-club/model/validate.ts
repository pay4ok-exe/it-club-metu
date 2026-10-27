import type { ApplicationData, ApplicationErrors } from './types'

export const courseOptions = ['1 курс', '2 курс', 'Старшие курсы']

export function validateApplication(data: ApplicationData): ApplicationErrors {
  const errors: ApplicationErrors = {}

  if (data.name.trim().length < 2) errors.name = 'Напиши, как тебя зовут'
  if (!data.course) errors.course = 'Выбери курс'
  if (data.contact.trim().length < 3) errors.contact = 'Оставь Telegram, чтобы мы могли написать'
  if (!data.direction) errors.direction = 'Выбери направление — его можно будет поменять'

  return errors
}
