# Источники изображений

Всё, что взято из открытых источников или прислано владельцем, а не сгенерировано по промптам.

## Фото Unsplash

Каждое фото проверено на своей странице: метка **«Free to use under the Unsplash License»**, а не Unsplash+.

[Лицензия Unsplash](https://unsplash.com/license) разрешает бесплатно использовать фото,
в том числе в коммерческих целях, без разрешения и без указания автора. Нельзя продавать фото
без существенной переработки и собирать из них сервис, конкурирующий с Unsplash. Указание автора
не обязательно, но мы его ведём здесь.

| Файл | Где на сайте | Автор | Оригинал | `photo-id` |
| --- | --- | --- | --- | --- |
| `student-1.webp` | Аватарка «Камила» (hero, О клубе, Отзывы) | [Vitaly Gariev](https://unsplash.com/@silverkblack) | [ZoSb5J3jU28](https://unsplash.com/photos/smiling-woman-with-long-dark-hair-against-colorful-wall-ZoSb5J3jU28) | `photo-1758600587815-b654d1405e83` |
| `student-2.webp` | Аватарка «Тимур» (hero, О клубе, Отзывы) | [Divyank Sachdeva](https://unsplash.com/@divyanksachdeva) | [iQLqpFqzwnc](https://unsplash.com/photos/a-man-with-glasses-smiling-for-the-camera-iQLqpFqzwnc) | `photo-1701980889802-55ff39e2e973` |
| `student-3.webp` | Аватарка «Аружан» (hero, О клубе, Отзывы) | [Amy Chen](https://unsplash.com/@bliss1002) | [yTrlnJ_wRM4](https://unsplash.com/photos/woman-smiling-wearing-blue-denim-jacket-yTrlnJ_wRM4) | `photo-1554093466-908343f96a09` |
| `student-4.webp` | Аватарка «Ерлан» (О клубе) | [Dylan Ferreira](https://unsplash.com/@dylanferreira) | [jIM8kVsFKlM](https://unsplash.com/photos/man-in-blue-button-up-shirt-smiling-jIM8kVsFKlM) | `photo-1579420593648-0deba81fd762` |
| `team-1.webp` | Команда — «Алия Серикова» | [Åaker](https://unsplash.com/@aaker) | [zyeuEIolkcY](https://unsplash.com/photos/woman-in-blue-and-black-checked-collared-shirt-smiling-zyeuEIolkcY) | `photo-1562532740-dac9bd8c2593` |
| `team-2.webp` | Команда — «Данияр Ахметов» | [Maccy](https://unsplash.com/@jizhidexiaohailang) | [7fXswhCS9Fk](https://unsplash.com/photos/a-man-smiling-in-front-of-a-window-7fXswhCS9Fk) | `photo-1769961982389-bb243681421a` |
| `team-3.webp` | Команда — «Мария Ким» | [Ba Ba](https://unsplash.com/@baba1906) | [nxA6AvGqEbY](https://unsplash.com/photos/smiling-woman-in-black-framed-eyeglasses-nxA6AvGqEbY) | `photo-1567052898066-4badc4b84734` |
| `team-4.webp` | Команда — «Арман Жумабаев» | [Jackson Schaal](https://unsplash.com/@jackson_schaal) | [AR9mvykzSOA](https://unsplash.com/photos/smiling-man-wearing-blue-denim-jacket-AR9mvykzSOA) | `photo-1531750026848-8ada78f641c2` |
| `event-hackathon.webp` | События — главное событие | [Christine Erispe](https://unsplash.com/@tinerispe) | [sIjqrd51grA](https://unsplash.com/photos/a-group-of-people-sitting-at-tables-with-laptops-sIjqrd51grA) | `photo-1731160807880-daf859b64420` |
| `project-campus-map.webp` | Проекты — Campus Map | [henry perks](https://unsplash.com/@hjkp) | [BJXAxQ1L7dI](https://unsplash.com/photos/person-holding-black-smartphone-BJXAxQ1L7dI) | `photo-1548345680-f5475ea5df84` |
| `project-study-buddy.webp` | Проекты — StudyBuddy | [Brooke Cagle](https://unsplash.com/@brookecagle) | [g1Kr4Ozfoac](https://unsplash.com/photos/three-people-sitting-in-front-of-table-laughing-together-g1Kr4Ozfoac) | `photo-1522202176988-66273c2fd55f` |
| `project-pixel-run.webp` | Проекты — Pixel Run | [orva studio](https://unsplash.com/@orvastudio) | [XC3fq-ffXRI](https://unsplash.com/photos/black-laptop-computer-beside-controller-on-brown-wooden-surface-XC3fq-ffXRI) | `photo-1556438064-2d7646166914` |

### Как скачивались

С CDN Unsplash, сразу в WebP нужного размера:

| Что | Параметры |
| --- | --- |
| Аватарки `student-*` | `?w=256&h=256&fit=crop&crop=faces&fm=webp&q=80` |
| Портреты `team-*` | `?w=640&h=640&fit=crop&crop=faces&fm=webp&q=80` |
| Проекты `project-*` | `?w=1200&h=750&fit=crop&fm=webp&q=78` |
| Афиша `event-hackathon` | `?w=1400&h=788&fit=crop&fm=webp&q=78` |

Адрес: `https://images.unsplash.com/<photo-id>?<параметры>`.

## Иконка Telegram

`telegram.webp` — официальный знак Telegram, файл прислал владелец. Уменьшен до 128×128 (WebP без потерь).
Используется только как ссылка на Telegram клуба (подвал, кнопка в FAQ) через `shared/ui/telegram-icon.tsx`.

## Важно до запуска

На фото — реальные люди, которые не имеют отношения к клубу. Пока они подписаны придуманными именами,
ролями и отзывами, это **заглушка для разработки**. Выдавать их за участников и команду клуба нельзя:
это фейковые отзывы и чужие лица под чужими именами.
Перед публикацией замени фото и тексты в `widgets/team`, `widgets/testimonials` и аватарки в
`shared/config/members.ts` на настоящих участников (с их согласия).
