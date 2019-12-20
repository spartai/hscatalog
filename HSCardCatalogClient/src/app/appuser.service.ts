import { Injectable } from '@angular/core';
import { AppUser } from './appuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
      private url = 'http://localhost:8080/user';




      constructor (
          private http: HttpClient
      ) {}

      public addUser(user: AppUser): Promise<AppUser> {
          return this.http.post<AppUser>(this.url, user);
      }
  }