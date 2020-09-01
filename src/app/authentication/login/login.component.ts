import { OAuth } from './../shared/model/oauth.model';
import { User } from './../shared/model/user.model';
import { AuthenticationService } from '../shared/service/authentication.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  loginForm: FormGroup;
  submittingForm: boolean = false;
  serverErrorMessages: string = null;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(["/home"]);
    }
    this.buildLoginForm();
  }

  submit() {
    this.submittingForm = true;
    this.authenticateUser();
  }

  private buildLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.loginForm.valueChanges.subscribe(newVal => {
      console.log(newVal)
    })
  }

  private authenticateUser() {
    this.user = this.loginForm.value;
    console.log(this.loginForm)
    this.authenticationService.login(this.user)
      .subscribe(
        (oauth) => this.handleSuccess(oauth),
        (error) => this.handleError(error)
      );
  }

  private handleSuccess(oauth: OAuth) {
    // const expiresAt = moment().add(oauth.expires_in, "second");

    localStorage.setItem("id_token", oauth.access_token);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem("username", this.user.username);

    this.router.navigate([""]);
  }

  private handleError(error) {

    this.submittingForm = false;

    if (error.status === 401) {
      this.serverErrorMessages = "Usuário e/ou senha inválidos.";
    } else {
      this.serverErrorMessages = "Falha na comunicação com o servidor. Por favor, tente mais tarde.";
    }
  }
}
