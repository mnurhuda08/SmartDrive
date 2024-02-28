import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { SEROSTATUS } from 'src/app/interfaces/so/Enum/serostatus';
import { ServiceOrderDto } from 'src/app/interfaces/so/service-order-dto';
import { ServiceordersModule } from 'src/app/modules/so/serviceorders/serviceorders.module';
import { ServiceordersService } from 'src/app/services/so/serviceorders.service';
import { environment } from 'src/environments/environment.example';

@Component({
  standalone:true,
  selector: 'app-serviceorders',
  templateUrl: './serviceorders.component.html',
  styleUrls: ['./serviceorders.component.css'],
  providers:[ServiceordersService],
  imports:[CommonModule]
})
export class ServiceordersComponent implements OnInit {
  serviceOrders:ServiceOrderDto[]=[]
  constructor(private service:ServiceordersService){}
  ngOnInit(): void {
    this.service.getServiceOrders().subscribe({
      next:res=>{
        if(res.status.toString().startsWith('2')){
          this.serviceOrders=res.body!.filter(item=>{
            if( item.seroStatus.match(SEROSTATUS.OPEN.toString())) return true;
            else return false
          })
        }
      },
      complete:()=>{
        console.log("Berhasil!")
      }
    })
  }
}
