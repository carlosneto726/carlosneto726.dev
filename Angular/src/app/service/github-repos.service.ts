import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../interfaces/Repository';
import { Language } from '../interfaces/Language';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://api.github.com/users/carlosneto726/repos";

  getAllPublicRepos(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getLanguages(url: string): Observable<Language[]>{
    return this.http.get<Language[]>(url);
  }
}
