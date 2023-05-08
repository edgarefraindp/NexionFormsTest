import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;

  getCurrentUserRole() {
    throw new Error('Method not implemented.');
  }
  get isAuthenticated() {
    return !!this.token && !!localStorage.getItem('currentUser');
  }
  get Token() {
    //use  || '{}'  to prevent null in string
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser) {
      return currentUser.token;
    }
    return null;
  }    

  constructor() { }
}
