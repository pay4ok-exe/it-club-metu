// Адрес, куда уходят заявки (например, Formspree или свой бэкенд). Задаётся в .env.local
export const joinFormEndpoint: string | undefined =
  import.meta.env.VITE_JOIN_FORM_ENDPOINT || undefined
