import './Banner.scss';

export const Banner = ({title}) => {
    return(
        <div className="banner">
            <div className="shell">
                <div className="banner__content">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

