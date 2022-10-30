import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/app.service';
import { emailValidator } from '../../theme/utils/app-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit { 
  contactForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(public formBuilder: UntypedFormBuilder, public appService:AppService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, emailValidator])],
      phone: [null, Validators.required],
      message: [null, Validators.required]
    });
  } 

  public onContactFormSubmit():void {
    if (this.contactForm.valid) {
        console.log(this.contactForm.value);
        let contact = this.contactForm.value;
        let data = {
            Fullname: contact.name,
            Email: contact.email,
            Comment: contact.message
        }
        this.appService.PostMessage(data).subscribe(response => { 
            console.log(response)
            location.href = 'https://mailthis.to/confirm' 
        }, error => {
            console.warn(error.responseText)
            console.log({ error });
            if(error.error){
                this.snackBar.open(error.error, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 }); 
            }  
        }); 

    }
}


}
