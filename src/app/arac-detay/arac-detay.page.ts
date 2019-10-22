import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AracService } from '../arac.service';
import { Arac } from '../arac-model';




@Component({
  selector: 'app-arac-detay',
  templateUrl: './arac-detay.page.html',
  styleUrls: ['./arac-detay.page.scss'],
})
export class AracDetayPage implements OnInit {

arac: Arac;

constructor(public router: ActivatedRoute, public aracservis: AracService) { }

  ngOnInit() {

this.arac = this.aracGetir(this.router.snapshot.paramMap.get('id'));

  }

  aracGetir(id): Arac {
    return this.aracservis.araclar.find(bul => bul.id === id);
  }

}
