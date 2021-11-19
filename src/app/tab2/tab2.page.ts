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

  constructor(public gestionNoticias:GestionNoticiasService, private alerta:AlertController ) {} //Inyecto el controlador de alertas AlertController en el constructor del controlador y lo llamo alerta


async presentarAlerta(noticia) {
  const alert = await this.alerta.create({ //Construyo un nuevo objeto alert llamando al la función create del objeto AlertController y les pasamos los parámetros que continúan
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
          this.gestionNoticias.borrar(noticia); //Llama a la función borrar que está dentro del servicio gestionNoticias
        }
      }
    ]
  });

  await alert.present();
}



}
