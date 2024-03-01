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
    this.router.navigate(['master/region/region-plat/edit', name]);
  }

  deleteAreaWorkgroup(areaWorkgroups: AreaWorkgroup) {
    this.areaWorkgroups.filter((f) => f !== areaWorkgroups);
    this.areaWorkgroupService.deleteAreaWorkgroup(areaWorkgroups).subscribe();
  }

  ngOnInit(): void {
    this.getAreaWorkgroups();
  }
}
