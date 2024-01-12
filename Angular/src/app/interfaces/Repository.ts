import { Language } from "./Language"

export interface Repository{
    name: string,
    description: string,
    html_url: string,
    languages: Language[],
    contributors_url: string,
    homepage?: string,
    stargazers_count: number,
    topics: string[]
}