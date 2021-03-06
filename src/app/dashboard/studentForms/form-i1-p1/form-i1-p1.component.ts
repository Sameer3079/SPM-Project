import { Component, OnInit } from '@angular/core';
import {FormI1P1Service} from './form-i1-p1.service';
import {FormI1P1} from '../../../_models/formI1P1';
import { NgForm, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-i1-p1',
  templateUrl: './form-i1-p1.component.html',
  styleUrls: ['./form-i1-p1.component.css']
})
export class FormI1P1Component implements OnInit {
  formI1P1:FormI1P1;
  validationFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
     ]);
  constructor(private formI1P1Service:FormI1P1Service) { }
  
  semesters=[
    {id:1,sem:1 },
    {id:2,sem:2}]

    years=[
      {id:1,val:"year 1"},
      {id:2,val:"year 2"},
      {id:3,val:"year 3"},
      {id:4,val:"year 4"}
    ]
  ngOnInit() {
    this.formI1P1=new FormI1P1;
  }
  onSubmit(form:NgForm){
    if(form.valid){
      this.formI1P1Service.postFormI1P1(this.formI1P1)
      .subscribe(
        (data:any)=>{
          console.log(data);
          alert("Form Submitted Successfully");
        }
      )
    }
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
