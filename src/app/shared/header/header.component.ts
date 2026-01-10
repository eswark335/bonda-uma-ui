import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../services/language.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage: Language = 'en';

  get mlaName() {
    return this.currentLanguage === 'te' ? 'బోండ ఉమామహేశ్వర రావు' : 'Bonda Umamaheswara Rao';
  }

  get designation() {
    return this.currentLanguage === 'te' ? 'MLA, విజయవాడ సెంట్రల్ కాన్స్టిట్యూఎన్సీ' : 'MLA, Vijayawada Central Constituency';
  }

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