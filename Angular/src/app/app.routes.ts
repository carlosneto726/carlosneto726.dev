import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'tools', component: ToolsComponent},
    {path: 'contact', component: ContactComponent}
];
