import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  description: string
  className?: string
}

export function StatsCard({ title, value, description, className }: StatsCardProps) {
  return (
    <Card className={`${className} border-none shadow-lg shadow-black/40`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-zinc-100 text-sm font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="md:text-2xl text-4xl font-bold text-white text-effect">{value}</div>
        <CardDescription className="text-zinc-200 mt-1">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

