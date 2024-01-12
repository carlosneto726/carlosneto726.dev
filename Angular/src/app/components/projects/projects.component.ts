import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GithubReposService } from '../../service/github-repos.service';
import { Repository } from '../../interfaces/Repository';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent implements OnInit {
  public allRepos?: Repository[];
  public language?: Repository[];

  ngOnInit(): void {
    this.getRepos();
  }

  constructor(private titleService: Title, private githubRepos: GithubReposService) {
    this.titleService.setTitle("Carlosneto726.Dev | Projects");
  }

  getRepos() {
    this.githubRepos.getAllPublicRepos().subscribe(
      (repositories) => {

        repositories.map(
          repo => this.githubRepos.getLanguages(repo.languages_url).subscribe(
            language => repo.languages = Object.keys(language)
          )
        )
        this.allRepos = repositories;
      }
    );
  }
}
