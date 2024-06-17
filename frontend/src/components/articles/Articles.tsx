import './Articles.scss';
import {Article} from '../article/Article.tsx';

export const Articles = ({articlesListItemsArray, articlesPerRow}) => {
    console.log(articlesPerRow);

    const articleListItems = articlesListItemsArray.map(articlesListItem => {

        return(
            <Article key={articlesListItem.id} id={articlesListItem.id} imageSrc={articlesListItem.imageSrc} title={articlesListItem.title} description={articlesListItem.description} />
        )
    });

    return(
        <div className="articles" style={{"--columns": articlesPerRow}}>
            <div className="articles__items">
                {articleListItems}
            </div>
        </div>
    )
}

