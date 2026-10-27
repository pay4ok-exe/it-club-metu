import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/shared/ui/avatar'

export type Person = {
  name: string
  image: string
}

type PeopleStackProps = {
  people: Person[]
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

export function PeopleStack({ people, size = 'default', className }: PeopleStackProps) {
  return (
    <AvatarGroup className={className}>
      {people.map((person) => (
        <Avatar key={person.name} size={size}>
          <AvatarImage src={person.image} alt={person.name} />
          <AvatarFallback className="bg-azure font-medium text-foreground">
            {person.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  )
}
