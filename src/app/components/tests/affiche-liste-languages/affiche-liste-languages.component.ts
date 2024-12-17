import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-affiche-liste-languages',
  standalone: false,
  templateUrl: './affiche-liste-languages.component.html',
  styleUrls: ['./affiche-liste-languages.component.css']  // styleUrls au pluriel
})
export class AfficheListeLanguagesComponent {
  @Input() listeLanguages!: string[];  // Liste des langages entrée depuis le parent
  @Output() sendvalue = new EventEmitter<string>();  // Initialisation correcte avec 'new EventEmitter<string>'

  selectedLanguage?: string;  // Langage sélectionné

  selectLanguage(param: string): void {
    this.sendvalue.emit(param);  // Émet l'événement vers le parent
    this.selectedLanguage = param;  // Met à jour le langage sélectionné
  }
}
