import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MagazineService, Magazine } from './magazine.service';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-magazines',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './magazines.component.html',
  styleUrl: './magazines.component.scss'
})
export class MagazinesComponent implements OnInit, AfterViewInit {
  @ViewChild('pdfCanvas') pdfCanvas!: ElementRef<HTMLCanvasElement>;
  
  magazines: Magazine[] = [];
  selectedMagazine: Magazine | null = null;
  pdfUrl: SafeResourceUrl = '';
  currentPage: number = 1;
  totalPages: number = 0;
  zoomLevel: number = 1;
  isLoading: boolean = false;
  loadingMagazines: boolean = true;
  isMobile: boolean = false;
  pdfDoc: any = null;
  pageRendering: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private magazineService: MagazineService
  ) {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs';
  }

  ngOnInit() {
    this.loadMagazines();
  }

  ngAfterViewInit() {}

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
    
    if (this.isMobile) {
      this.loadPdfWithPdfJs(magazine.path);
    } else {
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(magazine.path);
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    }
  }

  async loadPdfWithPdfJs(url: string) {
    try {
      const loadingTask = pdfjsLib.getDocument(url);
      this.pdfDoc = await loadingTask.promise;
      this.totalPages = this.pdfDoc.numPages;
      this.isLoading = false;
      this.renderPage(this.currentPage);
    } catch (error) {
      console.error('Error loading PDF:', error);
      this.isLoading = false;
    }
  }

  async renderPage(pageNum: number) {
    if (this.pageRendering || !this.pdfDoc) return;
    
    this.pageRendering = true;
    const page = await this.pdfDoc.getPage(pageNum);
    const canvas = this.pdfCanvas.nativeElement;
    const context = canvas.getContext('2d');
    
    const viewport = page.getViewport({ scale: this.zoomLevel * 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    
    await page.render(renderContext).promise;
    this.pageRendering = false;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.renderPage(this.currentPage);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.renderPage(this.currentPage);
    }
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
    if (this.isMobile && this.pdfDoc) {
      this.renderPage(this.currentPage);
    }
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.25, 0.5);
    if (this.isMobile && this.pdfDoc) {
      this.renderPage(this.currentPage);
    }
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
    this.pdfDoc = null;
  }
}