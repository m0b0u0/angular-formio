import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormManagerService } from '../../form-manager.service';

@Component({
  templateUrl: './index.component.html'
})
export class SubmissionIndexComponent {
  constructor(
    public service: FormManagerService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  onSelect(row: any) {
// #fork #1    this.router.navigate([row._id, 'view'], {relativeTo: this.route});
    this.router.navigate([row._id, 'edit'], {relativeTo: this.route}); // #fork #1
  }
}
