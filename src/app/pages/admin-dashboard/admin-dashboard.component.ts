import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  // Active section for sidebar navigation
  activeSection: 'dashboard' | 'orders' | 'games' | 'users' | 'analytics' =
    'dashboard';

  // Statistics data
  pageViews = 4442236;
  pageViewsGrowth = 59.2;

  totalUsers = 78250;
  usersGrowth = 19.2;

  totalOrders = 18800;
  ordersGrowth = -12.4;

  totalSales = 35078;
  salesGrowth = 27.8;

  weeklyIncome = 7650;

  // Orders data
  recentOrders = [
    {
      id: '12345678',
      product: 'Keyboard',
      orders: 125,
      status: 'Rejected',
      amount: 270.99,
    },
    {
      id: '12360564',
      product: 'Computer Accessories',
      orders: 100,
      status: 'Approved',
      amount: 583.46,
    },
    {
      id: '94564503',
      product: 'Camera Lens',
      orders: 40,
      status: 'Rejected',
      amount: 542.5,
    },
    {
      id: '86728656',
      product: 'TV',
      orders: 99,
      status: 'Pending',
      amount: 810.8,
    },
    {
      id: '98652366',
      product: 'Headset',
      orders: 50,
      status: 'Approved',
      amount: 90.29,
    },
    {
      id: '98732623',
      product: 'Mouse',
      orders: 69,
      status: 'Rejected',
      amount: 29.5,
    },
  ];

  // Analytics data
  analytics = [
    { metric: 'Company Finance Growth', value: '+45.14%' },
    { metric: 'Company Expenses Ratio', value: '0.58%' },
    { metric: 'Business Risk Cases', value: 'Low' },
  ];

  // Chart instances
  visitorChart: any;
  incomeChart: any;
  analyticsVisitorChart: any;
  analyticsSalesChart: any;

  constructor() {}

  ngOnInit() {
    // Initial setup without charts
  }

  ngAfterViewInit() {
    // Use AfterViewInit to ensure DOM elements are ready
    setTimeout(() => {
      this.initVisitorChart();
      this.initIncomeChart();

      // Initialize analytics charts when needed
      if (this.activeSection === 'analytics') {
        this.initAnalyticsCharts();
      }
    }, 500); // Increased timeout to ensure DOM is fully rendered
  }

  // Set active section for sidebar navigation
  setActiveSection(
    section: 'dashboard' | 'orders' | 'games' | 'users' | 'analytics'
  ) {
    this.activeSection = section;

    // Initialize analytics charts when switching to analytics section
    if (section === 'analytics') {
      setTimeout(() => {
        this.initAnalyticsCharts();
      }, 300);
    }
  }

  initVisitorChart() {
    const ctx = document.getElementById('visitorChart') as HTMLCanvasElement;
    if (!ctx) return; // Guard clause to prevent errors

    // Destroy existing chart if it exists to prevent duplicates
    if (this.visitorChart) {
      this.visitorChart.destroy();
    }

    this.visitorChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Page Views',
            data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 42],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Sessions',
            data: [25, 32, 40, 25, 28, 32, 34, 20, 25, 22, 21, 15],
            borderColor: '#0ea5e9',
            tension: 0.4,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  initIncomeChart() {
    const ctx = document.getElementById('incomeChart') as HTMLCanvasElement;
    if (!ctx) return; // Guard clause to prevent errors

    // Destroy existing chart if it exists
    if (this.incomeChart) {
      this.incomeChart.destroy();
    }

    this.incomeChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        datasets: [
          {
            label: 'Income',
            data: [1200, 1400, 1100, 800, 1150, 1000, 1300],
            backgroundColor: '#4ade80',
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Separate method for analytics charts
  initAnalyticsCharts() {
    const visitorCtx = document.getElementById(
      'analyticsVisitorChart'
    ) as HTMLCanvasElement;
    const salesCtx = document.getElementById(
      'analyticsSalesChart'
    ) as HTMLCanvasElement;

    if (visitorCtx) {
      // Destroy existing chart if it exists
      if (this.analyticsVisitorChart) {
        this.analyticsVisitorChart.destroy();
      }

      this.analyticsVisitorChart = new Chart(visitorCtx, {
        type: 'line',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Unique Visitors',
              data: [
                12000, 19000, 15000, 25000, 22000, 30000, 28000, 25000, 30000,
                29000, 32000, 35000,
              ],
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              tension: 0.4,
              fill: true,
            },
            {
              label: 'Page Views',
              data: [
                24000, 38000, 30000, 50000, 44000, 60000, 56000, 50000, 60000,
                58000, 64000, 70000,
              ],
              borderColor: '#0ea5e9',
              tension: 0.4,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (salesCtx) {
      // Destroy existing chart if it exists
      if (this.analyticsSalesChart) {
        this.analyticsSalesChart.destroy();
      }

      this.analyticsSalesChart = new Chart(salesCtx, {
        type: 'bar',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Sales',
              data: [
                5000, 7500, 6000, 9000, 8500, 11000, 10500, 9500, 12000, 11500,
                13000, 14000,
              ],
              backgroundColor: '#4ade80',
              borderRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
}
