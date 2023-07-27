import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  //addemployee
  addemployee(data:datamodel){
   return this.http.post<datamodel>("http://localhost:3000",data)
  }

}


