import {Hero} from "../components/hero/Hero.tsx";
import {ArticlesPrimary} from "../components/articles-primary/ArticlesPrimary.tsx";

export const Blog = () => {
    return (
        <>
            <Hero title="Blog page" content="Hello and welcome to our blog! We're thrilled to have you here. Whether you're a first-time visitor or a regular reader, we hope you find inspiration, insights, and enjoyment in our posts." />

            <section className="section-articles">
                <div className="shell">
                    <div className="section__inner">
                        <header className="section__head">
                            <h2>That's all articles</h2>
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
