import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  employeeform!: FormGroup;
  constructor(private formbuilder: FormBuilder,private api:ApiService,) { }

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      phonenumber: ['', Validators.required],
    })
  }

    addemployee(data:datamodel){
     //console.log(data)
    this.api.addemployee(data).subscribe((res=>{

    }))

  

  }
}