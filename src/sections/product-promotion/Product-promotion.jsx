import React from "react";
import styles from "./_product-promotion.module.scss";
import Button from "../../components/button/Button";
import Post from "./post-card/post-card";
import substackIcon from "../../assets/icons/substack.png";
import twitterPost from "../../assets/images/twitter-post.png";
import instaPost from "../../assets/images/insta-post.png";
import substackPost from "../../assets/images/substack-post.png";
import { TwitterLogo, InstagramLogo, FacebookLogo } from "phosphor-react";

const posts = [
  {
    id: "twitter_post",
    icon: <TwitterLogo size={36} weight="fill" />,
    post: twitterPost,
  },
  {
    id: "instagram_post",
    icon: <InstagramLogo size={36} />,
    post: instaPost,
  },
  {
    id: "facebook_post",
    iconImg: substackIcon,
    post: substackPost,
  },
];

function ProductPromotion() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.signup}`}>
        <h1>Sign Up for Incentify now</h1>
        <div className={`${styles.btnContainer}`}>
          <Button className={`${styles.btn}`} content="Sign up" />
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPromotion;
