import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserHeaderProps {
  username: string
  avatarUrl: string
  name: string
}

export function UserHeader({ username, avatarUrl, name }: UserHeaderProps) {
  return (
    <Card className="border-zinc-800 bg-zinc-900">
      <CardContent className="flex items-center gap-4 py-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold text-white">{name}</h1>
          <p className="text-zinc-400">@{username}</p>
        </div>
      </CardContent>
    </Card>
  )
}

