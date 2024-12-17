import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-affiche-detail-languages',
  standalone: false,
  
  templateUrl: './affiche-detail-languages.component.html',
  styleUrl: './affiche-detail-languages.component.css'
})
export class AfficheDetailLanguagesComponent {
@Input() selectedLanguage!: string ;
}
