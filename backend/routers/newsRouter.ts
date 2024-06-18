import {Request, Response, Router} from "express";
import {News} from "../controllers/News";
import {NewsController} from "../controllers/NewsController";

export const newsRouter = Router();

const newsController = new NewsController();

newsRouter.get("/news", async (req: Request, res: Response) => {
    const news = await newsController.getAllNews();
    res.send(news)
});

newsRouter.post("/news", async (req: Request, res: Response) => {
    const body = req.body;
    const news: News = {
        title: body.title,
        content: body.content,
        author: body.author,
        createdAt: body.createdAt,
        picture: body.picture
    }

    try{
        await newsController.createNews(news);
    } catch (e) {
        res.send({
            status:400,
            message:"Failed to create news" + e
        });
    }

    res.send(news)
});

newsRouter.put("/news/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await newsController.updateNews(Number(id), req.body);
    res.send({
        message: "News updated correctly"
    })
})


newsRouter.delete("/news/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        await newsController.deleteNews(Number(id));
    } catch (e) {
        res.send({
            status : 400,
            message: "Failed to delete the news" + e
        })
    }

    res.send({
        message: "News deleted successfully"
    })
    // res.send(NewsController)
});

export default newsRouter;

