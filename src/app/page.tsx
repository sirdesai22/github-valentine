"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [username, setUsername] = useState("");
  return (
    <main className="min-h-screen flex items-center justify-center  p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            GitHub Valentine
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Discover your coding relationships based on your GitHub activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                name="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            <Button onClick={()=>window.location.href = `/stats/${username}`} className="w-full bg-red-500 hover:bg-pink-600 text-white">
              Find My Code Romance
            </Button>
          </div>
        </CardContent>
        <p className="text-xs text-center text-gray-200 mb-2">Built with ❤️ by <a href="https://www.maximalstudio.in/" target="_blank">Maximal Studio</a></p>
      </Card>
    </main>
  )
}

