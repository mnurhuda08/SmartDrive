import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionPlat } from 'src/app/interfaces/master/region-plat';
import { RegionPlatService } from 'src/app/services/master/region-plat.service';

@Component({
  selector: 'app-region-plate',
  templateUrl: './region-plate.component.html',
  styleUrls: ['./region-plate.component.css'],
})
export class RegionPlateComponent implements OnInit {
  title = 'Region Plat';
  regionPlats: RegionPlat[] = [];

  constructor(
    private regionPlatService: RegionPlatService,
    private router: Router
  ) {}

  getRegionPlats() {
    this.regionPlatService.getRegionPlats().subscribe({
      next: (response) => {
        this.regionPlats = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateRegionPlat(name: string) {
    this.router.navigate(['master/region/region-plat/edit', name]);
  }

  deleteRegionPlat(event: any, regionPlats: RegionPlat) {
    if (confirm('Delete this data ?')) {
      event.target.innerText = 'Deleting...';
      this.regionPlats.filter((f) => f !== regionPlats);
      this.regionPlatService.deleteRegionPlat(regionPlats).subscribe();
    }
  }

  ngOnInit(): void {
    this.getRegionPlats();
  }
}
