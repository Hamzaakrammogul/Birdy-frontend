import "./Banner.scss";
import bannerImg from '../../../assets/banner-img.png'
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <div className="ctas">
                    <div className="banner-cta"> Read more</div>
                    <div className="banner-cta  v2" >Shop now</div>
                </div>
            </div>
            <img className="banner-img" src={bannerImg} alt="" />
        </div>
    </div>
};

export default Banner;
