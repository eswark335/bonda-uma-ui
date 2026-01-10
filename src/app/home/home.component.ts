import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

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
    birthDate: '30 January 1966',
    birthPlace: 'Vijayawada, Krishna district, Andhra Pradesh',
    spouse: 'Sujatha',
    children: 2,
    currentTerm: '2024–Incumbent',
    previousTerm: '2014–2019',
    positions: [
      'TDP Polit Bureau Member',
      'State Telugu Desam Party General Secretary',
      'TTD Board Member',
      'Whip in Assembly (12 November 2024)'
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
}