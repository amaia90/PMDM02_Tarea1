import { IFuente } from './../interfaces/mis-interfaces';

import { GestionNoticiasService } from './../servicios/gestion-noticias.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
  source:IFuente;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:string;
  valueBook:string;
  //checked : boolean = false;
  constructor(public gestionNoticias:GestionNoticiasService) {}
  /*ngOnInit(): void{
    this.gestionNoticias.getNoticiasFichero().subscribe(noticias=>{console.log(noticias);});
  }*/
  ngOnInit() {

  }
  valorCheckBox(event, noticia){
    console.log("ts"+event.detail.checked);//Con ésta línea me dice si está en true o false
    //let checked=event.detail.checked;
    //console.log(checked);
    if(event.detail.checked=true){
      /*this.gestionNoticias.checked="si";
      console.log("meter en variable service SI"+this.gestionNoticias.checked)*/
      this.gestionNoticias.insertarArticulo(noticia.source, noticia.title, noticia.description, noticia.url, noticia.urlToImage, noticia.publishedAt);
      
    } if(event.detail.checked=false){
      this.gestionNoticias.checked="no";
      console.log("meter en variable service NO"+this.gestionNoticias.checked)
      
      
    }
  }
  /*onClick(){
        
        this.gestionNoticias.insertarArticulo(nuevoArticulo.source, articulo.title, articulo.description, articulo.title, articulo.title, articulo.title );
        console.log("aqui está variable description"+this.description);
      }*/
}
