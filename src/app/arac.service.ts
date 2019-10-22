import { Injectable } from '@angular/core';
import { Arac } from './arac-model';

@Injectable({
  providedIn: 'root'
})
export class AracService {

araclar: Arac[] =  [ {
  id: 'r1',
  ad: 'BMW X3',
  resim: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/2018_BMW_X3_xDrive30i.jpg/640px-2018_BMW_X3_xDrive30i.jpg',
  ozellik:  ['Otomatik', 'Dizel', '2018 Model']
},
{
  id: 'r2',
  ad: 'Skoda Kodiaq',
  resim: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/%C5%A0KODA_KODIAQ.jpg/640px-%C5%A0KODA_KODIAQ.jpg',
  ozellik: ['Otomatik', 'Benzin', '2019 Model']
},
{
  id: 'r3',
  ad: 'Audi Q5',
  resim: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Audi_Q5L_02_China_2019-03-12.jpg/640px-Audi_Q5L_02_China_2019-03-12.jpg',
  ozellik: ['Otomatik', 'Benzin', '2019 Model']
} ];

  constructor() { }
}
