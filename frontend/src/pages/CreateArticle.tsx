import {Hero} from "../components/hero/Hero.tsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Form} from "./Form.tsx";

export const CreateArticle = () => {
    const [news, setNews] = useState(["article"]);

    const [isFormDisplayed, setIsFormDisplayed] = useState(false);

    useEffect(() => {
        const getNews = async () => {
            const result = await fetch("http://localhost:3072/api/news")
            const news = await result.json();
            console.log({news});
            setNews(news);
        }
        getNews().then();
    }, [])


    const showForm = () => {
        setIsFormDisplayed(true);

    }
    return (

        <>
            <Hero title="Create Article" content="Bla bla bla bla contacts" />
            <button onClick={showForm}>Write something down</button>
            {isFormDisplayed && <Form/>}
            <ul>
                {news.map((news: any) => {
                    return <li key={news.id}>
                        <Link to={`/article/${news.id}`}>{news.title}</Link>
                    </li>
                })}
            </ul>
        </>


    )
}
