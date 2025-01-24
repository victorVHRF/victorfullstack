import { useQuery } from '@tanstack/react-query'

export function useGithubRepos() {
  return useQuery({
    queryKey: ['github-repos'],
    queryFn: async () => {
      const res = await fetch("https://api.github.com/users/victorVHRF/repos", {
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/json',
        },
      })
      
      if (!res.ok) {
        throw new Error("Failed to fetch data")
      }
      
      return res.json()
    }
  })
}
