import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrl: './add-bank.component.css'
})
export class AddBankComponent implements OnInit {
  addBankForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addBankForm = this.fb.group({
      bankName: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.addBankForm.valid) {
      const bankData = this.addBankForm.value;
      console.log('Bank Data: ', bankData);
      // Add logic to handle bank creation, e.g., call a service
    }
  }
}

