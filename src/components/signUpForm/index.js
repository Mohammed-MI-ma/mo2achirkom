//__REACT
import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

//__ICONS
import { FaRegCircleUser } from "react-icons/fa6";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { FaCheck } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

//__ANTD
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Slider,
} from "antd";

//__STYLING
import style from "./loginForm.module.css";
import AuthCard from "../AuthCard";
import AuthCardTitle from "../AuthCardTitle";
import CancelButton from "../CancelButton";
import { RECAPTCHA } from "../../config.dev";
import axios from "axios";

const SignUpForm = ({ language, primaryRegularFont, t }) => {
  // The following line initializes a form instance using the `useForm` hook from the `Form` library.
  const [form] = Form.useForm();

  //__ TODO:
  //__________ State for the username value

  const [username, setUsername] = useState("");
  // Function to handle username change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  //__ TODO:
  // __________State for the password value

  const [password, setPassword] = useState("");
  // Function to handle username change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //__ TODO:
  // __________State for the passwordValidation value
  const [passwordValidation, setPasswordValidation] = useState("");
  const handlePasswordValidationChange = (e) => {
    setPasswordValidation(e.target.value);
  };

  // State for the isRecaptchaValid
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  // State for the score value
  const [inputValue, setInputValue] = useState(9.32);
  const onChange = (newValue) => {
    setInputValue(newValue);
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
  return (
    <AuthCard>
      <Form form={form} layout="vertical" autoComplete="off">
        <AuthCardTitle
          language={language}
          primaryRegularFont={primaryRegularFont}
        >
          {t("Veuillez saisir votre nom d'utilisateur")}
        </AuthCardTitle>
        <section id="signup-form-section" aria-label="Sign Form Section">
          {/**score  */}
          <Form.Item
            label={
              <label
                className="font-bold"
                style={{ fontFamily: primaryRegularFont }}
              >
                {t("Le score que j'ai obtenu de mon compte de notation.")}
              </label>
            }
          >
            <Row>
              <Col span={12}>
                <Slider
                  min={6}
                  max={20}
                  onChange={onChange}
                  value={typeof inputValue === "number" ? inputValue : 0}
                  step={0.01}
                />
              </Col>
              <Col span={12}>
                <InputNumber
                  min={6}
                  max={20}
                  style={{
                    width: "100%",
                  }}
                  step={0.001}
                  value={inputValue}
                  onChange={onChange}
                />
              </Col>
            </Row>
          </Form.Item>
          <Divider />
          {/**username */}
          <Form.Item
            value={username}
            onChange={handleUsernameChange}
            label={
              <label
                className="font-bold"
                style={{ fontFamily: primaryRegularFont }}
              >
                {t("username")}
              </label>
            }
            tooltip={t("fieldIsRequired")}
          >
            <Input
              size="large"
              style={{ fontFamily: primaryRegularFont }}
              placeholder={t("usernameOrEmail")}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              prefix={<FaRegCircleUser color="var(--color-accent)" />}
            />
          </Form.Item>
          {/**date of birth */}
          <Form.Item
            label={
              <label
                className="font-bold"
                style={{ fontFamily: primaryRegularFont }}
              >
                {t("Date of Birth")}
              </label>
            }
            tooltip={t("fieldIsRequired")}
          >
            <DatePicker size={"large"} />
          </Form.Item>

          <Form.Item
            //"genre"
            required
            label={
              <label
                className="font-bold"
                style={{ fontFamily: primaryRegularFont }}
              >
                Genre
              </label>
            }
            tooltip={t("fieldIsRequired")}
          >
            <Input.Password
              prefix={<RiLockPasswordLine color="var(--color-accent)" />}
              size="large"
              placeholder={t("password")}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          {/**password */}
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
          >
            <Input.Password
              value={password}
              onChange={handlePasswordChange}
              prefix={<RiLockPasswordLine color="var(--color-accent)" />}
              size="large"
              placeholder={t("password")}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          {/**password validation */}
          <Form.Item
            required
            label={
              <label
                className="font-bold"
                style={{ fontFamily: primaryRegularFont }}
              >
                {t("password")}
              </label>
            }
            tooltip={t("fieldIsRequired")}
          >
            <Input.Password
              value={passwordValidation}
              onChange={handlePasswordValidationChange}
              prefix={<RiLockPasswordLine color="var(--color-accent)" />}
              size="large"
              placeholder={t("password")}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </section>
        <ReCAPTCHA
          sitekey={RECAPTCHA.RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        />
        <footer>
          <div className="flex gap-5 justify-between mt-10">
            <Form.Item>
              <Button
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
export default SignUpForm;
