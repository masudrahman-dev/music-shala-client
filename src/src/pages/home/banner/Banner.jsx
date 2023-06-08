import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div className="container mx-auto mt-20 ">
      <div className="grid  gap-12   lg:grid-cols-2">
        <div className="mr-auto place-self-center">
          <div className="max-w-2xl mb-4   text-4xl font-extrabold tracking-wide md:text-5xl xl:text-6xl dark:text-white">
            <p> Play With Your </p>
            <p className="mt-3"> Dream Cars</p>
          </div>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From play to global sales car compliance, companies around the world
            use we provide to you simpler way service.
          </p>
        </div>
        <div>
          <AwesomeSlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
          >
            <div>
              <img
                src="https://www.hobbytoys.co/cdn/shop/products/BburagoFerrariSF90StradaleSignatureEdition_360x.jpg?v=1681706909"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.hobbytoys.co/cdn/shop/files/1-18_BugattiBolide_e4cb6d49-f1e1-43b4-847e-5ed6ed683be8_970x.jpg?v=1668761072"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-11/12"
                src="https://www.hobbytoys.co/cdn/shop/products/KTMRC390c_470x.jpg?v=1671618067"
                alt=""
              />
            </div>
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
