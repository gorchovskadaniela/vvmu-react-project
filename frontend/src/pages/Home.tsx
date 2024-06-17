import {Hero} from "../components/hero/Hero.tsx";
import {Banner} from "../components/banner/Banner.tsx";
import {Articles} from "../components/articles/Articles.tsx";
import {articleListItems} from "../components/data.tsx";
import aboutImage from './../assets/image-10.webp';

export const Home = () => {
    return (
        <>
            <Hero title="Your Ultimate Source for Celebrity Gossip and Entertainment News " content="Welcome to “Let’s Gossip”, the hottest destination for the latest celebrity gossip, entertainment news, and Hollywood scoops. Our mission is to bring you the juiciest stories, exclusive interviews, and behind-the-scenes insights from the world of showbiz. Whether you’re a fan of A-list celebrities or reality TV stars, we’ve got you covered!"
            />


            <section className="section-news">
                <Banner title="Stay Informed, Stay Ahead"/>

                <div className="section__body">
                    <div className="shell">
                        <div className="section__news">
                            <Articles articlesListItemsArray={articleListItems} articlesPerRow="3"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-about">
                <Banner title="Wanna learn more about us"/>

                <div className="shell">
                    <div className="section__inner">
                        <div className="section__image">
                            <div className="section__image-inner">
                                <img src={aboutImage} alt="Girls gossiping" />
                            </div>
                        </div>

                        <div className="section__content">
                            <h2>What we do?</h2>

                            <div className="section__entry">
                                <p>“Let’s Gossip” is dedicated to bringing you the best in celebrity news and entertainment. Our team of experienced writers and reporters work tirelessly to bring you the latest and most entertaining stories from the world of showbiz. We value creativity, accuracy, and the thrill of a great scoop. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
