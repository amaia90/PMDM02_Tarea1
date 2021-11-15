
import { GestionNoticiasService } from './../servicios/gestion-noticias.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
  //checked : boolean = false;
  constructor(public gestionNoticias:GestionNoticiasService) {}
  /*ngOnInit(): void{
    this.gestionNoticias.getNoticiasFichero().subscribe(noticias=>{console.log(noticias);});
  }*/
  ngOnInit() {

  }
  valorCheckBox(event){
    console.log("ts"+event.detail.checked);//Con ésta línea me dice si está en true o false
    let checked=event.detail.checked;
    if(checked){
      this.gestionNoticias.checked=="si";
      console.log("meter en variable serviceSI"+this.gestionNoticias.checked)
    } else{
      this.gestionNoticias.checked=="no";
      console.log("meter en variable serviceNO"+this.gestionNoticias.checked)
      
    }
  }
}
