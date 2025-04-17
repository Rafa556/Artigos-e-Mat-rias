//criamos a classe Article com seus atributos
export class Article {
  title: string;
  subtitle: string;
  publishedAt: Date;
  author: string;
  image: string;
  content: string;

  //o constructor é chamado para definir os valores do artigo
  constructor(
    title: string,
    subtitle: string,
    publishedAt: Date,
    author: string,
    image: string,
    content: string
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.publishedAt = publishedAt;
    this.author = author;
    this.image = image;
    this.content = content;
  }
}
