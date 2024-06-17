import {DB} from "../core/DB";
import {NewsDomainModel} from "./NewsDomainModel";
import {News} from "../controllers/News";

export class NewsModel extends DB {
    async getAllNews() {
        const [rows] = await this.conn.query("SELECT * FROM news");
        return rows;
    }

    async createNews(data: News) {
        await this.conn.execute(`
            INSERT INTO news(title, content, author)
            VALUES(? ,? ,?)
        `,[data.title, data.content, data.author])
    }
    async updateNews (id: number, data:NewsDomainModel) {
        const userPropArray = Object.entries(data);

        let setStatement = " ";
        const  setStatementValues = [];
        userPropArray.forEach((keyValuePair, index) => {
            setStatement +=`${keyValuePair[0]} = ?`;
            setStatement += (index + 1 ===userPropArray.length) ? " " : ", ";
            setStatementValues.push(keyValuePair[1])
        });
        setStatementValues.push(id);

        await this.conn.execute(`
        UPDATE news SET ${setStatement}
        WHERE id = ?
        `,setStatementValues)
    }




    // async updateNews(id: number, data: News) {
    //     const newsDataArray = Object.entries(data);
    //
    //     const updateStatementData = [];
    //     let updateStatement = " ";
    //
    //     newsDataArray.forEach((data, index)=> {
    //         updateStatement += `${data[0]} = ?`;
    //
    //         updateStatement += index + 1 === newsDataArray.length ? " " :", "
    //         updateStatementData.push(data[1]);
    //     });
    //     updateStatementData.push(id);
    //
    //     await this.conn.execute(`
    //     UPDATE news SET ${updateStatement}
    //     WHERE id = ?
    //     `, updateStatementData)
    // }
    async deleteNews(id: number) {
        await this.conn.execute(`
            DELETE FROM news WHERE id = ?
            `, [id])
    }
}
