import React from 'react';

const AstronomyCard = (props) => {
    const { media, date, explanation, service_version, title, url, hdurl } = props.data
    return(
        <div>
            { media === "video" ?
                <div className="container">
                    <h1 className="text-center mb-3 text-light">{title}</h1>
                    <div class="embed-responsive embed-responsive-16by9 mb-5">
                        <iframe allowFullScreen title="iframe" src={url}></iframe>
                    </div>
                    <p className="lead text-light">{explanation}</p>
                    <br/><br/><br/>
                    <span className="text-light">{date}, {service_version}</span>
                </div>
                :<div className="container">
                    <h1 className="text-center mb-3 text-light">{title}</h1>
                    <div class="embed-responsive embed-responsive-16by9 mb-5">
                        <a href = {hdurl}>
                            <img src={url} alt="Go to W3Schools!" width="800" height="800" border="0"/>
                        </a>
                    </div>
                    <p className="lead text-light">{explanation}</p>
                    <br/><br/><br/>
                    <span className="text-light">{date}, {service_version}</span>
                </div>
            }
        </div>
    )
}

export default AstronomyCard;