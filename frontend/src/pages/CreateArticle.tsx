import {Hero} from "../components/hero/Hero.tsx";
import {FormCreateArticle} from "../components/formCreateArticle/FormCreateArticle.tsx";
import image2 from '../assets/image-2.jpeg';

export const CreateArticle = () => {
    return (
        <>
            <Hero title="The most important part - Article Creation!" content="Create and help us to grow!" />

            <section className="section-article-creation">
                <div className="shell">
                    <div className="section__inner">
                        <div className="section__form">
                            <FormCreateArticle />
                        </div>

                        <div className="section__image">
                            <div className="section__image-inner">
                                <img src={image2} alt="Girls image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
