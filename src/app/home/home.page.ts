import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AracService } from '../arac.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(public router: Router, public aracservis: AracService) {}

  git(secim) {

this.router.navigate(['/arac-detay', { id: secim }]);

  }

}
