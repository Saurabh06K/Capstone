import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent implements OnInit {
  addClientForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addClientForm = this.fb.group({
      registrationNumber: ['', [Validators.required]],
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.addClientForm.valid) {
      const clientData = this.addClientForm.value;
      console.log('Client Data: ', clientData);
      // You can add additional logic here, like resetting the form
      this.addClientForm.reset();
    }
  }
}
