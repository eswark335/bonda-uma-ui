import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentLanguage: 'en' | 'te' = 'en';

  constructor(private router: Router, private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  get videoData() {
    const lang = this.languageService.getCurrentLanguage();
    return {
      title: lang === 'te' ? 'ప్రమాణ స్వీకారం వీడియో' : 'Oath Taking Video',
      description: lang === 'te' ? 'శాసనసభ సభ్యునిగా ప్రమాణ స్వీకారం' : 'Taking oath as Member of Legislative Assembly'
    };
  }

  get content() {
    return {
      en: {
        biography: 'Biography',
        personalDetails: 'Personal Details',
        politicalCareer: 'Political Career',
        born: 'Born',
        place: 'Place',
        parents: 'Parents',
        spouse: 'Spouse',
        children: 'Children',
        currentTerm: 'Current Term',
        previousTerm: 'Previous Term',
        constituency: 'Constituency',
        positionsHeld: 'Positions Held',
        termHighlights: 'Term Highlights',
        contactInfo: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        office: 'Office',
        officeHours: 'Office Hours'
      },
      te: {
        biography: 'జీవిత చరిత్ర',
        personalDetails: 'వ్యక్తిగత వివరాలు',
        politicalCareer: 'రాజకీయ జీవితం',
        born: 'పుట్టిన తేదీ',
        place: 'స్థలం',
        parents: 'తల్లిదండ్రులు',
        spouse: 'భార్య',
        children: 'పిల్లలు',
        currentTerm: 'ప్రస్తుత పదవీకాలం',
        previousTerm: 'మునుపటి పదవీకాలం',
        constituency: 'నియోజకవర్గం',
        positionsHeld: 'నిర్వహించిన పదవులు',
        termHighlights: 'ముఖ్య విజయాలు',
        contactInfo: 'సంప్రదింపు సమాచారం',
        phone: 'ఫోన్',
        email: 'ఇమెయిల్',
        office: 'కార్యాలయం',
        officeHours: 'కార్యాలయ సమయం'
      }
    };
  }

  navigateToSupport() {
    this.router.navigate(['/support']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  get mlaData() {
    const lang = this.currentLanguage;
    return {
      name: lang === 'te' ? 'బొండ ఉమామహేశ్వర రావు' : 'Bonda Uma Maheswara Rao',
      party: lang === 'te' ? 'తెలుగు దేశం పార్టీ' : 'Telugu Desam Party',
      constituency: lang === 'te' ? 'విజయవాడ సెంట్రల్' : 'Vijayawada Central',
      position: lang === 'te' ? 'శాసనసభ సభ్యుడు' : 'Member of Legislative Assembly',
      birthDate: lang === 'te' ? 'జనవరి 30, 1966' : 'January 30, 1966',
      birthPlace: lang === 'te' ? 'విజయవాడ' : 'Vijayawada',
      parents: lang === 'te' ? 'కనక రావు మరియు పుష్పావతి' : 'Kanaka Rao and Pushpavathi',
      spouse: lang === 'te' ? 'సుజాత బొండ' : 'Sujatha Bonda',
      children: lang === 'te' ? 'సిద్ధార్థ మరియు రవి తేజ' : 'Siddhartha and Ravi Teja',
      bio: lang === 'te' ? 'జనవరి 30, 1966న విజయవాడలో కనక రావు మరియు పుష్పావతి దంపతులకు జన్మించారు. టీడీపీ అట్టడుగు కార్యకర్త నుండి గౌరవనీయ నాయకుడిగా అభివృద్ధి చెందారు. సుజాత బొండతో వివాహం చేసుకున్నారు; సిద్ధార్థ మరియు రవి తేజ అనే ఇద్దరు కుమారులు.' : 'Born January 30, 1966, in Vijayawada to Kanaka Rao and Pushpavathi. Rose from TDP grassroots activist to respected leader through dedicated public service. Married to Sujatha Bonda; proud father of Siddhartha and Ravi Teja.',
      currentTerm: lang === 'te' ? '2024–ప్రస్తుతం' : '2024–Incumbent',
      previousTerm: lang === 'te' ? '2014–2019' : '2014–2019',
      positions: lang === 'te' ? [
        'అసెంబ్లీ విప్ (నవంబర్ 12, 2024 నుండి)',
        'టీడీపీ పొలిట్ బ్యూరో సభ్యుడు',
        'రాష్ట్ర తెలుగు దేశం పార్టీ ప్రధాన కార్యదర్శి',
        'మాజీ TTD బోర్డు సభ్యుడు'
      ] : [
        'Assembly Whip (since November 12, 2024)',
        'TDP Polit Bureau Member',
        'State Telugu Desam Party General Secretary',
        'Ex-TTD Board Member'
      ],
      termHighlights: lang === 'te' ? [
        { year: '2024', title: 'అద్భుత విజయం', desc: '130,034 ఓట్లు (63.52%) సాధించి, YSRCP ప్రత్యర్థిని ఓడించారు' },
        { year: '2014', title: 'భారీ విజయం', desc: '27,161 ఓట్ల మెజారిటీతో గెలిచి, ఓటర్ల విశ్వాసం సంపాదించారు' },
        { title: 'అభివృద్ధి ప్రభావం', desc: 'వడ్డెర కాలనీలో ముఖ్యమైన UGD మౌలిక సదుపాయాలను అందించారు' },
        { title: 'ప్రజా విశ్వాసం', desc: 'అంకితభావం గల MLAగా 57.5% సంతృప్తి రేటింగ్' }
      ] : [
        { year: '2024', title: 'Dominant Victory', desc: 'Secured 130,034 votes (63.52%), crushing YSRCP opposition' },
        { year: '2014', title: 'Landslide Win', desc: 'Won by 27,161 votes, forging rock-solid voter loyalty' },
        { title: 'Development Impact', desc: 'Delivered key UGD infrastructure in Vaddera Colony' },
        { title: 'Public Trust', desc: '57.5% satisfaction rating as dedicated MLA' }
      ]
    };
  }

  get supportData() {
    const lang = this.currentLanguage;
    return {
      title: lang === 'te' ? 'మద్దతు అవసరమా లేదా ప్రశ్నలు ఉన్నాయా?' : 'Need Support or Have Questions?',
      description: lang === 'te' ? 'నేను విజయవాడ సెంట్రల్ నియోజకవర్గ ప్రజలకు సేవ చేయడానికి ఇక్కడ ఉన్నాను.' : 'I am here to serve the people of Vijayawada Central constituency. Whether you need assistance with government services, have concerns about local development, or want to share your suggestions for community improvement.',
      features: lang === 'te' ? [
        'ప్రభుత్వ సేవల సహాయం',
        'స్థానిక అభివృద్ధి సమస్యలు',
        'సముదాయ కల్యాణ కార్యక్రమాలు',
        'ప్రజా మనవి పరిష్కారం',
        'మూలభూత వసతుల అభివృద్ధి ప్రశ్నలు'
      ] : [
        'Government Service Assistance',
        'Local Development Issues',
        'Community Welfare Programs',
        'Public Grievance Resolution',
        'Infrastructure Development Queries'
      ],
      buttonText: lang === 'te' ? 'మద్దతు సంప్రదించండి' : 'Contact Support',
      note: lang === 'te' ? 'సోమవారం నుంచి శుక్రవారం వరకు, ఉదయం 9 నుంచి సాయంత్రం 6 వరకు' : 'Available Monday to Friday, 9 AM - 6 PM'
    };
  }

  dashboardStats = {
    title: 'Administrative Dashboard',
    description: 'View real-time analytics and performance metrics',
    stats: [
      { label: 'Grievances Resolved', value: 298, icon: '✅' },
      { label: 'Development Projects', value: 156, icon: '🏗️' },
      { label: 'Public Meetings', value: 234, icon: '👥' },
      { label: 'Donations Received', value: '₹18.5L', icon: '💰' }
    ]
  };

  contactInfo = {
    phone: '+91 99483 31314',
    email: 'bondauma@yahoo.co.in',
    office: '#43-100-10, Ground Floor, PNT Colony, Ajith Singh Nagar, Near Smile Hospital, VIJAYAWADA - 520015',
    hours: 'Monday to Friday, 9 AM - 6 PM'
  };
}