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