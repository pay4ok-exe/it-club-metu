import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/shared/lib/utils'

// Маркерная подсветка части заголовка, как в референсе
export function Highlight({ className, ...props }: ComponentProps<'mark'>) {
  return (
    <mark
      className={cn('rounded-sm bg-highlight box-decoration-clone px-2 text-foreground', className)}
      {...props}
    />
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-3',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>}
      <h2 className="font-heading text-3xl leading-tight font-semibold text-balance md:text-4xl">
        {title}
      </h2>
      {description && <p className="text-base text-pretty text-muted-foreground">{description}</p>}
    </div>
  )
}
