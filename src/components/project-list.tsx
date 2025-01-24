"use client"

import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

interface ProjectListProps {
  initialRepos: Repo[]
}

export function ProjectList({ initialRepos }: ProjectListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [mounted, setMounted] = useState(false)

  const reposPerPage = 6
  const totalPages = Math.ceil(initialRepos?.length / reposPerPage)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const indexOfLastRepo = currentPage * reposPerPage
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage
  const currentRepos = initialRepos?.slice(indexOfFirstRepo, indexOfLastRepo)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentRepos?.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">
          Página {currentPage} de {totalPages}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

