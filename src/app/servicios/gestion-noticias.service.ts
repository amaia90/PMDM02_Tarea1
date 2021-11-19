import { Tab1Page } from './../tab1/tab1.page';
//import { GestionNoticiasService } from './gestion-noticias.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import {map} from 'rxjs/operators';
import { IArticulo, INoticias, IFuente } from '../interfaces/mis-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GestionNoticiasService {
  articulo:IArticulo[]=[]; //Creo a partir de IArticulo un array con sus mismas propiedades llamado articulo
  articuloIndividual:IArticulo[]=[];//Creo a partir de IArticulo un array con sus mismas propiedades llamado articuloIndividual, que lo utilizaré para la página Leer

  constructor(private leerFichero:HttpClient) { //En el constructor creo un nuevo objeto de la clase HttpClient
    console.log("Servicio corriendo");
    this.getNoticiasFichero(); //Llamo a la función
    this.getNoticias(); //Llamada a la función
    
  }

  getNoticiasFichero(){ /*Leeremos el fichero .json e introduciremos datos en el array, para ello debemos utilizar el servicio httpclient
    lo inyectamos en el constructor pero antes importamos el modulo httpClient en app.module.ts*/
    //Leemos los datos para ellos httpClient nos da métodos asíncronos que utilizan observables
      
      let datosFichero: Observable<IArticulo[]>;//Con los observables se dice tb el tipo de datos con el que se va a trabajar en éste caso un array de tipo IArticulo
      //Lo inicializamos
      datosFichero = this.leerFichero.get<IArticulo[]>("/assets/datos/articulos.json");
      //Detectar cuando tenemos los datos o cuando cambian para ello hay que suscribirse al observable
      datosFichero.subscribe(datos => { //En el subscribe es dónde se decide que hacer con esos datos que han cambiado
      console.log(datos);//Se muestra por pantalla
      this.articulo=datos['articles']; //Me mostrará los datos que sean articles ya que son los que nos interesan
      this.articulo.push(...datos['articles']); //Los datos obtenidos los añado al array articulo
      console.log(this.articulo); //Los muestro en consola
        
      });
    
    
}
  
  getNoticias(){ //Función getNoticias
    return this.articulo; //Obtenemos array articulo
  }
  
    insertarArticulo(source:IFuente, title:string, description:string, url:string, urlToImage:string, publishedAt:string){
      //Creo una función llamada InsertarArticulo con los campos mismos que articulo. Para guardar las noticias que vaya seleccionando con el checkbox
      let nuevoArticulo:IArticulo={ //creo una nueva variable de tipo IArticulo
        source:source,
        title:title,
        description:description,
        url:url,
        urlToImage:urlToImage,
        publishedAt:publishedAt,

      };
      this.articuloIndividual.push(nuevoArticulo); //Inserto en articuloIndividual el nuevoArticulo
      console.log(this.articuloIndividual);//Lo muestro por consola

    }
  
  borrar(noticia:IArticulo){ //Función borrar que borra la noticia correspondiente al ion-icon de papelera
    let indice=this.articuloIndividual.indexOf(noticia);
  console.log("Este es el índice que borraré del array"+ indice);
  this.articuloIndividual.splice(indice, 1)
  console.log("aqui abajo la noticia después de borrar")
  console.log(this.articuloIndividual)}
    

}

