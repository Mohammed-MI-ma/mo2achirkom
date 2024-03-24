import React from "react";
//__REACT_i18N
import { useTranslation } from "react-i18next";

//__REACT_HELMET
import { Helmet } from "react-helmet";

import { bgContent2Left } from "../../images";
import SignUpForm from "../../components/signUpForm";
const SignUpPage = ({ language }) => {
  // This line defines a variable `primaryRegularFont` which appears to be a font name or identifier.
  // It seems to be composed of the string "Primary-Regular-" followed by a dynamic value 'language'.
  const primaryRegularFont = `Primary-Regular-${language}`;

  // Retrieve the translation function from the useTranslation hook
  const { t } = useTranslation();

  const paragraphStyle = {
    dir: language === "ar" ? "rtl" : "ltr",
    fontFamily: primaryRegularFont,
    fontSize: "var(--font-small-size)",
    color: "var(--color-text)",
    marginBottom: "3.125rem", // 50px ÷ 16px = 3.125rem
  };
  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t("Créer un compte")}</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Create an account to access our platform and enjoy personalized services. Sign up now for a seamless experience."
        />
        <meta name="keywords" content="signup, registration, user account" />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("signup")} />
        <meta
          property="og:description"
          content="Create an account to access our platform and enjoy personalized services."
        />
        <meta property="og:url" content="URL of the signup page" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        {/* Add other meta tags as needed */}
      </Helmet>

      <section
        className="flex flex-col px-10 pt-10 "
        dir={language === "ar" ? "rtl" : "ltr"}
        style={{
          backgroundImage: `url(${bgContent2Left}),url(${bgContent2Left})`,
          backgroundRepeat: "no-repeat,no-repeat",
          backgroundPosition:
            "-104px -26px,calc(100% + 118px) calc(100% + 134px)",
          backgroundSize: "370px 511px,370px 524px",
        }}
      >
        <h1
          className="mb-5 px-1 font-bold"
          style={{
            fontFamily: primaryRegularFont,
            borderRight: language === "ar" && "0.25rem solid var(--color-red)",
            borderLeft: language === "fr" && "0.25rem solid var(--color-red)",
            fontSize: "var(--font-extra-large-size)",
          }}
        >
          {t("createAccount")}
        </h1>

        <p style={paragraphStyle}>{t("DescSignUpPage")} </p>
        <SignUpForm
          language={language}
          primaryRegularFont={primaryRegularFont}
          t={t}
        />
      </section>
    </>
  );
};

export default SignUpPage;
