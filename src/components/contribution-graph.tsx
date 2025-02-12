"use client"
import { Card, CardContent } from "@/components/ui/card"

export function ContributionGraph() {
  return (
    <Card className="border-zinc-800 bg-zinc-900">
      <CardContent className="py-4">
        <div className="h-24 grid grid-cols-52 gap-1">
            {Array.from({ length: Math.floor(window.innerWidth / 10) * 7 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-sm ${
              Math.random() > 0.7 ? "bg-green-500" : Math.random() > 0.8 ? "bg-green-400" : "bg-zinc-800"
              }`}
            />
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

