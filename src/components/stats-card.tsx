import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  description: string
  className?: string
}

export function StatsCard({ title, value, description, className }: StatsCardProps) {
  return (
    <Card className={`border-zinc-800 bg-zinc-900 ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-zinc-100 text-sm font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="md:text-2xl text-xl font-bold text-white">{value}</div>
        <CardDescription className="text-zinc-200 mt-1">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

