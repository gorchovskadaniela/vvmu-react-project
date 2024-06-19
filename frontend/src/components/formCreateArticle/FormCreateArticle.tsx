import { useForm } from "react-hook-form"
import './FormCreateArticle.scss';
import {useNavigate} from "react-router-dom";

export const FormCreateArticle = () => {
    const navigation = useNavigate()
    const {
        register,
        handleSubmit,
        // formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
        fetch(`http://localhost:3073/api/news`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: data.title,
                content: data.content,
                author: data.author,
                picture: data.picture
            })

        }).then();

        navigation("/create-article")

    }

    return (
        <div className="form-create-article">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__head">
                    <h3>You can create a simple article by filling the fields below.</h3>
                </div>

                <div className="form__body">
                    <div className="form__row">
                        <label className="form__label">Title of the article</label>

                        <div className="form__controls">
                            <input {...register("title")} type={"text"} className="form__field"  id="article-title" placeholder="Title" />
                        </div>
                    </div>

                    <div className="form__row">
                        <label className="form__label">Article content</label>

                        <div className="form__controls">
                            <textarea {...register("content", )} className="form__field form__field--textarea"  id="article-content" placeholder="Content"></textarea>
                        </div>
                    </div>

                    <div className="form__row">
                        <label className="form__label">Author name</label>

                        <div className="form__controls">
                            <input {...register("author", )}  type={"text"} className="form__field"  id="article-author"placeholder="Author name" />
                        </div>
                    </div>

                    <div className="form__row">
                        <label className="form__label">Upload image link</label>

                        <div className="form__controls">
                            <input {...register("picture", )} type={"text"} className="form__field"  id="image-link" placeholder="http://yourlink.com" />
                        </div>
                    </div>
                </div>

                <div className="form__actions">
                    <button type={"submit"} className="form__btn">Create new article</button>
                </div>
            </form>
        </div>
    );
};

export default FormCreateArticle;
