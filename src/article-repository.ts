import { Article } from "./article";
import { IArticleRepository } from "./i-article-repository";

//classe para guardar os arquivos criados no repositório
export class ArticleRepository implements IArticleRepository {
  private articleList: Article[] = []; // lista dos artigos armazenados

  //métodos para adicionar o artigo na lista
  addArticle(article: Article): void {
    this.articleList.push(article);
  }

  //retorna a lista atualizada
  getArticles(): Article[] {
    return this.articleList;
  }

  //método para buscar os titulos diferentes do titulo escolhido para remover
  //resumindo: método para remover 1 artigo pelo titulo
  removeArticles(title: string): void {
    this.articleList = this.articleList.filter(
      (article) => article.title !== title
    );
  }
}
