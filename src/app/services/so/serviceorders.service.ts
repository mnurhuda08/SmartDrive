import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaderResponse, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { CreateServicePolisDto } from 'src/app/interfaces/so/create-service-polis-dto';
import { ServiceDto } from 'src/app/interfaces/so/service-dto';
import { ServiceOrderDto } from 'src/app/interfaces/so/service-order-dto';
import { TaskDto } from 'src/app/interfaces/so/task-dto';
import { TestaDto } from 'src/app/interfaces/so/testa-dto';
import { WorkorderDto } from 'src/app/interfaces/so/workorder-dto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceordersService {
  httpHeader=new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

  constructor(private http:HttpClient) { }
  getServiceOrders(
      PageNumber:number,
      SearchType:string="",
      SearchStatus:string="",
      SearchStartDate:string="",
      SearchEndDate:string="",
      PageSize:number=10
    ):Observable<HttpResponse<ServiceOrderDto[]>>{
    return this.http.get<ServiceOrderDto[]>(`${environment.baseUrl}/serviceorder/paginate?PageNumber=${PageNumber}&PageSize=${PageSize}&SearchType=${SearchType}&SearchStatus=${SearchStatus}&SearchStartDate=${SearchStartDate}&SearchEndDate=${SearchEndDate}`,
      {headers:this.httpHeader,observe:'response'})
  }
  
  getServiceBySeroId(id:string): Observable<HttpResponse<ServiceDto>>{
    return this.http.get<ServiceDto>(`${environment.baseUrl}/service/search?seroid=${id}`,{headers:this.httpHeader,observe:'response'})
  }
  // update workorder
  updateWorkorder(body:WorkorderDto) : Observable<HttpResponseBase>{
    return this.http.put<HttpResponseBase>(`${environment.baseUrl}/serviceorderworkorder/${body.sowoId}`,JSON.stringify(body),{headers:this.httpHeader, observe:'response'})
      .pipe(catchError(this.errorHandler));
  }
  updateTask(body:TaskDto):Observable<HttpResponseBase>{
    return this.http.put<HttpResponseBase>(`${environment.baseUrl}/serviceordertask/${body.seotId}`,JSON.stringify(body),{headers:this.httpHeader,observe:'response'})
      .pipe(catchError(this.errorHandler))
  }
  createServicePolis(body:CreateServicePolisDto):Observable<HttpResponseBase>{
    return this.http.post<HttpResponseBase>(`${environment.baseUrl}/service/CreateServicePolis`,JSON.stringify(body),{headers:this.httpHeader,observe:'response'})
      .pipe(catchError(this.errorHandler))
  }
  private errorHandler(error:HttpErrorResponse){
    alert(`${error.statusText}`)
    return throwError(()=>new Error(`${error.message}`))
  }
  getAvailablePolis(servId:number):Observable<boolean>{
    return this.http.get<boolean>(`${environment.baseUrl}/service/ispolisavailable?servId=${servId}`,{headers:this.httpHeader})
      .pipe(catchError(this.errorHandler))
  }
  getTestaByTetyId(id:number):Observable<HttpResponse<TestaDto[]>>{
    return this.http.get<TestaDto[]>(`${environment.baseUrl}/master/TemplateServiceTask/testa/${id}`,{headers:this.httpHeader,observe:'response'})
      .pipe(catchError(this.errorHandler))
  }
}
