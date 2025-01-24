export default function ProjectsLoading() {
  return (
    <div className="container py-12 md:py-24 space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Meus Projetos
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="mt-4 h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="mt-2 h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
