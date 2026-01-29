import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  supportForm: FormGroup;
  currentLanguage: 'en' | 'te' = 'en';
  divisions = ['North', 'South', 'East', 'West', 'Central'];

  content = {
    en: {
      title: "We're Here to Help",
      subtitle: "Have questions or need assistance? We're here to answer and support you every step of the way.",
      quickResponse: 'Quick Response',
      quickResponseDesc: 'We respond within 24 hours',
      directContact: 'Direct Contact',
      directContactDesc: 'Speak directly with our team',
      issueResolution: 'Issue Resolution',
      issueResolutionDesc: 'Most issues resolved in 48 hours',
      fullName: 'Full Name',
      mobileNumber: 'Mobile Number',
      emailAddress: 'Email Address',
      age: 'Age',
      selectDivision: 'Select Your Division',
      chooseDivision: 'Choose your division',
      division: 'Division',
      describeIssue: 'Describe Your Issue',
      descriptionPlaceholder: 'Please provide detailed information about your query or concern. The more details you provide, the better we can assist you.',
      attachFile: 'Attach Supporting Document/Image (Optional)',
      chooseFile: 'Choose File',
      fileNote: 'Supported formats: Images, PDF, Word documents (Max 5MB)',
      commitment: 'Our Commitment:',
      commitmentText: 'Your request will be acknowledged within 2 hours and resolved within 24-48 hours during business days.',
      submitBtn: 'Submit Support Request',
      nameRequired: 'Name is required',
      mobileRequired: 'Please enter a valid 10-digit mobile number',
      emailRequired: 'Please enter a valid email address',
      ageRequired: 'Please enter a valid age',
      divisionRequired: 'Please select a division',
      descriptionRequired: 'Description is required'
    },
    te: {
      title: 'మేము మిమ్మల్ని సహాయం చేయడానికి ఇక్కడ ఉన్నాము',
      subtitle: 'ప్రశ్నలు ఉన్నాయా లేదా సహాయం అవసరమా? మేము ప్రతి అడుగులో మిమ్మల్ని సహాయం చేయడానికి ఇక్కడ ఉన్నాము.',
      quickResponse: 'వేగ స్పందన',
      quickResponseDesc: 'మేము 24 గంటల్లో స్పందిస్తాము',
      directContact: 'ప్రత్యక్ష సంప్రదింపు',
      directContactDesc: 'మా టీమ్తో నేరుగా మాట్లాడండి',
      issueResolution: 'సమస్య పరిష్కారం',
      issueResolutionDesc: 'చాలా సమస్యలు 48 గంటల్లో పరిష్కరించబడతాయి',
      fullName: 'పూర్తి పేరు',
      mobileNumber: 'మొబైల్ నంబర్',
      emailAddress: 'ఇమెయిల్ చిరునామా',
      age: 'వయస్సు',
      selectDivision: 'మీ డివిజన్ ఎంచుకోండి',
      chooseDivision: 'మీ డివిజన్ ఎన్ని చేయండి',
      division: 'డివిజన్',
      describeIssue: 'మీ సమస్యను వివరించండి',
      descriptionPlaceholder: 'దయచేసి మీ ప్రశ్న లేదా ఆలోచన గురించి విస్తృత సమాచారం అందించండి. మీరు ఎక్కువ వివరాలు అందిస్తే, మేము మిమ్మల్ని మెచ్చంగా సహాయం చేయగలము.',
      attachFile: 'పత్రం/చిత్రాన్ని అటాచ్ చేయండి (ఐచ్ఛికం)',
      chooseFile: 'ఫైల్ ఎన్ని చేయండి',
      fileNote: 'సపోర్ట్ చేసే ఫార్మాట్లు: చిత్రాలు, PDF, Word పత్రాలు (గరిష్ఠం 5MB)',
      commitment: 'మా ప్రతిబద్ధత:',
      commitmentText: 'మీ అభ్యర్థన 2 గంటల్లో అంగీకరించబడుతుంది మరియు కార్యాలయ రోజుల్లో 24-48 గంటల్లో పరిష్కరించబడుతుంది.',
      submitBtn: 'మద్దతు అభ్యర్థనను సమర్పించండి',
      nameRequired: 'పేరు అవసరం',
      mobileRequired: 'దయచేసి చెల్లుబాటు 10-అంకాల మొబైల్ నంబర్ నమోదు చేయండి',
      emailRequired: 'దయచేసి చెల్లుబాటు ఇమెయిల్ చిరునామా నమోదు చేయండి',
      ageRequired: 'దయచేసి చెల్లుబాటు వయస్సు నమోదు చేయండి',
      divisionRequired: 'దయచేసి డివిజన్ ఎన్ని చేయండి',
      descriptionRequired: 'వివరణ అవసరం'
    }
  };

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    
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