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
  articulo:IArticulo[]=[];
  articuloIndividual:IArticulo[]=[];
  //noticias:INoticias[]=[];
  prueba:[];
  checked:string;



  constructor(private leerFichero:HttpClient) { //En el constructor creo un nuevo objeto de la clase HttpClient
    //console.log("Servicio corriendo");
    this.getNoticiasFichero(); //Llamo a la función
    //this.getLeerNoticia();
    this.getNoticias();
    //this.getChekeado;
    //this.getNoticiaIndividual();
    this.getConocerValorChecked();
  }

  getNoticiasFichero(){
    /*return this.leerFichero.get('/assets/datos/articulos.json').pipe
    (
      map( (datos:any[])=>{return datos.map(noticia=>{return{nombre:noticia.author}}
      )}));*/
    
      let datosFichero: Observable<IArticulo[]>;
      
      datosFichero = this.leerFichero.get<IArticulo[]>("/assets/datos/articulos.json");
  
      datosFichero.subscribe(datos => {
        console.log(datos);
        this.articulo=datos['articles'];
        this.articulo.push(...datos['articles']);
        console.log(this.articulo);
        
      });
    
    //datosFichero.subscribe(datos=>{console.log(datos);
    //});
    
    
}
  getConocerValorChecked(){
    console.log("Este es el valor del checked"+this.checked);

  }
  getNoticias(){
    return this.articulo;
  }
  /*getNoticiaIndividual(){ //Función que muestra las noticias
      if(this.checked="si"){
    return this.articulo;
      }else if(this.checked="no"){this.articulo=[]
      console.log("prueba"+this.articulo)}

  }*/
    insertarArticulo(source:IFuente, title:string, description:string, url:string, urlToImage:string, publishedAt:string){
      let nuevoArticulo:IArticulo={
        source:source,
        title:title,
        description:description,
        url:url,
        urlToImage:urlToImage,
        publishedAt:publishedAt,

      };
      this.articuloIndividual.push(nuevoArticulo);
      console.log(this.articuloIndividual);
      console.log(this.checked);

    }
  /*getChekeado(){
    if(this.checked=="si"){
      let datosFichero: Observable<IArticulo[]>;
      
      datosFichero = this.leerFichero.get<IArticulo[]>("/assets/datos/articulos.json");
  
      datosFichero.subscribe(datos => {
        console.log(datos);
        this.articulo=datos['articles'];
        //this.articulo.push(...datos);
        console.log(this.articulo);
        
      });

    }
  }*/
  borrar(noticia){
    let noticiaEncontrada:IArticulo=this.articuloIndividual.find(function(cadaPersona){return cadaPersona.publishedAt==noticia.publishedAt}) //Valor es cada uno de las personas del array
    console.log(noticiaEncontrada)
    let indice=this.articuloIndividual.indexOf(noticiaEncontrada);
    console.log(indice);
    this.articuloIndividual.shift();}
}

