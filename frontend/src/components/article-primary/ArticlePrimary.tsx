// import './ArticlePrimary.scss';
import {Link} from "react-router-dom";

export const ArticlePrimary = ({ id, picture, title, content, author }) => {
    return(
        <article key={id} id={id} className="article-primary">
            <Link className="article__link" to={`/article/${id}`}>
                {title}
            </Link>

            <div className="article__image">
                <img src={picture} alt={title} />
            </div>

            <div className="article__content">
                <h3 className="article__title">{title}</h3>

                <h4 className="article__author">{author}</h4>

                <div className="article__entry">
                    <p>{content}</p>
                </div>
            </div>
        </article>
    )
}
