import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  result:any;
  constructor(private ds: DataService,
    private modalController: ModalController) { }

  async closeModal(){
    await this.modalController.dismiss();
  }

  ngOnInit() {
    this.ds.getData().subscribe((ans)=>{
      this.result = ans;
      return this.result;
    }
    
    );
  }

}
