import { joinFormEndpoint } from '@/shared/config'

import type { ApplicationData } from '../model/types'

export class FormNotConfiguredError extends Error {}

export async function submitApplication(data: ApplicationData) {
  if (!joinFormEndpoint) throw new FormNotConfiguredError()

  const response = await fetch(joinFormEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) throw new Error(`Не удалось отправить заявку: ${response.status}`)
}
