import { IFuente } from './../interfaces/mis-interfaces';

import { GestionNoticiasService } from './../servicios/gestion-noticias.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{ //Declaro las variables de IArticulo
  source:IFuente;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:string;
  valueBook:string;

  constructor(public gestionNoticias:GestionNoticiasService) {} //Declaración de un atributo llamado gestionNoticias que es de tipo GestionPersonasSErvice o inyectamos el servicio
  
  ngOnInit() {

  }
  valorCheckBox(event, noticia){ //Función que trae del html el evento y la noticia
    console.log("ts"+event.detail.checked);//Con ésta línea me dice si está en true o false
    //let checked=event.detail.checked;
    //console.log(checked);
    if(event.detail.checked=true){ //Si el resultado de checked es igual a true, es decir está activado
      //ejecutar función insertarArticulo que está en el servicio gestionNoticias 
      this.gestionNoticias.insertarArticulo(noticia.source, noticia.title, noticia.description, noticia.url, noticia.urlToImage, noticia.publishedAt);
      
    } if(event.detail.checked=false){ //Si no está activado o es igual a false, que no haga nada
      
      
      
    }
  }
}
