import {useEffect, useState} from "react";
import {useNavigate, useNavigation, useParams} from "react-router-dom";
import {Hero} from "../components/hero/Hero.tsx";

export interface Article {
    "title" :string,
    "content":string,
    "author" : string
}

export const Article = () => {
    const navigation = useNavigate()
    const {id} = useParams()
    const [article, setArticle] = useState([] as any);

    useEffect(() => {
        const getNews = async () => {
            const result = await fetch(`http://localhost:3073/api/article/${id}`)
            const news = await result.json();
            console.log({article});
            setArticle(news);
        }
        getNews().then();
    }, [])

    const deleteArtile = () => {
         fetch(`http://localhost:3073/api/article/${id}`, {
             method:"DELETE"
        });
         navigation("/create-article")

    }

    return (
        <>
            <Hero title="Create Article" content="Bla bla bla bla contacts" />
            <h1>{article.title}</h1>
            <h5>{article.content}</h5>
            <p>Created by:{article.author}</p>
            <button onClick={deleteArtile}>Delete this Article</button>
        </>


)
}