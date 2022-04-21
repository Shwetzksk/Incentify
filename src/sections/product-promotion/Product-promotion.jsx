import React from "react";
import styles from "./_product-promotion.module.scss";
import Button from "../../components/button/Button";
import Post from "./post-card/post-card";
import substackIcon from "../../assets/icons/substack.png";
import twitterPost from "../../assets/images/twitter-post.png";
import instaPost from "../../assets/images/insta-post.png";
import substackPost from "../../assets/images/substack-post.png";
import { TwitterLogo, InstagramLogo } from "phosphor-react";
import EmailSignUp from "../../components/email-signup/email-signup";

const posts = [
  {
    id: "twitter_post",
    icon: <TwitterLogo size={36} weight="fill" />,
    post: twitterPost,
    link: "https://twitter.com/clubincentify/status/1486684967388135425?s=20&t=QsusnC2IWr_gAimJkxrTDQ;",
  },
  {
    id: "instagram_post",
    icon: <InstagramLogo size={36} />,
    post: instaPost,
    link: "https://www.instagram.com/p/CZt2gG8rQpN/?utm_source=ig_web_copy_link;",
  },
  {
    id: "substack_post",
    iconImg: substackIcon,
    post: substackPost,
    link: "https://incentify.substack.com/p/joe-rogan-neil-young-and-the-vaccine?s=r",
  },
];

function ProductPromotion() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.signup}`}>
        <h1>Sign Up for Incentify now</h1>
        <div className={`${styles.btnContainer}`}>
          <EmailSignUp className={`${styles.btn}`} content="Sign up" />
        </div>
      </div>
      <div className={`${styles.socialMedia_posts}`}>
        <h1>Follow Us on Social Media ⚡</h1>
        <div className={`${styles.posts}`}>
          {posts.map((post) => (
            <Post
              key={post.id}
              icon={post.icon}
              iconImg={post.iconImg}
              url={post.post}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPromotion;
