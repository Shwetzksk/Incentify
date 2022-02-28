import React from "react";
import styles from "./_purpose.module.scss";
import Background from "./background/background";
import { useInView, InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import productSample from "../../assets/gif/product-sample.gif";
import sticker from "../../assets/images/sticker-personWithHeadphone.png";
import TextBox from "../../components/textBox/textbox.component";
import phoneChatGif from "../../assets/gif/whatsapp-chat.gif";
import apple from "../../assets/brands/apple-sm-logo.png";
import spotify from "../../assets/brands/spotify-sm-logo.png";
import johnlegendGif from "../../assets/gif/jhonlegend.gif";
import drakeGif from "../../assets/gif/drake.gif";
import Card from "./card/card";

const productSpecs = [
  {
    id: "specs_1",
    title: "Discover Music ⚡️",
    text: "Explore playlists not curated by algorithms, but by other users who vibe with your tastes ",
    gif: johnlegendGif,
  },
  {
    id: "specs_2",
    title: "Share songs easily 🎵",
    text: "Switch over to sharing & talking about all things music within Clubs on Incentify",
    gif: "https://youthincmag.com/wp-content/uploads/2020/11/Twitter-1-1.jpg",
  },
  {
    id: "specs_3",
    title: "Build a community 🤙🏻",
    text: "Start a Club with your friends, or discover those with users sharing similar music tastes",
    gif: drakeGif,
  },
];
export default function Purpose() {
  const { ref: purposeRef_1, inView: purposeInview_1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: purposeRef_2, inView: purposeInview_2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: purposeRef_3, inView: purposeInview_3 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className={styles.section}>
      <Background />
      <div
        className={`${styles.individalPurpose_container} ${styles.purpose_1}`}
      >
        <div className={`${styles.textcont} ${styles.left}`}>
          <h2 className={styles.title}>
            <span className={`${styles.bold}`}>
              Sharing music is frustrating{" "}
            </span>
            😩
          </h2>

          <motion.div ref={purposeRef_1}>
            <TextBox top="28%" left="8.5%" inView={purposeInview_1} delay={0}>
              <span className={`${styles.emoji}`}>🔗</span>
              <p>
                {" "}
                Sending song links on DM
                <br /> gets lost in the clutter{" "}
              </p>
            </TextBox>
            <TextBox
              top="48.5%"
              left="14%"
              width="440px"
              inView={purposeInview_1}
              delay={1.5}
            >
              <div className={`${styles.musicApp_img} `}>
                <img
                  src={spotify}
                  alt="music platform"
                  className={styles.spotify}
                />
                <img
                  src={apple}
                  alt="music platform"
                  className={styles.apple}
                />
              </div>
              <p>
                With so many streaming apps,
                <br />
                sharing across platforms isn't possible{" "}
              </p>
            </TextBox>
            <TextBox top="69%" left="20%" inView={purposeInview_1} delay={2}>
              <span className={`${styles.emoji}`}>🎵</span>
              <p>
                You discover a banger & want to show <br />
                off your music taste on Instagram/Twitter, but
                <br /> does anyone even care?{" "}
              </p>
            </TextBox>
          </motion.div>
        </div>
        <div className={`${styles.phone} ${styles.right}`}>
          <img
            src={phoneChatGif}
            alt="share link chat"
            className={`${styles.chatGif}`}
          />
        </div>
      </div>
      <div
        className={`${styles.individalPurpose_container} ${styles.purpose_2}`}
      >
        <div className={`${styles.sticker} ${styles.left}`}>
          <img
            src={sticker}
            alt="sticker"
            className={`${styles.sticker_img}`}
          />
        </div>
        <div className={`${styles.textcont} ${styles.right}`}>
          <h2 className={styles.title}>
            <span className={styles.bold}>
              Music discovery has <br />
              become boring
            </span>
            😴
          </h2>
          <motion.div ref={purposeRef_2}>
            <TextBox top="26%" left="-1%" inView={purposeInview_2} delay={0}>
              <span className={`${styles.emoji}`}>🤷</span>
              <p>Streaming apps don't get your music taste</p>
            </TextBox>
            <TextBox top="47%" left="5%" inView={purposeInview_2} delay={2}>
              <span className={`${styles.emoji}`}>📈 </span>
              <p>
                60,000 songs drop on Spotify daily,
                <br /> but not even 1% break out of the noise
              </p>
            </TextBox>
            <TextBox top="68%" left="15%" inView={purposeInview_2} delay={3}>
              <span className={`${styles.emoji}`}>⚡ </span>
              <p>
                Recommendations from friends who <br />
                share your vibe, always hit different{" "}
              </p>
            </TextBox>
          </motion.div>
        </div>
      </div>
      <div
        className={`${styles.individalPurpose_container} ${styles.purpose_3}`}
        id="introducing-club"
      >
        <h2 className={`${styles.title} ${styles.center}`}>
          <span className={styles.bold}>Introducing Clubs from Incentify </span>
        </h2>
        <div className={`${styles.textcont} ${styles.center}`}>
          <div className={`${styles.phone} ${styles.center}`}>
            <img
              src={productSample}
              alt="product sample"
              className={`${styles.product_sample_gif}`}
            />
          </div>

          <motion.div ref={purposeRef_3}>
            <TextBox top="5%" left="8%" inView={purposeInview_3} delay={0}>
              <span className={`${styles.emoji}`}>⚡</span>
              <p>
                A playlist curated by users <br />
                with similar music taste & vibes
              </p>
            </TextBox>
            <TextBox
              top="30%"
              right="6%"
              width="440px"
              inView={purposeInview_3}
              delay={2}
            >
              <span className={`${styles.emoji}`}>🎵 </span>
              <p>
                Share songs with friends in your
                <br /> Club, no matter which music app <br />
                they use
              </p>
            </TextBox>
            <TextBox
              top="60%"
              left="11%"
              width="536px"
              inView={purposeInview_3}
              delay={3}
            >
              <span className={`${styles.emoji}`}>💎</span>
              <p>
                Discover hidden gems from <br />
                Clubs on Incentify
              </p>
            </TextBox>
            <TextBox
              top="103%"
              right="34%"
              width="536px"
              inView={purposeInview_3}
              delay={3}
            >
              <span className={`${styles.emoji} ${styles.text}`}>💎</span>
              <p className={`${styles.text}`}>
                Discover hidden gems from <br />
                Clubs on Incentify
              </p>
            </TextBox>
          </motion.div>
        </div>
      </div>
      <div className={`${styles.productSpecs}`}>
        {productSpecs.map((specs) => (
          <Card
            text={specs.text}
            img={specs.gif}
            key={specs.id}
            title={specs.title}
            id={specs.id}
          />
        ))}
      </div>
    </div>
  );
}
