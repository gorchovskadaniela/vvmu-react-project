import './Article.scss';

export const Article = ({ id, imageSrc, title, description }) => {
    return(
        <article id={id} className="article">
            <div className="article__image">
                <img src={imageSrc} alt={title} />
            </div>

            <div className="article__content">
                <h3 className="article__title">{title}</h3>

                <div className="article__entry">
                    <p>{description}</p>
                </div>
            </div>
        </article>
    )
}

