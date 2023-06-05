import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  router: any;
  showMsg: any;

  constructor(private _employeeservice:EmployeeService ){}

  employeeModel = new Employee("","","");
 


  onSubmit(): void{
    console.log(this.employeeModel);
    this._employeeservice.register(this.employeeModel)
      .subscribe( data => {
        this.router.navigate(['app-employee-list']);
        this.showMsg= "Success";
      });
  }
  
}

