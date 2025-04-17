import { Article } from "./article";
import { ArticleRepository } from "./article-repository";

//classe criada para criar os artigos e adicionar no repositório
export class CreateArticle {
  articleRepository: ArticleRepository;
  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  //método para executar a criação de arquivos e adicionar ao repositório
  execute(
    id: string,
    title: string,
    subtitle: string,
    publishedAt: Date,
    author: string,
    image: string,
    content: string
  ): void {
    //cria uma instancia da classe Article com os dados fornecidos
    const article: Article = new Article(
      id,
      title,
      subtitle,
      publishedAt,
      author,
      image,
      content
    );
    //adiciona ao repositório o artigo criado
    this.articleRepository.addArticle(article);
  }
}
