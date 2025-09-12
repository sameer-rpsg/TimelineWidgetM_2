import React, { useEffect } from "react";
import styles from "@/components/TimeLineWidget2.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const TimeLineWidget2 = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(
      `.${styles.TimeLineWidget2highlight}`
    );

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;

        if (top < window.innerHeight - 100 && bottom > 0) {
          section.classList.add(styles._into_view);
        } else {
          section.classList.remove(styles._into_view);
        }
      });
    };

    handleScroll(); // Run on mount
    window.addEventListener("scroll", handleScroll);
    const images = document.querySelectorAll(`.${styles.lazyloadd}`);

    images.forEach((img) => {
      // Parallax effect - move the image slightly on scroll
      gsap.to(img, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement, // The wrapper div of the image
          start: "top bottom", // Start when image enters viewport
          end: "bottom top", // End when it leaves
          scrub: true, // Smooth scrubbing
        },
      });

      // Optional: zoom-in effect on entry
      gsap.fromTo(
        img,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="" className={styles.TimeLineWidget2}>
      <div className={styles.TimeLineWidget2container}>
        <div className={styles.part_12}>
          <div className={styles.TimeLineWidget2highlights}>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>1992</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Lush</h6>
              <h4 className={styles.highlightsmallpara}>
              Lush, sun-drenched, and impossibly serene, Mauritius makes for the perfect minimoon for couples.
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
                   Lush, sun-drenched, and impossibly serene. For couples looking to celebrate their just-married bliss, this Indian Ocean Island offers a kind of natural romance that’s quietly powerful. What sets Mauritius apart is its deeply immersive sense of nature.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/48684211.webp?k=eb364e0e760e5b043c05b8b00e4dfe21997195d1ba8d8e305cabac7e95334f69&o=v"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2005</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Anahita</h6>
              <h4 className={styles.highlightsmallpara}>
                Our days alternated between total relaxation, like overwater spa treatments with fresh aloe from the garden, 
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                   I couldn’t have asked for a more perfect base. Our days alternated between total relaxation, like overwater spa treatments with fresh aloe from the garden, and excursions such as snorkelling in jewel-toned waters and sailing lessons. 
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._halfes}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://scontent.fjlr3-1.fna.fbcdn.net/v/t39.30808-6/518272865_122126060210817324_8787439222009014323_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ud4OgmtF9RUQ7kNvwFfGK8i&_nc_oc=Admd02v8lsdrjzOCeqnEHgad9Dk_nRIuxU39UCQyDorCo4f52AvLq-xzoU-PS2sOPL4aohE7RwABZJo94pR1EoSI&_nc_zt=23&_nc_ht=scontent.fjlr3-1.fna&_nc_gid=I5oNv1M_1SthS55cfj-cLw&oh=00_AfZ0BCg-hppokS29GBMckcyTO8PPRuSuQFSC_70XmIenRA&oe=68BF27DD"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DdodyLI4anA7zkyys7_FVkcnlMT7TDDj7sxTgZSTufAiRUm5vL_wrLU9plCeZ31Pjr4&usqp=CAU"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2007</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Amari</h6>
              <h4 className={styles.highlightsmallpara}>
              Mauritius’ first craft brewery, where you can expect bold, ever-changing beers and a rustic menu in a casual setting at Bagatelle.
              </h4>
              <div className={styles.highlight__text}>
                <p className={styles.hightlight__textpara}>
                  <span>
                   Modern Indian fine dining by Michelin-starred chef Vineet Bhatia.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._large}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/97/fb/d4/shore-inn-at-ocean-grove.jpg?w=400&h=300&s=1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.TimeLineWidget2highlight}>
              <span className={styles.highlight__year}>
                <span>2008</span>
              </span>
              <h6 className={styles.highlightsmallTitle}>Sport</h6>
              <h4 className={styles.highlightsmallpara}>
                Op de Olympische Spelen van Beijing in 2008 maakte Ranomi haar
                debuut op het grootste toneel.
              </h4>
              <div className={styles.highlight__text}>
                <p>
                  <span>
                    Samen met Femke Heemskerk, Marleen Veldhuis en Inge Dekker
                    veroverde ze olympisch goud op de 4 x 100 meter vrije slag.
                    Haar eerste gouden plak smaakte naar meer. Deze prestatie
                    markeerde het begin van haar opmars naar individueel succes
                    en vormde de basis voor haar ambities richting Londen 2012.
                  </span>
                </p>
              </div>
              <div className={`${styles.highlight__layout} ${styles._overlay}`}>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/64/87/29/topside-inn.jpg?w=900&h=500&s=1"
                    />
                  </div>
                </div>
                <div className={styles.highlight_image}>
                  <div className={styles.image__inner}>
                    <img
                      className={`${styles.lazyloadd} ${styles.image__img}`}
                      src="https://www.kayak.com/rimg/himg/36/a6/89/expedia_group-136669-41290569-268591.jpg?width=836&height=607&crop=true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineWidget2;
