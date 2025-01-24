'use client'

import { ProjectList } from "@/components/project-list"
import { useGithubRepos } from "@/hooks/useGithubRepos"
import { Suspense } from "react"
import ProjectsLoading from "./loading"

export default function ProjectsPage() {
  const { data: repos, isLoading, error } = useGithubRepos()

  return (
    <div className="container py-12 md:py-24 space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Meus Projetos
      </h1>
      <div suppressHydrationWarning>
        <Suspense fallback={<ProjectsLoading />}>
          <ProjectList initialRepos={repos} />
        </Suspense>
      </div>
    </div>
  )
}
