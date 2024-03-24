import React from "react";

const AuthCardTitle = ({ children, language, primaryRegularFont }) => {
  return (
    <h1
      className="mb-10"
      style={{
        fontFamily: primaryRegularFont,
        borderRight: language === "ar" && "0.25rem solid var(--color-red)",
        borderLeft: language === "fr" && "0.25rem solid var(--color-red)",
        fontSize: "var(--font-medium-size)",
      }}
    >
      {children}
    </h1>
  );
};

export default AuthCardTitle;
