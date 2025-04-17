import { Article } from "./article";
import { IArticleRepository } from "./i-article-repository";

//classe para guardar os arquivos criados no repositório
export class ArticleRepository implements IArticleRepository {
  readonly id: string;
  //implementa o contrato de interface e segue o formato definido
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

  update(id: string, updatedArticle: Article): void {
    const article = this.articleList.find((article) => article.id === id);

    if (article) {
      article.title = updatedArticle.title;
      article.subtitle = updatedArticle.subtitle;
      article.publishedAt = updatedArticle.publishedAt;
      article.author = updatedArticle.author;
      article.image = updatedArticle.image;
      article.content = updatedArticle.content;
      return;
    }
  }
}
