import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireauth : AngularFireAuth, private router : Router ) { }

  //signin method
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=>{
      localStorage.setItem('token', 'true');
      this.router.navigate(['dashboard']);
      alert('signin successful');
    },err=>{
      alert(err.message);
      this.router.navigate(['/signin']);

    } )
}

//register method

register(email : string, password : string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=>{
    alert('registration successful');
    this.router.navigate(['/signin']);
},err=>{
  alert(err.message);
  this.router.navigate(['/register']);
})

}

//signout method
signout(){
  this.fireauth.signOut().then( ()=>{
    this.router.navigate(['/signin']);
    localStorage.removeItem('token')
  }, err=>{
    alert(err.message)
  })
}



}
