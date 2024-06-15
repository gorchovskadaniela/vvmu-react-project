import {Request, Response, Router} from "express";
import {UserController} from "../controllers/UserController";
import {User} from "../controllers/User";

export const userRouter = Router();

const userController = new UserController();

userRouter.get("/users", async (req: Request, res: Response) => {
    const user = await userController.getAllUsers();
    res.send(user)
});

userRouter.post("/users", async (req: Request, res: Response) => {
    const body = req.body;
    const user: User = {
        username: body.username,
        password: body.password,
        createdAt: body.createdAt
    }

    try{
        await userController.createUser(user);
    } catch (e) {
        res.send({
            status:400,
            message:"Failed to create user" + e
        });
    }



    res.send(user)
});

userRouter.put("/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await userController.updateUser(Number(id), req.body);
    res.send({
        message: "User updated correctly"
    })
})


userRouter.delete("/users/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    await userController.deleteUser(Number(id));
    res.send({
        message: "User deleted successfully"
    })
});