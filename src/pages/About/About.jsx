import React, { useEffect, useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from "./_about.module.scss";
import Button from "../../components/button/Button";
//images
import amazonmusicLogo from "../../assets/brands/amazon-music-logo.png";
import spotifyLogo from "../../assets/brands/spotify-logo.png";
import applemusicLogo from "../../assets/brands/apple-music-logo.png";
import youtubemusicLogo from "../../assets/brands/youtube-music-logo.png";
import tidalLogo from "../../assets/brands/tidal-logo.png";
import deezerLogo from "../../assets/brands/deezer-logo.png";
import albumgirl from "../../assets/images/album-girl.png";
import productSampleGif from "../../assets/gif/product-sample.gif";

function About() {
  const { ref: ref_1, inView: inview_1 } = useInView({
    threshold: 0.6,
  });
  const { ref: ref_2, inView: inview_2 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref_3, inView: inview_3 } = useInView({
    threshold: 0.6,
  });
  const { ref: ref_4, inView: inview_4 } = useInView({
    threshold: 0.8,
  });
  const textbox1_control = useAnimation();
  const textbox2_control = useAnimation();
  const textbox3_control = useAnimation();
  const brandsImg_control = useAnimation();
  const albumGirlImg_control = useAnimation();
  const productsample_control = useAnimation();
  const item_1_control = useAnimation();
  const item_2_control = useAnimation();
  const item_3_control = useAnimation();
  const item_4_control = useAnimation();

  //section-1
  useEffect(() => {
    if (inview_1) {
      textbox1_control.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.65,
        },
      });
      brandsImg_control.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.2,
        },
      });
    } else {
      textbox1_control.start({
        opacity: 0,
        y: 400,
        transition: {
          duration: 0,
        },
      });
      brandsImg_control.start({
        opacity: 0,
        y: 400,
        transition: {
          duration: 0,
        },
      });
    }
  }, [inview_1]);

  //section-2
  useEffect(() => {
    if (inview_2) {
      albumGirlImg_control.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0,
        },
      });
      textbox2_control.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      });
    } else {
      albumGirlImg_control.start({
        opacity: 0,
        y: 400,
        transition: {
          duration: 0,
        },
      });
      textbox2_control.start({
        opacity: 0,
        y: 400,
        transition: {
          duration: 0,
        },
      });
    }
  }, [inview_2]);

  //section-3
  useEffect(() => {
    if (inview_3) {
      textbox3_control.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      });
      productsample_control.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: 0,
        },
      });
    } else {
      textbox3_control.start({
        y: 400,
        opacity: 0,
        transition: {
          duration: 0,
        },
      });
      productsample_control.start({
        opacity: 0,
        y: 400,
        transition: {
          duration: 0,
        },
      });
    }
  }, [inview_3]);

  //section-4
  useEffect(() => {
    const off = {
      opacity: 0,
      x: -300,
      transition: {
        duration: 0,
      },
    };
    if (inview_4) {
      item_1_control.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.1,
        },
      });
      item_2_control.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.2,
        },
      });
      item_3_control.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.3,
        },
      });
      item_4_control.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: 0.4,
        },
      });
    } else {
      item_1_control.start({ ...off, x: 400 });
      item_2_control.start(off);
      item_3_control.start(off);
      item_4_control.start(off);
    }
  }, [inview_4]);
  return (
    <>
      <section className={`${styles.container}`}>
        <div ref={ref_1} className={`${styles.section} ${styles.section_1}`}>
          <h1 className={`${styles.title}`}>About us</h1>
          <div className={`${styles.section_container}`}>
            <motion.div
              className={`${styles.left} ${styles.text_box} ${styles.text_box_1}`}
              animate={textbox1_control}
            >
              <p>
                The idea for Incentify was born out of the simple problem around
                how cluttered the entire experience of sharing music was
              </p>
              <p>
                As we began speaking to users, we understood how music was much
                more social than we ever realise.
              </p>
              <p>
                Yet, Spotify, Apple Music & other streaming apps, do not bother
                to add social features, as it would undermine their proprietary
                music recommendation algorithms.
              </p>
              <p>However, these recommendations don't quite cut it, do they?</p>
            </motion.div>
            <motion.div className={`${styles.right}`}>
              {/* amazon music */}
              <img
                src={amazonmusicLogo}
                alt="amazon music"
                className={` ${styles.brandLogo} ${
                  inview_1 ? styles.brandLogo_amazonmusic : ""
                }`}
              />
              {/* spotify */}
              <img
                src={spotifyLogo}
                alt="spotify music"
                className={` ${styles.brandLogo} ${
                  inview_1 ? styles.brandLogo_spotify : ""
                }`}
              />
              {/* apple music */}
              <img
                src={applemusicLogo}
                alt="spotify music"
                className={` ${styles.brandLogo} ${
                  inview_1 ? styles.brandLogo_applemusic : ""
                }`}
              />
              {/* youtube music */}
              <img
                src={youtubemusicLogo}
                alt="spotify music"
                className={` ${styles.brandLogo} ${
                  inview_1 ? styles.brandLogo_youtubemusic : ""
                }`}
              />
              {/* tidal */}
              <img
                src={tidalLogo}
                alt="tidal music"
                className={` ${styles.brandLogo} ${
                  inview_1 ? styles.brandLogo_tidal : ""
                }`}
              />
              {/* dezeer */}
              <img
                src={deezerLogo}
                alt="tidal music"
                className={` ${styles.brandLogo} ${
                  inview_1 ? styles.brandLogo_deezer : ""
                }`}
              />
            </motion.div>
          </div>
        </div>
        <div ref={ref_2} className={`${styles.section} ${styles.section_2}`}>
          <div className={`${styles.section_container}`}>
            <motion.div
              className={`${styles.left}`}
              animate={albumGirlImg_control}
            >
              <img src={albumgirl} alt="album girl" />
            </motion.div>
            <motion.div
              className={`${styles.text_box} ${styles.text_box_2} ${styles.right}`}
              animate={textbox2_control}
            >
              <p>There are 8 million artists on Spotify</p>
              <p>
                Yet less than 1% of them make enough money to survive on their
                music.
              </p>
              <p>
                So many great songs are lost within the libraries of streaming
                platforms, & discovering new tunes via the algorithmic playlists
                is a trial & error approach at best{" "}
              </p>
              <p>
                Compare this with a recommendation from your friend with similar
                music tastes, and you're much more likely to dig that
              </p>
            </motion.div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.section_3}`} ref={ref_3}>
          <div className={`${styles.section_container}`}>
            <motion.div
              className={`${styles.text_box} ${styles.text_box_3} ${styles.left}`}
              animate={textbox3_control}
            >
              <p>Keeping this in mind, we decided to introduce Clubs</p>
              <p>
                which lets users share and discover music within sub-communities
                of other users sharing similar tastes.
              </p>
              <p>
                Paste song links, import your existing playlist from Spotify &
                Apple Music, or simply search for music & share it with everyone
                in your Club.
              </p>
              <p>
                Not just that, link your existing Spotify and Apple Music
                accounts and listen to music within the Clubs itself
              </p>
              <p>
                We weren't kidding when we said this is the new Social Network
                for Music 😉
              </p>
            </motion.div>
            <motion.div
              className={`${styles.right}`}
              animate={productsample_control}
            >
              <img src={productSampleGif} alt="product demo" />
            </motion.div>
          </div>
        </div>
      </section>
      <div className={`${styles.section} ${styles.section_4}`} ref={ref_4}>
        <div className={`${styles.background}`}>
          <div className={`${styles.tile} ${styles.tile_1}`}></div>
          <div className={`${styles.tile} ${styles.tile_2}`}></div>
          <div className={`${styles.tile} ${styles.tile_3}`}></div>
          <div className={`${styles.tile} ${styles.tile_4}`}></div>
          <div className={`${styles.tile} ${styles.tile_5}`}></div>
          <div className={`${styles.tile} ${styles.tile_6}`}></div>
          <div className={`${styles.tile} ${styles.tile_7}`}></div>
          <div className={`${styles.tile} ${styles.tile_8}`}></div>
          <div className={`${styles.tile} ${styles.tile_9}`}></div>
          <div className={`${styles.tile} ${styles.tile_10}`}></div>
          <div className={`${styles.tile} ${styles.tile_11}`}></div>
          <div className={`${styles.tile} ${styles.tile_12}`}></div>
          <div className={`${styles.tile} ${styles.tile_13}`}></div>
          <div className={`${styles.tile} ${styles.tile_14}`}></div>
          <div className={`${styles.tile} ${styles.tile_15}`}></div>
          <div className={`${styles.tile} ${styles.tile_16}`}></div>
          <div className={`${styles.tile} ${styles.tile_17}`}></div>
          <div className={`${styles.tile} ${styles.tile_18}`}></div>
          <div className={`${styles.tile} ${styles.tile_19}`}></div>
          <div className={`${styles.tile} ${styles.tile_20}`}></div>
          <div className={`${styles.tile} ${styles.tile_21}`}></div>
          <div className={`${styles.tile} ${styles.tile_22}`}></div>
          <div className={`${styles.tile} ${styles.tile_23}`}></div>
          <div className={`${styles.tile} ${styles.tile_24}`}></div>
          <div className={`${styles.tile} ${styles.tile_25}`}></div>
          <div className={`${styles.tile} ${styles.tile_26}`}></div>
        </div>
        <motion.h1 animate={item_1_control}>
          Our goal is to bridge the gap between artists & fans
        </motion.h1>
        <ul>
          <motion.li animate={item_2_control}>
            ⚡️ Help creators distribute and monetise music on favourable terms
          </motion.li>
          <motion.li animate={item_3_control}>
            ⚡️ Enable fans to participate in their favourite artist's journey
          </motion.li>
          <motion.li animate={item_4_control}>
            ⚡️ Decentralise the economic model between artists and fans
          </motion.li>
        </ul>
      </div>
      <div className={`${styles.banner}`}>
        <p>
          If you're an artist or simply passionate about music, we'd love to
          connect!{" "}
        </p>
        <Button content="Get in touch" />
      </div>
    </>
  );
}

export default About;
