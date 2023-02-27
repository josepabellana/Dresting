import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-dress',
  templateUrl: './add-dress.component.html',
  styleUrls: ['./add-dress.component.css']
})
export class AddDressComponent {

  createForm = this.fb.group({
    category: [''],
    brand: [''],
    itemName: [''],
    size:[''],
    color:[''],
    description: [''],
    notes: [''],
    price: [0]
  });


  constructor(private fb: FormBuilder){}
}
