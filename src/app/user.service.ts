import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 0, email: "test@gmail.com", password: "password1234" },
    { id: 1, email: "johndoe@gmail.com", password: "password456" },
    { id: 2, email: "janedoe@gmail.com", password: "password789" },
  ];

  private messageSubject = new BehaviorSubject<string>('');
  message$ = this.messageSubject.asObservable();

  constructor() { }

  checkUser(email: string, password: string): boolean {
    const userExists = this.users.find(user => user.email === email && user.password === password);
    
    if (!userExists) {
      this.messageSubject.next('Utilisateur non trouvé. Veuillez bien créer un compte.');
      return false;
    }
    
    this.messageSubject.next('');
    return true;
  }

  login(email: string | undefined, password: string | undefined): boolean {
    const user = this.users.find(u => u.email === email);
    
    if (!user) {
      return false;
    }
    
    if (user.password !== password) {
      return false;
    }
    
    return true;
  }
}