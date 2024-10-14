import { css } from "@emotion/css";
import PropTypes from "prop-types";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai"; 
import { FaFacebook } from "react-icons/fa"; 

const commonStyles = {
  containerStyle: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-22xl);
    text-align: left;
    font-size: var(--label-l5-14-semi-bold-lh-130-size);
    color: var(--primary-neutral-500);
    font-family: var(--paragraph-p1-regular);
  `,
  inputContainerStyle: css`
    display: flex;
    flex-direction: column;
    gap: var(--gap-20xl);
    color: var(--color-brand-black);
  `,
  labelStyle: css`
    position: absolute;
  `,
  inputFieldStyle: css`
    position: absolute;
    top: 32px;
    left: 0px;
    border-radius: var(--br-5xs);
    border: 1px solid var(--color-brand-black);
    box-sizing: border-box;
    width: 446px;
    display: flex;
    padding: var(--padding-smi) var(--padding-5xl);
    text-align: center;
    font-size: var(--text-regular-normal-size);
  `,
  passwordFieldStyle: css`
    border: 1px solid var(--primary-neutral-500);
    color: var(--color-brand-black);
  `,
  eyeIconStyle: css`
    position: absolute;
    top: 44px;
    left: 398px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E")
      no-repeat center center;
    background-size: contain;
  `, 
  buttonStyle: css`
    width: 446px;
    border-radius: var(--br-5xs);
    background-color: var(--primary-01);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-smi) var(--padding-5xl);
    box-sizing: border-box;
    text-align: center;
    font-size: var(--paragraph-p1-18-medium-lh-160-size);
  `,
  checkboxStyle: css`
    width: 132px;
    position: relative;
    height: 20px;
  `,
  rememberMeStyle: css`
    position: absolute;
    top: 0%;
    left: 21.21%;
    letter-spacing: 0.01em;
    line-height: 140%;
  `,
  socialButtonStyle: css`
    width: 215px;
    border-radius: var(--br-5xs);
    background-color: var(--screen-color-white);
    border: 1px solid var(--primary-neutral-100);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-smi) var(--padding-5xl);
    gap: var(--gap-5xs);
  `,
  footerText: css`
    color: var(--color-seagreen);
  `,
};

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[commonStyles.containerStyle, className].join(" ")}>
      <div className={commonStyles.inputContainerStyle}>
        <div>
          <div>
            <div
              className={css`
                width: 446px;
                position: relative;
                height: 80px;
              `}
            >
              <div className={commonStyles.labelStyle}>Your Email</div>
              <div className={commonStyles.inputFieldStyle}>
                <b>Albertflorest@gmail.com |</b>
              </div>
            </div>
            <div
              className={css`
                width: 446px;
                position: relative;
                height: 80px;
              `}
            >
              <div className={commonStyles.labelStyle}>Password</div>
              <div
                className={[
                  commonStyles.inputFieldStyle,
                  commonStyles.passwordFieldStyle,
                ].join(" ")}
              >
                <b>*********</b>
              </div>
              <div className={commonStyles.eyeIconStyle}></div> {/* Eye Icon as background image */}
            </div>
          </div>
          <div
            className={css`
              width: 446px;
              display: flex;
              justify-content: space-between;
            `}
          >
            <div className={commonStyles.checkboxStyle}>
              <div className={commonStyles.rememberMeStyle}>Remember Me</div>
              <div
                className={css`
                  position: absolute;
                  top: 2px;
                  left: 0px;
                  border-radius: var(--br-9xs);
                  background-color: var(--primary-01);
                  width: 16px;
                  height: 16px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                &#10004; 
              </div>
            </div>
            <div
              className={css`
                color: var(--primary-neutral-500);
                letter-spacing: 0.01em;
                line-height: 140%;
              `}
            >
              Forgot Password?
            </div>
          </div>
        </div>
        <div className={commonStyles.buttonStyle}>Login</div>
      </div>
      <div
        className={css`
          display: flex;
          gap: var(--gap-mini);
        `}
      >
        <div className={commonStyles.socialButtonStyle}>
          <AiFillGoogleCircle size={24} /> 
          <b>Continue with Google</b>
        </div>
        <div className={commonStyles.socialButtonStyle}>
          <FaFacebook size={24} /> 
          <b>Continue with Facebook</b>
        </div>
      </div>
      <div>
        <span>Don’t have any account?</span>
        <b className={commonStyles.footerText}> Register</b>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;