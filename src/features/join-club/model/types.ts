export type ApplicationData = {
  name: string
  course: string
  contact: string
  direction: string
}

export type ApplicationErrors = Partial<Record<keyof ApplicationData, string>>

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured'
