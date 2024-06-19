import React, { useState, useEffect } from 'react';
import './ArticlesPrimary.scss';
import {ArticlePrimary} from '../article-primary/ArticlePrimary.tsx';

export const ArticlesPrimary = () => {
  const [articlesPrimary, setArticlesPrimary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      //Смени тук вместо тоя json файл да е пътя до api-то и ще работи
      const result = await fetch("http://localhost:3073/api/news")
      const articlesPrimary = await result.json();
      setArticlesPrimary(articlesPrimary);
    }

    getNews().then();
  }, [])

  return (
    <>
        <div className="articles-primary">
            <div className="articles__items">
                {articlesPrimary.map(articlePrimary => (
                    <div className="articles__item" key={articlePrimary.id}>
                        <ArticlePrimary
                            id={articlePrimary.id}
                            title={articlePrimary.title}
                            content={articlePrimary.content}
                            author={articlePrimary.author}
                            picture={articlePrimary.picture}
                          />
                    </div>
                ))}
            </div>
        </div>
    </>
  );
}

