import { Article } from "./article";

//defini o formato que a classe deve seguir
export interface IArticleRepository {
  addArticle(article: Article): void;

  getArticles(): Article[];

  removeArticles(title: string): void;

  update(id: string, updatedArticle: Article): void;
}
