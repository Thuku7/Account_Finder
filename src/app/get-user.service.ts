import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {


  constructor(private httpClient: HttpClient) { }

  private apiUrl = '';
  private clientId =  '8864018f0f4565e186eb';
  private clientSecret = 'c08f9cac2efd2256c29b5cdd882f00285376a747';
  private token = "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"

  getUserData(searchQuery:any){
    return this.httpClient.get(`https://api.github.com/users/${searchQuery}?${this.clientId}&client_secret=${this.clientSecret}`)
   
  }

  getUserRepos(searchQuery:any){
    return this.httpClient.get(`${this.apiUrl}${searchQuery}/repos?${this.token}`)
  }
}
