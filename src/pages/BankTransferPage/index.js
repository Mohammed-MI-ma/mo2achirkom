import React, { useEffect, useState } from "react";
import style from "./bankTransfer.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const BankTransferPage = () => {
  const language = useSelector((state) => state.application.language);

  const primaryRegularFont = `Primary-Regular-${language}`;
  const { packId } = useParams();
  const [category, setCategory] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_API_URI_DEV}api/application/category/${packId}`
        );
        setCategory(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [packId]);
  // Styles
  const sectionStyle = {
    dir: language === "ar" ? "rtl" : "ltr",
    textAlign: language === "ar" ? "right" : "left",
    fontFamily: primaryRegularFont,
    fontSize: "var(--font-large-size)",
    fontWeight: "bold",
    color: "white",
  };
  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <>
        <section
          className="bg-cover shadow-lg bg-gray-200 mb-5 flex items-center justify-center flex-col-reverse lg:flex-row w-full"
          style={{
            width: "99vw",
            margin: 0,
            color: "white",
            height: "150px",
            position: "relative",
          }}
        >
          HEllo
        </section>
      </>
    );
  };
  return (
    <>
      {" "}
      <Helmet>
        <title>{!loading ? category.data?.name : "Loading..."}</title>
        <meta name="description" content={category.data?.description} />
      </Helmet>
      <div className={style.wrapBreadCrumb} style={sectionStyle}>
        تعليمات التحويل البنكي
      </div>
      <div className="h-[100vh]">{renderContent()}</div>
    </>
  );
};

export default BankTransferPage;
