import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // Лендинг из одной страницы: каждая секция-виджет используется ровно один раз — это ожидаемо.
    // Отключаем глобально: исключение через `files` прячет импорты из виджетов и ломает проверку entities.
    // Правило «сущность — только если нужна ≥2 слайсам» соблюдаем вручную (см. AGENT.md).
    rules: { 'fsd/insignificant-slice': 'off' },
  },
])
