import { useEffect } from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/pages/Home.css";
import image2 from "../assets/images/2.jpg";
import image4 from "../assets/images/4.jpg";
import image1 from "../assets/images/1.jpg";
import welkomFoto from "../assets/images/welkomfoto_0.jpg";


const Home = () => {

  useEffect(() => {
    window.dispatchEvent(new Event("resize")); // Trigger a resize event to fix slick width issues
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-container">
      <h1>Welkom bij De Vergulde Pantoffel </h1>

      <Carousel {...settings} className="home-carousel">
        <div>
        <img src={image1} alt="Impressie 1" loading="lazy" />
        </div>
        <div>
        <img src={image2} alt="Impressie 2" />
        </div>
        <div>
        <img src={image4} alt="Impressie 4" />
        </div>
      </Carousel>
      <div className="info-container">
        <div className="info-text">
        <p>
        Welkom op de website van De Vergulde Pantoffel. Al vijf en twintig jaar restaureer en verkoop ik antiek design en verlichting. Tevens heb ik in opdracht veel tafels gemaakt van kersen, noten of eikenhout.
        Voor alle (antiek) meubelrestauraties van fineer tot politoerschade kunt u in mijn atelier te Dordrecht terecht.
        Elk meubel wordt voor u persoonlijk in orde gemaakt en in uw interieur geplaatst waarbij eventuele specifieke aanpassingen aan de indeling uitvoerig met u besproken worden.
        </p>
        <p>
          Neem een kijkje in de winkel of neem contact op voor meer
          informatie over onze diensten.
        </p>
        </div>
        <div className="info-image-container">
        <img src={welkomFoto} alt="Welkom Foto" className="info-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
