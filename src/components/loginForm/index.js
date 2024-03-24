//__REACT
import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

//__ICONS
import { FaRegCircleUser } from "react-icons/fa6";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { MdCancel } from "react-icons/md";
import { FaCheck, FaFacebookF, FaGoogle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

//__ANTD
import { Button, Divider, Form, Input, Space, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

import axios from "axios";

//__STYLING
import style from "./loginForm.module.css";
import { RECAPTCHA } from "../../config.dev";
import AuthCard from "../AuthCard";
import AuthCardTitle from "../AuthCardTitle";
import CancelButton from "../CancelButton";

const LoginForm = ({ language, primaryRegularFont, t }) => {
  // The following line initializes a form instance using the `useForm` hook from the `Form` library.
  // This hook is commonly used in React applications with libraries like Ant Design.
  const [form] = Form.useForm();

  // useNavigate hook returns a function to navigate between routes in the application.
  const navigate = useNavigate();

  // State for the username value
  const [username, setUsername] = useState("");
  // State for the password value
  const [password, setPassword] = useState("");
  // State for the isRecaptchaValid
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  // Function to handle username change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRecaptchaChange = async (value) => {
    try {
      // Send reCAPTCHA token to backend for verification
      const response = await axios.post("/verify-recaptcha", {
        recaptchaToken: value,
      });
      if (response.data.success) {
        setIsRecaptchaVerified(true);
        console.log("reCAPTCHA verification succeeded");
      } else {
        setIsRecaptchaVerified(false);
        console.log("reCAPTCHA verification failed");
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
    }
  };

  const handleClick = () => {
    // Navigate to the login page when the button is clicked
    navigate(`/${language}/recalcul/account/register`);
  };

  return (
    <AuthCard>
      <Form form={form} layout="vertical" autoComplete="off">
        <AuthCardTitle
          language={language}
          primaryRegularFont={primaryRegularFont}
        >
          {t("familyAccountAccessOnYourPlatform")}
        </AuthCardTitle>
        <section id="login-form-section" aria-label="Login Form Section">
          {/*USERNAME*/}
          <Form.Item
            label={
              <label
                className="font-bold"
                style={{ fontFamily: primaryRegularFont }}
              >
                {t("username")}
              </label>
            }
            name="username"
            tooltip={t("fieldIsRequired")}
          >
            <Input
              size="large"
              style={{ fontFamily: primaryRegularFont }}
              placeholder={t("usernameOrEmail")}
              name="username"
              prefix={<FaRegCircleUser color="var(--color-accent)" />}
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Item>

          {/*PASSWORD*/}
          <Form.Item
            label={
              <label
                className="font-bold"
                style={{ fontFamily: primaryRegularFont }}
              >
                {t("password")}
              </label>
            }
            tooltip={t("fieldIsRequired")}
            name="password"
          >
            <Input.Password
              prefix={<RiLockPasswordLine color="var(--color-accent)" />}
              size="large"
              placeholder={t("password")}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Item>
        </section>

        <ReCAPTCHA
          sitekey={RECAPTCHA.RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        />

        <footer id="login-footer" role="contentinfo" aria-label="Login Footer">
          <p className="text-xs">
            {t("noAccountYet")}
            <Button
              onClick={handleClick}
              type="link"
              primary
              className="text-xs"
            >
              {t("createAccount")}
            </Button>
          </p>
          <Button type="link" primary className="text-xs">
            {t("getPassword")}
          </Button>
          <Divider>
            <Space>
              <Tooltip title="Google">
                <Button
                  shape="circle"
                  className="flex items-center justify-center"
                >
                  <FaGoogle />
                </Button>
              </Tooltip>
              <Tooltip title="Facebook">
                <Button
                  shape="circle"
                  className="flex items-center justify-center"
                >
                  <FaFacebookF />
                </Button>
              </Tooltip>
            </Space>
          </Divider>
          <div className="flex gap-5 justify-between mt-10">
            <Form.Item>
              <Button
                disabled={!isRecaptchaVerified || !username || !password}
                htmlType="submit"
                icon={<FaCheck />}
                type="text"
                className={`flex justify-center items-center uppercase text-white text-sm rounded-md shadow-none outline-none ${style.confirm}`}
              >
                {t("login")}
              </Button>
            </Form.Item>
            <Form.Item>
              <CancelButton />
            </Form.Item>
          </div>
        </footer>
      </Form>
    </AuthCard>
  );
};
export default LoginForm;
