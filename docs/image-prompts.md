# Промпты для изображений

Все картинки сайта генерируются по промптам ниже. Агент сам изображения не генерирует.
Для каждой новой картинки он добавляет сюда промпт и отдаёт его владельцу.

## Как пользоваться

1. Скопируй промпт целиком. Он уже включает общий стиль, менять ничего не нужно.
2. Сгенерируй картинку в любом генераторе (Midjourney, DALL·E, Ideogram, Leonardo, Flux).
   В Midjourney добавь в конец параметр соотношения сторон, например `--ar 16:9`.
3. Если в таблице указан **прозрачный фон**, удали фон (remove.bg, Photoshop, Figma).
4. Сохрани в **WebP** (качество ~80) с указанным именем.
5. Положи файл в `public/images/`. Сайт подхватит его сам, плейсхолдер исчезнет.

**Маскот** нужен на трёх картинках. Сначала сгенерируй `mascot-wave.webp`. Затем используй его
как референс персонажа (character reference / image prompt), чтобы герой получился одинаковым на всех трёх.

**Негативный промпт** (если генератор его поддерживает):

```
text, letters, words, logos, watermark, signature, blurry, low quality, extra fingers, deformed hands, distorted face, photorealistic photo, dark gloomy lighting, harsh shadows, cluttered background
```

## Сводная таблица

| Файл | Где на сайте | Формат | Фон | Статус |
| --- | --- | --- | --- | --- |
| `hero.webp` | Первый экран | 16:9, 2400×1350 | небо | ✅ готово |
| `mascot-wave.webp` | О клубе | 3:4, 1200×1600 | прозрачный | ✅ готово |
| `mascot-point.webp` | Зачем вступать (на холме) | 3:4, 1200×1600 | прозрачный | ✅ готово |
| `mascot-laptop.webp` | Блок заявки | 1:1, 1200×1200 | прозрачный | ✅ готово |
| `hill.webp` | Зачем вступать (низ секции) | 3:1, 2400×800 | небо | ✅ готово |
| `benefit-mentorship.webp` | Зачем вступать | 4:3, 1200×900 | пастельный | ✅ готово |
| `benefit-projects.webp` | Зачем вступать | 4:3, 1200×900 | пастельный | ✅ готово |
| `benefit-portfolio.webp` | Зачем вступать | 4:3, 1200×900 | пастельный | ✅ готово |
| `benefit-internships.webp` | Зачем вступать | 4:3, 1200×900 | пастельный | ⏳ сгенерировано, нужен файл |

Не генерируются (источники — в [image-credits.md](image-credits.md)):

- Фото Unsplash: аватарки `student-*`, команда `team-*`, проекты `project-*`, афиша `event-hackathon`.
- `telegram.webp` — официальная иконка Telegram от владельца.
- «Направления» — без картинок: иконки lucide на цветных плашках.
- Стикеры в «О клубе» (искры, ракета) — анимированные SVG-компоненты в коде.

Готовые картинки владельца обработаны так: у маскотов фон удалён через Apple Vision (с сохранением
летающих значков), всё сжато в WebP; карточки «Зачем вступать» уменьшены до 1000px по ширине.

---

## Первый экран

### `hero.webp` — 16:9

```
A cheerful group of seven diverse university students, 18 to 20 years old, mixed genders and ethnicities including Central Asian looks, crowded together and taking a joyful group selfie from a slightly low angle. Everyone is smiling widely; some point up and make peace signs. Casual clothes: hoodies, t-shirts, glasses, a cap, backpacks; one student holds a laptop covered with stickers. Bright clear sky-blue background with soft fluffy white clouds. The upper 20% of the frame is empty sky; the characters fill the rest and are cropped at chest level by the bottom edge. Style: high-quality 3D animated movie render, Pixar-like, soft global illumination, smooth stylized shapes, expressive friendly faces, pastel palette with light sky blue (#BFE3FA) accents, soft shadows, 4k, no text, no logos, no watermark.
```

## Маскот клуба

Описание героя одинаковое во всех трёх промптах, не меняй его.

### `mascot-wave.webp` — 3:4, прозрачный фон

```
Full-body character of the IT club mascot: a friendly 19-year-old university student boy with stylized proportions (slightly larger head), messy dark brown hair, round black glasses, warm smile, light sky-blue oversized hoodie with a small white code-bracket patch on the chest, beige cargo pants, white chunky sneakers, small navy backpack. He stands facing the viewer and cheerfully waves with his right hand while holding a smartphone in his left hand. Isolated on a plain solid white background, soft contact shadow under the feet. Style: high-quality 3D animated movie render, Pixar-like, soft global illumination, smooth stylized shapes, pastel palette with light sky blue accents, 4k, no text, no logos, no watermark.
```

### `mascot-point.webp` — 3:4, прозрачный фон

```
Full-body character of the IT club mascot: a friendly 19-year-old university student boy with stylized proportions (slightly larger head), messy dark brown hair, round black glasses, warm smile, light sky-blue oversized hoodie with a small white code-bracket patch on the chest, beige cargo pants, white chunky sneakers, small navy backpack. He stands in a three-quarter view turned to the left, enthusiastically pointing with his left index finger toward the left side of the frame, holding a closed laptop under his right arm. Isolated on a plain solid white background, soft contact shadow under the feet. Style: high-quality 3D animated movie render, Pixar-like, soft global illumination, smooth stylized shapes, pastel palette with light sky blue accents, 4k, no text, no logos, no watermark.
```

### `mascot-laptop.webp` — 1:1, прозрачный фон

```
The IT club mascot: a friendly 19-year-old university student boy with stylized proportions (slightly larger head), messy dark brown hair, round black glasses, light sky-blue oversized hoodie with a small white code-bracket patch on the chest, beige cargo pants, white chunky sneakers. He sits cross-legged with an open laptop on his lap, typing and smiling happily; small floating 3D icons around him: a lightbulb, a gear, a speech bubble and a rocket. Isolated on a plain solid white background, soft shadow beneath. Style: high-quality 3D animated movie render, Pixar-like, soft global illumination, smooth stylized shapes, pastel palette with light sky blue accents, 4k, no text, no logos, no watermark.
```

## Зачем вступать

### `hill.webp` — 3:1

```
Wide panoramic landscape: a soft rounded green grassy hill with tiny white daisies, its gentle curve spanning the whole frame and rising slightly toward the right, light sky-blue sky with soft fluffy clouds above. The right third of the hilltop is empty, with space for a character to stand. No characters, no buildings. Style: stylized 3D render, Pixar-like, soft global illumination, fresh pastel greens and sky blues, 4k, no text, no logos, no watermark.
```

### `benefit-mentorship.webp` — 4:3

```
A friendly older student mentor, about 21, sits next to a younger first-year student at a desk and explains something on a laptop screen; the younger student has a happy "aha" moment. Cozy study corner with a plant and a mug. Plain soft pastel sky-blue background. Style: high-quality 3D animated movie render, Pixar-like, soft global illumination, smooth stylized shapes, pastel palette, 4k, no text, no logos, no watermark.
```

### `benefit-projects.webp` — 4:3

```
Four young university students collaborate around a table with a laptop, colorful sticky notes and a small whiteboard with simple diagrams (no readable text); two of them high-five. Energetic teamwork mood. Plain soft pastel mint-green background. Style: high-quality 3D animated movie render, Pixar-like, soft global illumination, smooth stylized shapes, pastel palette, 4k, no text, no logos, no watermark.
```

### `benefit-portfolio.webp` — 4:3

```
Playful floating 3D composition: an open laptop showing a colorful abstract app interface, a smartphone with a mobile app, a game controller and a small golden trophy, arranged at different angles in the air. Plain soft pastel peach background, soft shadows. Style: stylized 3D render, Pixar-like, smooth glossy shapes, pastel palette, 4k, no text, no logos, no watermark.
```

### `benefit-internships.webp` — 4:3

```
A young university student in a smart-casual outfit with a backpack and a laptop walks confidently toward a modern glass office building on a sunny day, seen from a slight side angle, with a hopeful smile. Plain soft pastel lilac sky. Style: high-quality 3D animated movie render, Pixar-like, soft global illumination, smooth stylized shapes, pastel palette, 4k, no text, no logos, no watermark.
```
