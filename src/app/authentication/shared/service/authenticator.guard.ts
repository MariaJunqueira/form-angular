import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

/**
 * @classdesc Guarda resonsável por verificar se o usuário está ou não autenticado,
 * caso sim, permite que o usuário acesse rotas protegidas que usam a propriedade "canActivate"
 * com o valor "AuthenticationGuard", caso não, redireciona o usuário para a tela de login.
 * @author Gleidson Duarte <gleidson.duarte@pravaler.com.br>
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authenticationService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}
