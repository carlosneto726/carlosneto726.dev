import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/Project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: '../projects/projects.component.css'
})

export class ProjectComponent implements OnInit {

  projects: Project[] = [
    {
      name: "Marcozerotop.com.br",
      img_url: "../../../assets/images/marcozero.png",
      languages: [
        "PHP",
        "Laravel",
        "Bootstrap",
        "HTML",
        "CSS",
        "Javascript"
      ],
      description: "A website to publicize the Marcozero, its a enterprize specialized in topografy. It was my first job, and i was responsible to develop the front-end, back-end and deploy the website.",
      homepage_url: "https://marcozerotop.com.br"
    },
    {
      name: "Cooperativas Unidas",
      img_url: "../../../assets/images/cooperativasunidas.png",
      languages: [
        "PHP",
        "Laravel",
        "Bootstrap",
        "HTML",
        "CSS",
        "Javascript",
        "Pusher",
        "MySQL",
        "CanvasJS",
        "ViaCEP"
      ],
      description: "A web platform based on local cooperative needs, I did this project for my final college project. It has many features such as forums, real-time chat, it is basically an e-commerce based on cooperatives.",
      homepage_url: "https://cooperativasunidas.online",
      github_repo_url: "https://github.com/carlosneto726/TCC"
    },
    {
      name: "Secitec Formosa",
      img_url: "../../../assets/images/secitec.png",
      languages: [
        "PHP",
        "Laravel",
        "Bootstrap",
        "HTML",
        "CSS",
        "Javascript",
        "MySQL",
        "FPDF"
      ],
      description: "This is a website made for an event that takes place every year at IFG (my college), the website was responsible for accrediting, publicizing and generating certificates for events that took place in this edition of the event. I was responsible for developing part of the back-end and worked as tech leader for the entire team that was developing the project.",
      homepage_url: "https://secitecformosa.online",
      github_repo_url: "https://github.com/carlosneto726/SECITEC"
    },
  ];

  ngOnInit(): void {
    
  }
}
