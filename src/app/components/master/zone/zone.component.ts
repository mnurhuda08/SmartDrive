import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zone } from 'src/app/interfaces/master/zone';
import { ZoneService } from 'src/app/services/master/zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit {
  zones: Zone[] = [];

  constructor(private zoneService: ZoneService, private router: Router) {}

  getZones() {
    this.zoneService.getZones().subscribe({
      next: (response) => {
        this.zones = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  updateZone(id: number) {
    this.router.navigate(['master/zone/edit', id]);
  }

  deleteZone(zone: Zone) {
    this.zones.filter((f) => f !== zone);
    this.zoneService.deleteZone(zone).subscribe();
  }

  ngOnInit(): void {
    this.getZones();
  }
}
