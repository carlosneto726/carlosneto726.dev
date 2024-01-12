export interface Project{
    name: string,
    img_url: string,
    languages: string[],
    description: string,
    github_repo_url?: string,
    homepage_url?: string
}