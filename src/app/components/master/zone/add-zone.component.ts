import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Zone } from 'src/app/interfaces/master/zone';
import { ZoneService } from 'src/app/services/master/zone.service';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css'],
})
export class AddZoneComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private zoneService: ZoneService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      zone_name: ['', Validators.required],
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

    const zonesName: string = this.f.zone_name?.value;

    this.zoneService
      .addZone({ zonesName } as Zone)
      .subscribe(() => this.router.navigate(['master/zone']));
  }

  ngOnInit(): void {}
}
