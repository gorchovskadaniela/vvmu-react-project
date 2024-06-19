import {Hero} from "../components/hero/Hero.tsx";
import {ArticlesPrimary} from "../components/articles-primary/ArticlesPrimary.tsx";

export const Blog = () => {
    return (
        <>
            <Hero title="Blog page" content="Bla bla bla bla blog" />

            <section className="section-articles">
                <div className="shell">
                    <div className="section__inner">
                        <header className="section__head">
                            <h2>That's all of our new articles</h2>
                        </header>

                        <div className="section__body">
                            <ArticlesPrimary />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
