//criamos a classe Article com seus atributos
export class Article {
  id: string;
  title: string;
  subtitle: string;
  publishedAt: Date;
  author: string;
  image: string;
  content: string;

  //o constructor é chamado para definir os valores do artigo
  constructor(
    id: string,
    title: string,
    subtitle: string,
    publishedAt: Date,
    author: string,
    image: string,
    content: string
  ) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.publishedAt = publishedAt;
    this.author = author;
    this.image = image;
    this.content = content;
  }
}
