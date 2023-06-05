import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable, tap } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(private _employeeService:EmployeeService){}

  employees: Observable<Employee[]> = this._employeeService.getEmployees();
 
    
    
  



}
