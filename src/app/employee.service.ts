import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './employee';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url='http://localhost:8080/addEmployee';
  _url2='http://localhost:8080/Employees';

  constructor(private _http:HttpClient) { }

  register(employeeData: Employee){
    console.log("enter in service")
    return this._http.post<Employee>(this._url,employeeData);
  }

  getEmployees(): Observable<Employee[]>{
    return this._http.get<Employee[]>(this._url2).pipe(
      tap(data =>
      console.log('All: ' + JSON.stringify(data)))
    );;
  }
}
