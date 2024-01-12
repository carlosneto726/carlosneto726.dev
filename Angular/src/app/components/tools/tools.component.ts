import { Component, OnInit } from '@angular/core';
import { GithubReposService } from '../../service/github-repos.service';
import { CommonModule } from '@angular/common';
import { Language } from '../../interfaces/Language';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartDataFormat } from '../../interfaces/ChartDataFormat';
import { firstValueFrom, map } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent implements OnInit{

  allRepos: any;
  langs: any = [];
  total: number = 0;
  colors: any = [];
  frameworksLibralies = [
    {
      name: "Laravel",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      link: "https://laravel.com/",
      description: "Laravel is an easy-to-use web framework that will help you create extensible PHP-based websites and web applications at scale."
    },
    {
      name: "Django",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      link: "https://www.djangoproject.com/",
      description: "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites."
    }, 
    {
      name: "ASP .NET EF Core",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      link: "https://dotnet.microsoft.com/pt-br/apps/aspnet",
      description: "ASP.NET is a server-side technology used for developing dynamic websites and web applications."
    }, 
    {
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      link: "https://www.postgresql.org/",
      description: "PostgreSQL is an object-relational database management system (ORDBMS)"
    }, 
    {
      name: "MySQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      link: "https://www.mysql.com/",
      description: "MySQL is used to store data in tables that map to objects. Each table has a schema defining what columns each row of the table will have."
    }, 
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      link: "https://getbootstrap.com/",
      description: "Bootstrap is a free front-end framework, with the purpose of making web development faster and easier."
    }, 
    {
      name: "Angular",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
      link: "https://angular.io/",
      description: "Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications."
    }, 
    {
      name: "Selenium",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
      link: "https://www.selenium.dev/",
      description: "Selenium is an open-source, automated testing tool used to test web applications across various browsers."
    }, 
    {
      name: "PyautoGUI",
      img: "",
      link: "https://pyautogui.readthedocs.io/en/latest/",
      description: "PyAutoGUI is a cross-platform GUI automation Python module. Used to programmatically control the mouse & keyboard."
    } ,
    {
      name: "Pycord",
      img: "https://docs.pycord.dev/en/stable/_static/pycord_logo.png",
      link: "https://docs.pycord.dev/en/stable/",
      description: "Pycord is a modern, easy to use, feature-rich, and async ready API wrapper for Discord."
    }
  ];

  constructor(private titleService: Title, private githubService: GithubReposService) { 
    this.titleService.setTitle("Carlosneto726.Dev | Tools");
   }
  ngOnInit(): void {
    this.setAsyncRepos();
    this.langs.sort();
  }

  async setAsyncRepos(){
    this.allRepos = await firstValueFrom(this.githubService.getAllPublicRepos());
    for(let repo of this.allRepos){
      this.total += await this.formatLangs(repo.languages_url)
    }
    for(let name in this.langs){
      let value = this.langs[name]
      this.langs[name] = Math.floor(((value / this.total) * 100) * 100) / 100;
      this.colors[name] = Math.floor(Math.random()*16777215).toString(16);
    }
  }

  async formatLangs(languages_url: string){
    var langs_repo = await firstValueFrom(this.githubService.getLanguages(languages_url));
    var total = 0;
    for(let name in langs_repo){
      let value = langs_repo[name]
      total += value
      if(isNaN(Number(this.langs[name]))){
        this.langs[name] = value
      }else{
        this.langs[name] += value
      }
    }
    return total
  }
}
