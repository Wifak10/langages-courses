import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false, 
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']  
})
export class TestComponent {
  languages: string[] = [
    "TypeScript",
    "Swift",
    "Kotlin",
    "Go (Golang)",
    "Ruby",
    "PHP",
    "C++",
    "Java",
    "Python",
    "JavaScript"
  ];
  
  // Initialisation de la variable 'showLanguages'
  showLanguages: boolean = true; 

  // Variable pour gérer le langage sélectionné
  selectedLanguage: string = '';
  textColor: string = 'blue' ;
  fontSize: number = 24 ;
  fontFamily: string = 'Cambria' ;
  activeLanguages: string[] = ['TypeScript', 'JavaScript', 'PHP'];
  recupValue(param:string){
    this.selectedLanguage = param ;
  }

}
