import './Hero.scss';

export const Hero = ({title, content}) => {
    return(
        <section className="hero">
            <div className="shell">
                <div className="hero__inner">
                    <div className="hero__content">
                        <h1>{title}</h1>

                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

