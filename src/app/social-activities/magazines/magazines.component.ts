import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MagazineService, Magazine } from './magazine.service';

@Component({
  selector: 'app-magazines',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './magazines.component.html',
  styleUrl: './magazines.component.scss'
})
export class MagazinesComponent implements OnInit {
  magazines: Magazine[] = [];
  selectedMagazine: Magazine | null = null;
  pdfUrl: SafeResourceUrl = '';
  currentPage: number = 1;
  totalPages: number = 0;
  zoomLevel: number = 1;
  isLoading: boolean = false;
  loadingMagazines: boolean = true;

  constructor(
    private sanitizer: DomSanitizer,
    private magazineService: MagazineService
  ) {}

  ngOnInit() {
    this.loadMagazines();
  }

  loadMagazines() {
    this.loadingMagazines = true;
    this.magazineService.getMagazines().subscribe({
      next: (magazines) => {
        this.magazines = magazines;
        this.loadingMagazines = false;
      },
      error: (error) => {
        console.error('Error loading magazines:', error);
        this.loadingMagazines = false;
      }
    });
  }

  onMagazineChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedIndex = parseInt(target.value);
    if (!isNaN(selectedIndex) && selectedIndex >= 0) {
      this.onMagazineSelect(this.magazines[selectedIndex]);
    }
  }

  onMagazineSelect(magazine: Magazine) {
    this.selectedMagazine = magazine;
    this.isLoading = true;
    this.currentPage = 1;
    this.zoomLevel = 1;
    
    // Use direct PDF URL
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(magazine.path);
    
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  downloadMagazine() {
    if (this.selectedMagazine) {
      const link = document.createElement('a');
      link.href = this.selectedMagazine.path;
      link.download = `${this.selectedMagazine.name}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  openPdfInNewTab() {
    if (this.selectedMagazine) {
      window.open(this.selectedMagazine.path, '_blank');
    }
  }

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.25, 3);
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.25, 0.5);
  }

  resetZoom() {
    this.zoomLevel = 1;
  }

  goBack() {
    this.selectedMagazine = null;
    this.pdfUrl = '';
    this.currentPage = 1;
    this.totalPages = 0;
    this.zoomLevel = 1;
  }
}