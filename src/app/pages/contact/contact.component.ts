import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contact: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private contactSrv: ContactService,
    private _snackBar: MatSnackBar
  ) {
    this.contact = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
    console.log(this.contact)
  }

  ngOnInit(): void {}

  public submitForm() {
    let formData = new FormData();
    formData.append("name", this.contact.get("name")!.value);
    formData.append("email", this.contact.get("email")!.value);
    formData.append("message", this.contact.get("message")!.value);
    this.openSnackBar('Please wait. Processing...')


    this.contactSrv.postMessage(formData).subscribe(
      (response) => {
        if (response["result"] == "success"){
          this.openSnackBar('Your e-mail has been successfully sent. Thank You!', 'success')

        }else{
          this.openSnackBar('Ha habido un error.', 'error')
        }

        this.resetForm();

      },
      (error) => {
        console.error({error});
      }
    );
  }

  private openSnackBar(message:string, myClass:string = ''){
    this._snackBar.open(message, undefined, {
      duration: 3000,
      panelClass: myClass
    });
  }

  private resetForm(){
    this.contact.reset();
    Object.keys(this.contact.controls).forEach(key => {
      this.contact.get(key)?.setErrors(null) ;
    });
  }
}