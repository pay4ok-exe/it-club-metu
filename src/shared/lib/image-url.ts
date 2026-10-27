// Путь к картинке из public/images с учётом base URL (сайт может жить не в корне домена)
export function imageUrl(file: string) {
  return `${import.meta.env.BASE_URL}images/${file}`
}
