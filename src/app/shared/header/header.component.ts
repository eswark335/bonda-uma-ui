import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mlaName = 'Bonda Umamaheswara Rao';
  designation = 'MLA, Vijayawada Central Constituency';
  currentLanguage: Language = 'en';

  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  onLogin() {
    console.log('Login clicked');
  }

  switchLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}