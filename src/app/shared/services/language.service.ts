import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'te';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<Language>('en');
  public language$ = this.currentLanguage.asObservable();

  private translations = {
    'home': { en: 'Home', te: 'హోమ్' },
    'social_activities': { en: 'Social Activities', te: 'సామాజిక కార్యకలాపాలు' },
    'local_development': { en: 'Local Development', te: 'స్థానిక అభివృద్ధి' },
    'support': { en: 'Support', te: 'మద్దతు' },
    'login': { en: 'Login', te: 'లాగిన్' },
    'magazines': { en: 'Magazines', te: 'మ్యాగజైన్లు' },
    'select_magazine': { en: 'Select a magazine to view with our modern PDF reader', te: 'మా ఆధునిక PDF రీడర్తో చూడటానికి మ్యాగజైన్ను ఎంచుకోండి' },
    'loading_magazines': { en: 'Loading magazines...', te: 'మ్యాగజైన్లు లోడ్ అవుతున్నాయి...' },
    'choose_magazine': { en: 'Choose a Magazine:', te: 'మ్యాగజైన్ను ఎంచుకోండి:' },
    'select_magazine_option': { en: '-- Select Magazine --', te: '-- మ్యాగజైన్ను ఎంచుకోండి --' },
    'back': { en: 'Back', te: 'వెనుకకు' },
    'download': { en: 'Download', te: 'డౌన్లోడ్' },
    'loading_pdf': { en: 'Loading PDF viewer...', te: 'PDF వ్యూయర్ లోడ్ అవుతుంది...' },
    'pdf_viewer': { en: 'PDF Viewer', te: 'PDF వ్యూయర్' },
    'view_options': { en: 'Use the options below to view the magazine:', te: 'మ్యాగజైన్ను చూడటానికి క్రింది ఎంపికలను ఉపయోగించండి:' },
    'open_new_tab': { en: 'Open in New Tab', te: 'కొత్త ట్యాబ్లో తెరవండి' },
    'download_pdf': { en: 'Download PDF', te: 'PDF డౌన్లోడ్ చేయండి' }
  };

  setLanguage(lang: Language) {
    this.currentLanguage.next(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): Language {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  }

  translate(key: string): string {
    const translation = this.translations[key as keyof typeof this.translations];
    if (!translation) return key;
    return translation[this.getCurrentLanguage()];
  }

  constructor() {
    const savedLang = this.getCurrentLanguage();
    this.currentLanguage.next(savedLang);
  }
}