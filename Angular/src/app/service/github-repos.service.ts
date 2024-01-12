import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "https://api.github.com/users/carlosneto726/repos";

  getAllPublicRepos(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getLanguages(url: string): Observable<any[]>{
    return this.http.get<any[]>(url);
  }
}
