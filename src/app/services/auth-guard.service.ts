import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router
  ) { }


  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (userSession) => {
            if (userSession){
              resolve(true);
            }else {
              this.router.navigate(['/listmeetings']);
              resolve(false);
            }
          }

        );
      }
    ); 
  }


}
