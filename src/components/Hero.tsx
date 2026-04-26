import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);

  useEffect(() => {
    //hero text character
    const headingTimer = setTimeout(() => {
      setIsHeadingVisible(true);
    }, 5000);
//herotext image
    const imageTimer = setTimeout(() => {
      setIsImageVisible(true);
    }, 1000);
//hero boutons
    const buttonsTimer = setTimeout(() => {
      setAreButtonsVisible(true);
    }, 6000);

    return () => {
      clearTimeout(headingTimer);
      clearTimeout(imageTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex h-[75vh] items-center justify-center overflow-hidden pt-20 md:max-[700px]:h-[68vh] md:max-[700px]:items-start md:max-[700px]:pt-14 [@media(max-height:675px)]:h-screen"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#92ACDE]/45"></div>

      <div className="relative z-10 h-full w-full text-center px-6 md:h-auto md:w-auto md:max-[700px]:pt-4 [@media(max-height:575px)]:pt-2">
        <img
          src="/pictures/heroText.png"
          alt="Hero Main Title"
          className={`absolute top-[15vh] left-1/2 h-auto w-full max-w-sm -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[3000ms] md:static md:mx-auto md:w-full md:max-w-full md:translate-x-0 md:translate-y-0 md:max-[700px]:max-w-[340px] [@media(max-height:575px)]:max-w-[280px] ${
            isImageVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {isHeadingVisible && (
          <h2 className="absolute top-[30vh] left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 text-white md:static md:mx-auto md:max-w-none md:translate-x-0 md:translate-y-0 md:mt-2 md:mb-6 md:max-[700px]:mt-1 md:max-[700px]:mb-3 [@media(max-height:575px)]:mt-0 [@media(max-height:575px)]:mb-2">
            <span className="block text-2xl font-bold md:text-5xl md:max-[700px]:text-3xl [@media(max-height:575px)]:text-2xl">
              Authentic Surface.
            </span>
            <span className="block text-lg font-semibold md:text-3xl md:max-[700px]:text-xl [@media(max-height:575px)]:text-base">
              Where Tradition Meets the Game.
            </span>
          </h2>
        )}

      </div>
    </section>
  );
}
