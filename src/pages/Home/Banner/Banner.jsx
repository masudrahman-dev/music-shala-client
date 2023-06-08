import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import AwesomeSliderStyles from "react-awesome-slider/dist/";

/**
 * https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6357.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/09/IMG_7127.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6476.jpg

 * https://bridgemusic.in/wp-content/uploads/2022/10/testimonial-bg-img.webp
 * faculty---------
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_piano.jpg
 *  https://bridgemusic.in/wp-content/uploads/2022/10/faculty_guitar.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_drum.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_singing.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_baseguitar.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_keyboard.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/10/faculty_volini.jpg
 */

const Banner = () => {
  const image =
    "https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6784.jpg";

  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      cssModule={AwesomeSliderStyles}
    >
      <div>
        <img
          src="https://bridgemusic.in/wp-content/uploads/2022/09/IMG_6784.jpg"
          alt=""
        />
      </div>
    </AutoplaySlider>
  );
  return <>{slider}</>;
};

export default Banner;
