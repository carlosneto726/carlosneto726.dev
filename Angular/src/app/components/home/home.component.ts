import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  response = "Fetching"

  makeCurl() {
    document.getElementById("cursor").innerHTML = "";
    document.getElementById("fetching").hidden = false;
    setTimeout(this.NotHideCodeBlock, 3000);
  }


  ngOnInit(): void {
    this.output(this.syntaxHighlight(JSON.stringify(this.theObj, null, 4)));
  }

  theObj = {
    "Carlos Henrique T. C. Neto": {
      "age": 21,
      "currentLocation": "Formosa-GO, Brazil",
      "role": "Full-Stack",
      "level": "Júnior",
      "searchingJobs": true,
      "graduation": "Tecnologia em Análise e Desenvolvimento de Sistemas (TADS), 2020-2023",
      "skills": ["WebScrapping", "Automatization", "Full-Stack Web Development", "Server administration", "Database administration"],
      "tecnologies": ["Python", "Java", "PHP", "C#", "Javascript", "Laravel", "Django", "ASP.NET", "PostgreSQL", "MySQL", "SQLite", "HTML", "CSS", "Bootstrap", "Debian server"],
      "interests": ["Formula 1", "Vasco da Gama", "Games", "Animes", "Tecnologies", "Cars", "Music"]
    }
  }


  codeBlock: string = `
  StatusCode         : 200
  StatusDescription  : OK
  Content            :<br>`;

  output(inp: string) {
    this.codeBlock += inp;
  }

  syntaxHighlight(json: string) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }

  NotHideCodeBlock(){
    document.getElementById("codeBlock").hidden = false;
    document.getElementById("fetching").hidden = true;
    document.getElementById("final-cursor").hidden = false;
  }

}
