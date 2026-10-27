import { useState, type FormEvent, type ReactNode } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

import { directions } from '@/entities/direction'
import { siteConfig } from '@/shared/config'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

import { FormNotConfiguredError, submitApplication } from '../api/submit-application'
import type { ApplicationData, ApplicationErrors, FormStatus } from '../model/types'
import { courseOptions, validateApplication } from '../model/validate'

const emptyForm: ApplicationData = { name: '', course: '', contact: '', direction: '' }

export function JoinForm() {
  const [data, setData] = useState<ApplicationData>(emptyForm)
  const [errors, setErrors] = useState<ApplicationErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const update = (field: keyof ApplicationData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateApplication(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      await submitApplication(data)
      setStatus('success')
      setData(emptyForm)
    } catch (error) {
      setStatus(error instanceof FormNotConfiguredError ? 'not-configured' : 'error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center" role="status">
        <CheckCircle2 className="size-12 text-brand" aria-hidden />
        <p className="font-heading text-xl font-semibold">Заявка отправлена!</p>
        <p className="max-w-xs text-sm text-muted-foreground">
          Мы напишем тебе в Telegram в течение двух дней и пригласим на ближайшую встречу.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <Field id="join-name" label="Имя и фамилия" error={errors.name}>
        <Input
          id="join-name"
          autoComplete="name"
          placeholder="Например, Алия Серикова"
          value={data.name}
          onChange={(event) => update('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'join-name-error' : undefined}
          className="h-11 rounded-xl"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="join-course" label="Курс" error={errors.course}>
          <Select value={data.course} onValueChange={(value) => update('course', value)}>
            <SelectTrigger
              id="join-course"
              aria-invalid={Boolean(errors.course)}
              aria-describedby={errors.course ? 'join-course-error' : undefined}
              className="h-11! w-full rounded-xl"
            >
              <SelectValue placeholder="Выбери курс" />
            </SelectTrigger>
            <SelectContent>
              {courseOptions.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field id="join-direction" label="Направление" error={errors.direction}>
          <Select value={data.direction} onValueChange={(value) => update('direction', value)}>
            <SelectTrigger
              id="join-direction"
              aria-invalid={Boolean(errors.direction)}
              aria-describedby={errors.direction ? 'join-direction-error' : undefined}
              className="h-11! w-full rounded-xl"
            >
              <SelectValue placeholder="Что интересно?" />
            </SelectTrigger>
            <SelectContent>
              {directions.map((direction) => (
                <SelectItem key={direction.id} value={direction.title}>
                  {direction.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field id="join-contact" label="Telegram" error={errors.contact}>
        <Input
          id="join-contact"
          placeholder="@username"
          value={data.contact}
          onChange={(event) => update('contact', event.target.value)}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? 'join-contact-error' : undefined}
          className="h-11 rounded-xl"
        />
      </Field>

      <Button
        type="submit"
        size="pill-lg"
        disabled={status === 'submitting'}
        className="mt-2 shadow-lg shadow-primary/20"
      >
        {status === 'submitting' ? (
          <Loader2 className="animate-spin" aria-hidden />
        ) : (
          <Send aria-hidden />
        )}
        Отправить заявку
      </Button>

      {status === 'error' && (
        <p className="text-center text-sm text-destructive" role="alert">
          Не получилось отправить заявку. Попробуй ещё раз или напиши нам в Telegram.
        </p>
      )}
      {status === 'not-configured' && (
        <p className="text-center text-sm text-muted-foreground" role="alert">
          Приём заявок через сайт ещё не подключён.{' '}
          <a
            href={siteConfig.contacts.telegram}
            className="font-medium text-foreground underline underline-offset-4"
          >
            Напиши нам в Telegram
          </a>{' '}
          — ответим быстро.
        </p>
      )}
    </form>
  )
}

type FieldProps = {
  id: string
  label: string
  error?: string
  children: ReactNode
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
