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
  constructor(private router: Router, private languageService: LanguageService) {}

  get videoData() {
    const lang = this.languageService.getCurrentLanguage();
    return {
      title: lang === 'te' ? 'ప్రమాణ స్వీకారం వీడియో' : 'Oath Taking Video',
      description: lang === 'te' ? 'శాసనసభ సభ్యునిగా ప్రమాణ స్వీకారం' : 'Taking oath as Member of Legislative Assembly'
    };
  }

  navigateToSupport() {
    this.router.navigate(['/support']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  mlaData = {
    name: 'Bonda Umamaheswara Rao',
    party: 'Telugu Desam Party',
    constituency: 'Vijayawada Central',
    position: 'Member of Legislative Assembly',
    birthDate: 'January 30, 1966',
    birthPlace: 'Vijayawada',
    parents: 'Kanaka Rao and Pushpavathi',
    spouse: 'Sujatha Bonda',
    children: 'Siddhartha and Ravi Teja',
    bio: 'Born January 30, 1966, in Vijayawada to Kanaka Rao and Pushpavathi. Rose from TDP grassroots activist to respected leader through dedicated public service. Married to Sujatha Bonda; proud father of Siddhartha and Ravi Teja.',
    currentTerm: '2024–Incumbent',
    previousTerm: '2014–2019',
    positions: [
      'Assembly Whip (since November 12, 2024)',
      'TDP Polit Bureau Member',
      'State Telugu Desam Party General Secretary',
      'Ex-TTD Board Member'
    ],
    termHighlights: [
      { year: '2024', title: 'Dominant Victory', desc: 'Secured 130,034 votes (63.52%), crushing YSRCP opposition' },
      { year: '2014', title: 'Landslide Win', desc: 'Won by 27,161 votes, forging rock-solid voter loyalty' },
      { title: 'Development Impact', desc: 'Delivered key UGD infrastructure in Vaddera Colony' },
      { title: 'Public Trust', desc: '57.5% satisfaction rating as dedicated MLA' }
    ]
  };

  supportData = {
    title: 'Need Support or Have Questions?',
    description: 'I am here to serve the people of Vijayawada Central constituency. Whether you need assistance with government services, have concerns about local development, or want to share your suggestions for community improvement.',
    features: [
      'Government Service Assistance',
      'Local Development Issues',
      'Community Welfare Programs',
      'Public Grievance Resolution',
      'Infrastructure Development Queries'
    ],
    buttonText: 'Contact Support',
    note: 'Available Monday to Friday, 9 AM - 6 PM'
  };

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
    phone: '+91 866 257 1234',
    email: 'mla.vijayawadacentral@tdp.org.in',
    office: 'MLA Office, Vijayawada Central Constituency, Andhra Pradesh',
    hours: 'Monday to Friday, 9 AM - 6 PM'
  };
}