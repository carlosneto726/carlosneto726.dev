import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GithubReposService } from '../../service/github-repos.service';
import { Repository } from '../../interfaces/Repository';
import { Language } from '../../interfaces/Language';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent implements OnInit {
  public pageTitle: string = "Carlosneto726.Dev | Projects";
  public allRepos: Repository[];
  public language: Repository[];

  ngOnInit(): void {
    this.getRepos();
  }

  constructor(private titleService: Title, private githubRepos: GithubReposService) {
    this.titleService.setTitle(this.pageTitle);
  }

  getRepos() {
    this.githubRepos.getAllPublicRepos().subscribe(
      (repositories) => {

        repositories.map(
          repo => this.githubRepos.getLanguages(repo.languages_url).subscribe(
            language => repo.languages = Object.keys(language)
          )
        )

        console.log(repositories)
        this.allRepos = repositories;
      }
    );
  }
}
