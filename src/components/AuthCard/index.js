import React from "react";
import { ConfigProvider } from "antd";
import PropTypes from "prop-types";

const AuthCard = ({ children }) => {
  // Define theme configuration
  const themeConfig = {
    token: {
      primaryColor: "var(--color-theme)", // Primary color for theme
      colorPrimaryHover: "var(--color-theme)", // Hover color for primary elements
      colorPrimaryActive: "var(--color-theme)", // Active color for primary elements
    },
    components: {
      Slider: {
        handleColor: "var(--color-theme)",
        handleActiveColor: "var(--color-theme)",
        dotActiveBorderColor: "var(--color-theme)",
        trackBg: "var(--color-theme)",
        trackHoverBg: "var(--color-theme)",
      },
    },
  };

  return (
    // Wrap the component with ConfigProvider from Ant Design for theme configuration
    <ConfigProvider theme={themeConfig}>
      <div className="text-center">
        <section
          className="p-5 mx-auto bg-white rounded-lg shadow-md"
          style={{
            maxWidth: "500px", // Set maximum width for the card
            marginBottom: "6.25rem", // Add margin bottom equivalent to 100px (6.25rem) for spacing
          }}
        >
          {children} {/* Render children components */}
        </section>
      </div>
    </ConfigProvider>
  );
};

// PropTypes validation for children prop
AuthCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthCard; // Export the AuthCard component
