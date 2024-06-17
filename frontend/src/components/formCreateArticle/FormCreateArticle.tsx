import './FormCreateArticle.scss';

export const FormCreateArticle = () => {
    return (
        <div className="form-create-article">
            <form action="?" method="post">
                <div className="form__head">
                    <h3>You can create a simple article by filling the fields below.</h3>
                </div>

                <div className="form__body">
                    <div className="form__row">
                        <label className="form__label">Title of the article</label>

                        <div className="form__controls">
                            <input type="text" className="form__field" name="article-title" id="article-title"placeholder="Title" />
                        </div>
                    </div>

                    <div className="form__row">
                        <label className="form__label">Article content</label>

                        <div className="form__controls">
                            <textarea className="form__field form__field--textarea" name="article-content" id="article-content" placeholder="Content"></textarea>
                        </div>
                    </div>

                    <div className="form__row">
                        <label className="form__label">Author name</label>

                        <div className="form__controls">
                            <input type="text" className="form__field" name="article-author" id="article-author"placeholder="Author name" />
                        </div>
                    </div>

                    <div className="form__row">
                        <label className="form__label">Author email</label>

                        <div className="form__controls">
                            <input type="mail" className="form__field" name="author-email" id="author-email"placeholder="Author email" />
                        </div>
                    </div>

                    <div className="form__row">
                        <label className="form__label">Upload image</label>

                        <div className="form__controls">
                            <input type="file" className="form__field form__field--upload" name="article-file-upload" id="article-file-upload" placeholder="Upload image" />
                        </div>
                    </div>
                </div>

                <div className="form__actions">
                    <button type="submit" className="form__btn">Create new article</button>
                </div>
            </form>
        </div>
    );
};

export default FormCreateArticle;
