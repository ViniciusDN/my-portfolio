import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../types/repository.interface';

export const GITHUB_API_URL = "https://api.github.com/users/ViniciusDN/repos"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<HttpResponse<Repository[]>>{
    return this.http.get<HttpResponse<Repository[]>>(GITHUB_API_URL)
  }
}
