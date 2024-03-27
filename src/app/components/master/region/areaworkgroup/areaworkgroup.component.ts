import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaWorkgroup } from 'src/app/interfaces/master/area-workgroup';
import { AreaWorkgroupService } from 'src/app/services/master/area-workgroup.service';

@Component({
  selector: 'app-areaworkgroup',
  templateUrl: './areaworkgroup.component.html',
  styleUrls: ['./areaworkgroup.component.css'],
})
export class AreaworkgroupComponent implements OnInit {
  title = 'Area Workgroup';
  areaWorkgroups: AreaWorkgroup[] = [];

  constructor(
    private areaWorkgroupService: AreaWorkgroupService,
    private router: Router
  ) {}

  getAreaWorkgroups() {
    this.areaWorkgroupService.getAreaWorkgroups().subscribe({
      next: (response) => {
        this.areaWorkgroups = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateAreaWorkgroup(name: string) {
    this.router.navigate(['master/region/areaworkgroup/edit', name]);
  }

  deleteAreaWorkgroup(event: any, areaWorkgroups: AreaWorkgroup) {
    if (confirm('Delete this data ?')) {
      event.target.innerText = 'Deleting...';
      this.areaWorkgroups.filter((f) => f !== areaWorkgroups);
      this.areaWorkgroupService.deleteAreaWorkgroup(areaWorkgroups).subscribe();
    }
  }

  ngOnInit(): void {
    this.getAreaWorkgroups();
  }
}
