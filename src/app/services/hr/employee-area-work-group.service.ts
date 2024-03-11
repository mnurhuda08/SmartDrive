import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeAreaWorkGroup } from 'src/app/interfaces/hr/employee-area-work-group';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAreaWorkGroupService {
  private url = "http://localhost:5125/api/EmployeeArwg"

  httpOptions = { 
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  };
  constructor(private http: HttpClient) { }

  getEawg(): Observable<EmployeeAreaWorkGroup[]> {
    return this.http.get<EmployeeAreaWorkGroup[]>(this.url);
  }

  deleteEawg(id : number) : Observable<any>{
    return this.http.delete(`http://localhost:5125/api/EmployeeArwg/${id}`);
  }

  updateEawg(updateData: object, empEntityId: number){
    return this.http.put(`http://localhost:5125/api/EmployeeArwg/${empEntityId}`, updateData);
  }

  saveEmployee(inputData:object){
    return this.http.post(this.url, inputData)
  }

  getEawgById(id : number){
    return this.http.get(`http://localhost:5125/api/EmployeeArwg/${id}`)
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
