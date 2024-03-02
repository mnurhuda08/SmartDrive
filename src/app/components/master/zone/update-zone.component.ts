import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Zone } from 'src/app/interfaces/master/zone';
import { ZoneService } from 'src/app/services/master/zone.service';

@Component({
  selector: 'app-update-zone',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.css'],
})
export class UpdateZoneComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  zone!: Zone;

  constructor(
    private activatedRoute: ActivatedRoute,
    private zoneService: ZoneService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      //call service
      this.zoneService.getZone(params['id']).subscribe((res: Zone) => {
        this.zone = res;
        this.form = new FormGroup({
          zone_id: new FormControl(this.zone.zonesId),
          zone_name: new FormControl(this.zone.zonesId),
        });
      });
    });
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const zonesId: number = this.f.zone_id?.value;
    const zonesName: string = this.f.zone_name?.value;

    this.zoneService
      .updateZone({ zonesId, zonesName } as Zone)
      .subscribe(() => this.router.navigate(['master/zone']));
  }

  ngOnInit(): void {}
}
