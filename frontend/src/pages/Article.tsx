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
            setArticle(news);
        }
        getNews().then();
    }, [])

    const deleteArtile = () => {
         fetch(`http://localhost:3073/api/news/${id}`, {
             method:"DELETE"
        });
         navigation("/create-article")

    }

    return (
        <>
            <Hero title={article.title} content={article.content} />

            <section className="section-article-single">
                <div className="shell">
                    <div className="section__inner">
                        <div className="section__article">


                            <div className="section__article-info">
                                <div className="section__article-author">
                                    This article was created by: <strong>{article.author}</strong>
                                </div>

                                <button className="section__article-delete" onClick={deleteArtile}>Delete this Article</button>
                            </div>

                            <div className="section__article-image">
                                <img src={article.picture} alt={article.title} />
                            </div>

                            <div className="section__article-body">

                                <div className="section__article-content">
                                    {article.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
