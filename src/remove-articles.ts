import { ArticleRepository } from "./article-repository";

//classe criada para remover artigos do repositório pelo titulo dos artigos
export class RemoveArticles {
  articleRepository: ArticleRepository; //referencia ao repositório de artigos
  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }
  //método para remover os artigos pelo titulo indicado
  execute(title: string) {
    this.articleRepository.removeArticles(title);
  }
}
