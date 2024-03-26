import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { range } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { SEROSTATUS } from 'src/app/interfaces/so/Enum/serostatus';
import { ServiceOrderDto } from 'src/app/interfaces/so/service-order-dto';
import { TestaDto } from 'src/app/interfaces/so/testa-dto';
import { ServiceordersModule } from 'src/app/modules/so/serviceorders/serviceorders.module';
import { RangePipe } from 'src/app/pipes/range.pipe';
import { ServiceordersService } from 'src/app/services/so/serviceorders.service';
import { environment } from 'src/environments/environment.example';

@Component({
  standalone:true,
  selector: 'app-serviceorders',
  templateUrl: './serviceorders.component.html',
  styleUrls: ['./serviceorders.component.css'],
  providers:[ServiceordersService],
  imports:[CommonModule,RangePipe]
})
export class ServiceordersComponent implements OnInit {
  serviceOrders:ServiceOrderDto[]=[]
  // allDate:string[]=[]
  // allDate={}as Set<string>

  searchBy:string=""
  searchValue:string=""
  searchStatus:string=""
  searchType:string=""
  searchStartDate:string=""
  searchEndDate:string=""

  // paging info
  currentPage:number=1
  hasNext:boolean=false
  hasPrevious:boolean=false
  totalPages:number=0

  constructor(private service:ServiceordersService,
    private activatedRouter: ActivatedRoute){}
  ngOnInit(): void {
    // page number
    this.currentPage=this.activatedRouter.snapshot.params['currentPage']

    this.getServiceOrders()
  }
  searchServiceOrder(e:SubmitEvent){
    e.preventDefault()
    // search input tag inside target html
    this.searchStatus=(document.getElementsByName("status")[0] as HTMLSelectElement).value;
    this.searchType=(document.getElementsByName("type")[0] as HTMLSelectElement).value;
    this.searchStartDate=(document.getElementsByName("start_date")[0] as HTMLSelectElement).value;
    this.searchEndDate=(document.getElementsByName("end_date")[0] as HTMLSelectElement).value;
    
    console.log(this.searchStartDate)
    console.log(this.searchEndDate)

    this.getServiceOrders()
  }
  getServiceOrders(){
    this.service.getServiceOrders(this.currentPage,this.searchType,this.searchStatus,this.searchStartDate,this.searchEndDate).subscribe({
      next:res=>{
        if(res.status.toString().startsWith('2')){
          this.serviceOrders=res.body!.filter(item=>{
            if(item.seroStatus.match(SEROSTATUS.OPEN.toString())) return true;
            else return false
          })
          // this.allDate = Array.from(new Set(this.serviceOrders.map(item=>item.seroServ!.servCreatedOn)))
          this.currentPage = Number(res.headers .get("x-current-pages")!)
          this.hasNext = res.headers.get("x-hasnext")!.toLowerCase().includes("true")?true:false
          this.hasPrevious = res.headers.get("x-hasprevious")!.toLowerCase().includes("true")?true:false
          this.totalPages = Number(res.headers.get("x-total-pages")!)
        }
      }
    })
  }
}
