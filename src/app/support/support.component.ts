import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  supportForm: FormGroup;
  divisions = ['North', 'South', 'East', 'West', 'Central'];

  constructor(private fb: FormBuilder) {
    this.supportForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      division: ['', Validators.required],
      description: ['', Validators.required],
      image: [null]
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.supportForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.supportForm.valid) {
      console.log('Form submitted:', this.supportForm.value);
    }
  }
}