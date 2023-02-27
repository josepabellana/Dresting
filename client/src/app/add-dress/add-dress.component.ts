import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-dress',
  templateUrl: './add-dress.component.html',
  styleUrls: ['./add-dress.component.css']
})
export class AddDressComponent {

  fileName = '';

  createForm = this.fb.group({
    category: ['', Validators.required],
    brand: ['', Validators.required],
    itemName: ['', Validators.required],
    size: ['XL', Validators.required],
    color: ['BEIGE', Validators.required],
    description: ['', Validators.required],
    notes: [''],
    calendarFromDate: ['', Validators.required],
    calendarUntilDate: ['', Validators.required],
    price: [25, Validators.required]
  });


  constructor(private fb: FormBuilder) { }

  handleSubmit() {
    const formVal = this.createForm.value;
    console.log(formVal)
    this.createForm.controls['itemName'].reset()

  }

  //   onFileSelected(event:any) {

  //     const file:File = event.target.files[0];

  //     if (file) {

  //         this.fileName = file.name;

  //         const formData = new FormData();

  //         formData.append("thumbnail", file);

  //         // const upload$ = this.http.post("/api/thumbnail-upload", formData);

  //         // upload$.subscribe();
  //     }
  // }

}
