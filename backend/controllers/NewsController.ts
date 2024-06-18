import {NewsModel} from "../models/NewsModel";
import {News} from "./News";


export class NewsController {
    private newsModel: NewsModel;

    constructor() {
        this.newsModel = new NewsModel();
    }

    async getAllNews() {
        return await this.newsModel.getAllNews();
    }

    async getArticle(id:number) {
        return await this.newsModel.getArticle(id);
    }

    async createNews(data: News){
        return await this.newsModel.createNews(data);

    }
    async updateNews(id:number, data:News) {
        return await this.newsModel.updateNews(id, data);
    }

    async deleteNews(id: number) {
        return await this.newsModel.deleteNews(id);
    }


}
