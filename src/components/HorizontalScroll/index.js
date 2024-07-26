import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./horizontalScroll.module.css";
import { Avatar, Button } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { CiPlay1 } from "react-icons/ci";
import HoverableCard from "../HoverableCard";

export const partners = [
  {
    id: 1,
    title: "COIFFURE HOMME",
    image: null,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 2,
    title: "COIFFURE FEMME",
    image: null,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 3,
    title: "HAMAM",
    image: null,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 4,
    title: "INSTITUT DE BEAUTÉ",
    image: null,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
];

const HorizontalScroll = () => {
  const { data } = {
    data: [
      { title: "qsdqs" },
      { title: "qsdqs" },
      { title: "qsdqs" },
      { title: "qsdqs" },
      { title: "qsdqs" },
      { title: "qsdqs" },
    ],
  };

  const scrollRef = useRef(null);

  const { t } = useTranslation();
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className={styles.horizontalScrollContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.scrollableContent} ref={scrollRef}>
        {data.map((partner) => (
          <motion.div
            cl
            key={partner.id}
            className={`${styles.item} shadow-md`}
            style={{
              minWidth: "400px",
              minHeight: "200px",
              background: "var(--color-theme)",
              position: "relative",
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: partner.id * 0.1 }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GAgAZ71B9kw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen={false}
            ></iframe>
          </motion.div>
        ))}
      </div>{" "}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <motion.button
          className={styles.scrollButton}
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❮
        </motion.button>
        <motion.button
          className={styles.scrollButton}
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❯
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HorizontalScroll;
