import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  private token: string | undefined;
  username: any;
  password: any;
  baseUrl: any; //?????????? aqui falta la parte del routing


constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmitLogin(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password })
      .pipe(map(response => {
        if (response && response.token) {
          // Guarda el token en la variable y en LocalStorage
          this.token = response.token;
          localStorage.setItem('currentUser', JSON.stringify({ username, token: this.token }));
        }
      }));
  }
}
