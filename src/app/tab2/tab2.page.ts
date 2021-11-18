import { IArticulo } from './../interfaces/mis-interfaces';
import { GestionNoticiasService } from './../servicios/gestion-noticias.service';
import { Component } from '@angular/core';
import {AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public gestionNoticias:GestionNoticiasService, private alerta:AlertController ) {}

onClick(){
  this.presentarAlerta();}
  
  //console.log(this.gestionNoticias.articuloIndividual)

  //const user=this.gestionNoticias.articuloIndividual.find(user=>user.publishedAt==="2021-09-27T13:00:02Z");
  
  //console.log(this.gestionNoticias.articulo);
  //let indice=this.gestionNoticias.articulo.indexOf(user);
  //console.log(this.gestionNoticias.articulo);
  //console.log(noticia);
  //let indice=this.gestionNoticias.articulo.indexOf(noticia.publishedAt);
  //console.log(indice)
  //this.gestionNoticias.articuloIndividual.slice(indice,1);
  //console.log(indice);
  //noticia.slice(indice,1);
  /*console.log(indice);
  console.log(this.gestionNoticias.articuloIndividual);
  this.gestionNoticias.articuloIndividual.slice(indice, 1);
  console.log(this.gestionNoticias.articuloIndividual);*/


  //console.log(this.gestionNoticias.articuloIndividual.indexOf(noticia.publishedAt));
  //console.log(noticia.publishedAt);
  //console.log(this.gestionNoticias.articuloIndividual)

async presentarAlerta() {
  const alert = await this.alerta.create({
    header: 'Confirmar', //Encabezado del alert
    message: 'Borrar noticia?', //Mensaje que queremos que salga en el alert
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => { //Función a ejecutar cuando el usuario de a cancelar
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => { //Función a ejecutar cuando el usuario de a ok
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}

borrar(noticia){
  let noticiaEncontrada:IArticulo=this.gestionNoticias.articuloIndividual.find(function(cadaNoticia){return cadaNoticia.publishedAt==noticia.publishedAt}) //Valor es cada uno de las personas del array
  console.log(noticiaEncontrada)
  let indice=this.gestionNoticias.articuloIndividual.indexOf(noticiaEncontrada);
  console.log("Este es el índice que borraré del array"+ indice);
  this.gestionNoticias.articuloIndividual.slice(indice)
  console.log("aqui abajo la noticia después de borrar")
  console.log(this.gestionNoticias.articuloIndividual)

}


}
