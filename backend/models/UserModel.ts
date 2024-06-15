import {DB} from "../core/DB";
import {UserDomainModel} from "./UserDomainModel";

export class UserModel extends DB {
    async getAllUsers() {
        const [rows] = await this.conn.query("SELECT * FROM users");
        return rows;
    }

    async createUser(data: UserDomainModel) {
        await this.conn.execute(`
            INSERT INTO users(username, password, created_at)
            VALUES(? ,? ,?)
        `,[data.username, data.password, data.createdAt])
    }
    async updateUser(id:number, data: UserDomainModel) {
        const userDataArray = Object.entries(data);

        const updateStatementData = [];
        let updateStatement = " ";

        userDataArray.forEach((data, index)=> {
            updateStatement += `${data[0]} = ?`;

            updateStatement += index + 1 === userDataArray.length ? " " :", "
            updateStatementData.push(data[1]);
        });
        updateStatementData.push(id);

        await this.conn.execute(`
        UPDATE users SET ${updateStatement}
        WHERE id = ?
        `, updateStatementData)
    }
    async deleteUser(id: number) {
        await this.conn.execute(`
            DELETE FROM users WHERE id = ?
            `, [id])
    }
}
