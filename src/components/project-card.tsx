'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, Star } from "lucide-react"

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

interface ProjectCardProps {
  repo: Repo
}

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg">{repo.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{repo.description || "Sem descrição disponível."}</p>
        {repo.language && (
          <Badge variant="secondary" className="mb-2">
            {repo.language}
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm">{repo.stargazers_count}</span>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <GitBranch className="h-4 w-4 mr-2" />
            Ver no GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

