//Creación de tres interfaces INoticias, IArticulo e IFuente que nos permite almacenar los datos de las noticias
//Se ha realizado con el plugin json to js creando una carpeta mis-interfaces

export interface INoticias {
  status: string;
  totalResults: number;
  articles: IArticulo[];
}

export interface IArticulo {
  source: IFuente;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

export interface IFuente {
  id?: string;
  name: string;
}