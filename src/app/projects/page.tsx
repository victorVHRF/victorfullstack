import { ProjectList } from "@/components/project-list"

async function getGithubRepos() {
  const res = await fetch("https://api.github.com/users/victorVHRF/repos", { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

export default async function ProjectsPage() {
  const repos = await getGithubRepos()

  return (
    <div className="container py-12 md:py-24 space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Meus Projetos</h1>
      <ProjectList initialRepos={repos} />
    </div>
  )
}

