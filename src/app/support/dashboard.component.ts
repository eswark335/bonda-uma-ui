import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dashboardData = {
    userMetrics: {
      totalClicks: 15420,
      uniqueVisitors: 8750,
      pageViews: 23680,
      avgSessionTime: '4:32'
    },
    grievances: {
      received: 342,
      resolved: 298,
      pending: 44,
      resolutionRate: 87
    },
    activities: {
      completed: 156,
      planned: 23,
      ongoing: 8,
      totalBudget: 2500000
    },
    political: {
      ralliesAttended: 45,
      speechesGiven: 78,
      meetingsHeld: 234,
      constituencyVisits: 89
    },
    donations: {
      totalReceived: 1850000,
      educationFund: 650000,
      healthcareFund: 480000,
      infrastructureFund: 720000
    }
  };

  chartData = {
    grievancesTrend: [65, 78, 82, 91, 87, 95],
    activitiesProgress: [
      { name: 'Road Development', progress: 85 },
      { name: 'School Infrastructure', progress: 72 },
      { name: 'Healthcare Centers', progress: 94 },
      { name: 'Water Supply', progress: 68 }
    ],
    monthlyDonations: [120000, 145000, 180000, 165000, 210000, 195000]
  };
}