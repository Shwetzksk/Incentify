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
import startClubImg from "../../assets/images/start-a-club.png";
import inviteImg from "../../assets/images/invite.png";
import chatImg from "../../assets/images/chat.png";
import addSongsImg from "../../assets/images/add-songs.png";

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

          <motion.div
            ref={purposeRef_1}
            className={`${styles.textbox_container}`}
          >
            <TextBox
              inView={purposeInview_1}
              delay={0}
              className={`${styles.textbox} ${styles.textbox_1}`}
            >
              <span className={`${styles.emoji}`}>🔗</span>
              <p>
                {" "}
                Sending song links on DM
                <br /> gets lost in the clutter{" "}
              </p>
            </TextBox>
            <TextBox
              inView={purposeInview_1}
              delay={0.25}
              className={`${styles.textbox} ${styles.textbox_2}`}
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
                With so many streaming apps, sharing across platforms isn't
                possible{" "}
              </p>
            </TextBox>
            <TextBox
              inView={purposeInview_1}
              delay={0.5}
              className={`${styles.textbox} ${styles.textbox_3}`}
            >
              <span className={`${styles.emoji}`}>🎵</span>
              <p>
                You discover a banger & want to show off your music taste on
                Instagram / Twitter, but does anyone even care?{" "}
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
              Music discovery has become boring
            </span>
            😴
          </h2>
          <motion.div
            ref={purposeRef_2}
            className={`${styles.textbox_container}`}
          >
            <TextBox
              inView={purposeInview_2}
              delay={0}
              className={`${styles.textbox} ${styles.textbox_1}`}
            >
              <span className={`${styles.emoji}`}>🤷</span>
              <p>Streaming apps don't get your music taste</p>
            </TextBox>
            <TextBox
              inView={purposeInview_2}
              delay={0.25}
              className={`${styles.textbox} ${styles.textbox_2}`}
            >
              <span className={`${styles.emoji}`}>📈 </span>
              <p>
                60,000 songs drop on Spotify daily, but not even 1% break out of
                the noise
              </p>
            </TextBox>
            <TextBox
              inView={purposeInview_2}
              delay={0.5}
              className={`${styles.textbox} ${styles.textbox_3}`}
            >
              <span className={`${styles.emoji}`}>⚡ </span>
              <p>
                Recommendations from friends who share your vibe, always hit
                different{" "}
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
              src={startClubImg}
              alt="product sample"
              className={`${styles.product_sample_gif} ${styles.product_sample} ${styles.product_sample_1}`}
            />
            <img
              src={addSongsImg}
              alt="product sample"
              className={`${styles.product_sample_gif} ${styles.product_sample} ${styles.product_sample_2}`}
            />
            <img
              src={inviteImg}
              alt="product sample"
              className={`${styles.product_sample_gif} ${styles.product_sample} ${styles.product_sample_3}`}
            />
            <img
              src={chatImg}
              alt="product sample"
              className={`${styles.product_sample_gif} ${styles.product_sample} ${styles.product_sample_4}`}
            />
          </div>

          <motion.div
            ref={purposeRef_3}
            className={`${styles.textbox_container}`}
          >
            <TextBox
              inView={purposeInview_3}
              delay={0}
              className={`${styles.textbox} ${styles.textbox_1}`}
            >
              <span className={`${styles.emoji}`}>⚡</span>
              <p>
                A playlist curated by users with similar music taste & vibes
              </p>
            </TextBox>
            <TextBox
              inView={purposeInview_3}
              delay={0.25}
              className={`${styles.textbox} ${styles.textbox_2}`}
            >
              <span className={`${styles.emoji}`}>🎵 </span>
              <p>
                Share songs with friends in your Club, no matter which music app
                they use
              </p>
            </TextBox>
            <TextBox
              className={`${styles.textbox} ${styles.textbox_3}`}
              inView={purposeInview_3}
              delay={0.5}
            >
              <span className={`${styles.emoji}`}>💎</span>
              <p>Discover hidden gems from Clubs on Incentify</p>
            </TextBox>
            <TextBox
              className={`${styles.textbox} ${styles.textbox_4}`}
              inView={purposeInview_3}
              delay={0.75}
            >
              <div className={`${styles.texts}`}>
                <div className={`${styles.text} ${styles.text_1}`}>
                  <span className={`${styles.emoji} `}>🔥</span>
                  <p>Think you've got great taste? Start a club now</p>
                </div>
                <div className={`${styles.text} ${styles.text_2}`}>
                  <span className={`${styles.emoji} `}>🎵</span>
                  <p>Show-off your curation skills & Add music</p>
                </div>
                <div className={`${styles.text} ${styles.text_3}`}>
                  <span className={`${styles.emoji} `}>🤝</span>
                  <p>Invite friends to join as collaborators</p>
                </div>
                <div className={`${styles.text} ${styles.text_4}`}>
                  <span className={`${styles.emoji} `}>🗣️</span>
                  <p>Chat away! Banter knows no limit when it comes to music</p>
                </div>
              </div>
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
