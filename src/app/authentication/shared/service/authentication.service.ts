import { OauthEnum } from './../enum/oauth.enum';
import { User } from './../model/user.model';
import { OAuth } from './../model/oauth.model';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { environment as env } from "../../../../environments/environment";
import { map, catchError }  from "rxjs/operators"
import { Observable, throwError }  from "rxjs"

/**
 * @classdesc Serviço responsável pelas regras de autenticação do usuário como login, logout e etc.
 * @author Gleidson Duarte <gleidson.duarte@pravaler.com.br>
 */
@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: User): Observable<OAuth> {
    const headers = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
    console.log("Oi")
    const body = new HttpParams()
      .set(`grant_type`, OauthEnum. GRANT_TYPE)
      .set(`client_id`, OauthEnum.CLIENT_ID)
      .set(`client_secret`, OauthEnum.CLIENT_SECRET)
      .set(`scope`, OauthEnum.SCOPE)
      .set(`username`, user.username)
      .set(`password`, user.password);

    return this.http.post(env.oauthURL, body.toString(), { headers }).pipe(
      catchError(this.handleError),
      map(this.jsonToOAuth)
    )
  }

  private jsonToOAuth(jsonData: any): OAuth {
    return jsonData as OAuth;
  }

  private handleError(error: any): Observable<any> {
    return throwError(error);
  }

  /**
   * Realiza a desautenticação do usuário no sistema de parametrização de produtos.
   * @author Gleidson Duarte <gleidson.duarte@pravaler.com.br>
   */
  logout(): void {
    localStorage.removeItem("id_token");

    this.router.navigate(["/login"]);
  }

  /**
   * Verifica se o usuário está ou não autenticado no sistema de parametrização de produtos.
   * @returns {boolean} boolean
   * @author Gleidson Duarte <gleidson.duarte@pravaler.com.br>
   */
  isLoggedIn(): boolean {
    return localStorage.getItem("id_token") ? true : false;
  }
}
