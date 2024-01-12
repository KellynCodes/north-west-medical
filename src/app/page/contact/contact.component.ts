import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { HttpStatusCode } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CtaComponent } from '../../components';

@Component({
  selector: 'sosinc-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CtaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public contactForm!: FormGroup;
  public isSending = signal<boolean>(false);

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      date: [new Date().toDateString(), Validators.required],
      message: ['', Validators.required],
    });
  }

  isInputValid(controlName: string, errorName: string): boolean {
    if (
      this.contactForm.controls[controlName]?.touched &&
      this.contactForm.controls[controlName]?.hasError(errorName)
    ) {
      return true;
    }
    return false;
  }

  async onSubmit(): Promise<void> {
    if (!this.contactForm.valid) {
      this.toastr.error('Please fill all the fields');
      return;
    }
    try {
      this.isSending.set(true);
      const response = await emailjs.send(
        'service_i2c31r8',
        'template_us3scl7',
        {
          to_name: 'Specialized Orthopedic Surgeons',
          ...this.contactForm.value,
        },
        'UQiKJHtSM88EGtWsp'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error(
          'Something unexpected happened while sending the message.Please try again.'
        );
        return;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.success(
          `We have received your message ${this.contactForm.value.name}. Thanks for contacting us.`
        );
        this.contactForm.reset({
          name: '',
          email: '',
          date: new Date().toDateString(),
          phone: '',
          message: '',
        });
        return;
      }
    } catch (error: any) {
      if (error?.status != HttpStatusCode.Ok) {
        this.isSending.set(false);
        this.toastr.error('Message not sent. Try again.');
        return;
      }
    }
  }
}
