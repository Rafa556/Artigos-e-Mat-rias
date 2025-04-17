import { Article } from "./article";

export interface IArticleRepository {
  addArticle(article: Article): void;

  getArticles(): Article[];

  removeArticles(title: string): void;
}
