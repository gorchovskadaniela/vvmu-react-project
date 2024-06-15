import {UserModel} from "../models/UserModel";
import {User} from "./User";

export class UserController {
    private userModel: UserModel;

    constructor() {
        this.userModel = new UserModel();
    }

    async getAllUsers() {
        return await this.userModel.getAllUsers();
    }

    async createUser(data: User){
        return await this.userModel.createUser(data);

    }
    async updateUser(id:number, data:User) {
        return await this.userModel.updateUser(id, data);
    }

    async deleteUser(id: number) {
        return await this.userModel.deleteUser(id);
    }
}
