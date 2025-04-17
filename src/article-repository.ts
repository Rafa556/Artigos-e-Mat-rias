import { Article } from "./article";
//classe para guardar os arquivos criados no repositório
export class ArticleRepository {
  private articleList: Article[] = []; // lista dos artigos armazenados

  //métodos para adicionar o artigo na lista
  addArticle(article: Article): void {
    this.articleList.push(article);
  }

  getArticles(): Article[] {
    return this.articleList;
  }
  removeArticles(title: string): void {
    this.articleList = this.articleList.filter(
      (article) => article.title !== title
    );
  }
}
