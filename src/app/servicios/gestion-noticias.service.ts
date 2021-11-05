//import { GestionNoticiasService } from './gestion-noticias.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INoticias } from '../interfaces/mis-interfaces';


@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {
  noticias:INoticias[]=[];

  constructor(private leerFichero:HttpClient) { //En el constructor creo un nuevo objeto de la clase HttpClient
    console.log("Servicio corriendo");
    this.getNoticiasFichero(); //Llamo a la función
    
  }
  getNoticiasFichero(){
    let datosFichero:Observable<INoticias[]>;
    datosFichero=this.leerFichero.get<INoticias[]>("/assets/datos/articulos.json");
    datosFichero.subscribe(datos=>{console.log(datos);
      this.noticias.push(...datos);  
    });
}

  getNoticias(){ //Función que muestra las noticias
    return this.noticias;
  }

}

