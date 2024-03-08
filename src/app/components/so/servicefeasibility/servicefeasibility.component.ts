import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SEOTSTATUS } from 'src/app/interfaces/so/Enum/seotstatus';
import { SEROSTATUS } from 'src/app/interfaces/so/Enum/serostatus';
import { SERVTYPE } from 'src/app/interfaces/so/Enum/servtype';
import { SOWOSTATUS } from 'src/app/interfaces/so/Enum/sowostatus';
import { CreateServicePolisDto } from 'src/app/interfaces/so/create-service-polis-dto';
import { ServiceDto } from 'src/app/interfaces/so/service-dto';
import { ServiceOrderDto } from 'src/app/interfaces/so/service-order-dto';
import { TaskDto } from 'src/app/interfaces/so/task-dto';
import { WorkorderDto } from 'src/app/interfaces/so/workorder-dto';
import { ServiceordersService } from 'src/app/services/so/serviceorders.service';

@Component({
  standalone: true,
  selector: 'app-servicefeasibility',
  templateUrl: './servicefeasibility.component.html',
  styleUrls: ['./servicefeasibility.component.css'],
  imports: [CommonModule],
  providers: [ServiceordersService]
})
export class ServicefeasibilityComponent implements OnInit {
  // data
  service = {} as ServiceDto;
  Sero = {} as ServiceOrderDto;
  isGenerateAvailable: boolean = false;
  isGeneratePermitted: boolean = false;
  // enum
  SOWOSTATUS = SOWOSTATUS;
  SEOTSTATUS = SEOTSTATUS;
  SERVTYPE = SERVTYPE;
  SEROSTATUS = SEROSTATUS;

  constructor(private serviceOrder: ServiceordersService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    // get list of all service order
    this.serviceOrder.getServiceBySeroId(`search?seroid=${this.activatedRouter.snapshot.params['id']}`)
      .subscribe({
        error: () => {
          alert("Alamat URL tidak valid")
          this.router.navigate(['/so'])
        },
        next: res => {
          this.service = res.body!
          this.Sero = this.service.seros[0]
        }
      }
      )
    // check if this service type is feasibility and already has service polis
    if (this.service.servType == SERVTYPE.FEASIBILITY) {
      this.serviceOrder.getAvailablePolis(this.service.servId).subscribe((res) => {
        this.isGenerateAvailable = !res;
      })
      // check if all seots completed
      this.isGeneratePermitted = !this.Sero.seots.some((element) => {
        return (element.seotStatus==SEOTSTATUS.INPROGRESS || element.seotStatus==SEOTSTATUS.CANCELLED)
      })
    }

  }
  getDate(date: string) {
    let newDate = date?.split('T')[0]?.split('-')
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
  }
  workorderSubmit(e: SubmitEvent) {
    e.preventDefault()
    if (confirm("Apakah anda yakin?")) {
      // search input tag inside target html
      let target: HTMLInputElement[] = Array.from((e.target as HTMLElement).getElementsByTagName('input'))

      // looping through input tag element
      target.forEach((element: HTMLInputElement) => {
        // get id of element
        let id: string | null = element.getAttribute('id')

        // check if casting return not null
        if (Number.parseInt(id!) == null) {
          alert("Terdapat kesalahan sistem")
        } else {
          // fill body
          let body = {
            sowoId: Number.parseInt(id!),
            sowoStatus: `${element.checked ? SOWOSTATUS.COMPLETED : SOWOSTATUS.INPROGRESS}`,
          } as WorkorderDto
          this.serviceOrder.updateWorkorder(body).subscribe(
            (res) => {
              if (res.status.toString().startsWith('2')) {
                alert("Berhasil")
                location.reload()
              }
            });
        }
      });
    }
  }
  taskSubmit(e: MouseEvent) {
    e.preventDefault()
    if (confirm("Apakah anda yakin?")) {
      let target = (e.target as HTMLInputElement)
      let id = target.id
      if (Number.parseInt(id!) == null)
        alert("Terdapat kesalahan sistem")
      let body = {
        seotId: Number.parseInt(id!),
        seotStatus: target.checked ? SEOTSTATUS.COMPLETED : SEOTSTATUS.INPROGRESS
      } as TaskDto
      this.serviceOrder.updateTask(body).subscribe((res) => {
        if (res.status.toString().startsWith('2')) {
          alert("Berhasil")
          location.reload()
        }
      })
    }
  }
  generatePolis(e: MouseEvent) {
    e.preventDefault()
    if (confirm("Apakah anda yakin?")) {
      let body = {
        servId: this.service.servId,
        agentId: Number(this.service.seros[0].seroAgentEntityid),
        createPolisDate: this.service.servCreatedOn,
        polisStartDate: this.service.servStartdate,
        polisEndDate: this.service.servEnddate,
      } as CreateServicePolisDto
      this.serviceOrder.createServicePolis(body).subscribe((res) => {
        if (res.statusText == "OK") {
          alert("Berhasil")
          location.reload()
        }
      })
    }
  }
  checkAllSowoStatus(index: number): boolean {
    for (let sowo of this.Sero.seots[index].sowos) {
      if (sowo.sowoStatus==SOWOSTATUS.INPROGRESS) {
        return true;
      }
    }
    return false;
  }
  getEmpName():string{
    return this.service?.servCreqEntity?.creqAgenEntity?.eawgEntity?.empName;
  }
}
