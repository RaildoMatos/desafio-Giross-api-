/* eslint-disable prettier/prettier */
// auth/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private validateRequest(_request: any) {
    // Implemente lógica de validação do token JWT aqui
    return true;
  }
}
