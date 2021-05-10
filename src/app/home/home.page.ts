import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
//import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: any;
  constructor(private ds: DataService,
    private mod: ModalController
    ) {}

  
  async openModal(){
    
    const modal = await this.mod.create({
      component: ModalPage,
              
    });
     
    await modal.present();
  }

  /*data(){
    this.ds.getData().subscribe((ans)=>{
      this.result = ans;
      return this.result;
    }
    
    );
  }*/
}
