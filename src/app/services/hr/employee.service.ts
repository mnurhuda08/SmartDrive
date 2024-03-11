import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { EditEmployeeResponse } from 'src/app/interfaces/hr/edit-employee-response';
import { Employee } from 'src/app/interfaces/hr/employee';
import { EmployeeCreate } from 'src/app/interfaces/hr/employee-create';
import { EmployeeShow } from 'src/app/interfaces/hr/employee-show';
import { JobType } from 'src/app/interfaces/hr/job-type';
import { Employees } from 'src/app/models/hr/employees';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:5125/api/Employee'

  httpOptions = { 
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
  getJobType(): Observable<JobType[]> {
    return this.http.get<JobType[]>('http://localhost:5125/api/JobType');
  }
  
  saveEmployee(inputData:object){
    return this.http.post(this.url, inputData)
  }

  getEmployeeById(id : number){
    return this.http.get(`http://localhost:5125/api/Employee/${id}`)
  }


  deleteEmployee(id : number) : Observable<any>{
    return this.http.delete(`http://localhost:5125/api/Employee/${id}`);
  }

  updateEmployee(updateData: object, empEntityId: number){
    return this.http.put(`http://localhost:5125/api/Employee/${empEntityId}`, updateData);
  }


  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
