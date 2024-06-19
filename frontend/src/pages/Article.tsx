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
<<<<<<< HEAD
            <Hero title={article.title} content="Bla bla bla bla contacts" />

            <section className="section-article-single">
                <div className="shell">
                    <div className="section__inner">
                        <div className="section__article">
                            <div className="section__article-head">
                                <h2>{article.title}</h2>
                            </div>

                            <div className="section__article-info">
                                <div className="section__article-author">
                                    {article.author}
                                </div>

                                <button className="section__article-delete" onClick={deleteArtile}>Delete this Article</button>
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
=======
            <Hero title="Create Article" content="Bla bla bla bla contacts" />
            <h1>{article.title}</h1>
            <h5>{article.content}</h5>
            <p>Created by:{article.author}</p>
            <button onClick={deleteArtile}>Delete this Article</button>
        </>


)
}
>>>>>>> 4243c420016f4dee8f433def47c24fa3dcbb049b
