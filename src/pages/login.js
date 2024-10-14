import React from "react";
import { css } from "@emotion/css";
import FrameComponent3 from "../components/frame-component3";

const Login = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--screen-color-white);
        height: 1024px;
        overflow: hidden;
        text-align: left;
        font-size: 30px;
        color: var(--color-brand-black);
        font-family: var(--paragraph-p1-regular);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: calc(50% - 336px);
          left: 827px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 48px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--gap-base);
          `}
        >
          <div
            className={css`
              position: relative;
              letter-spacing: 0.01em;
              line-height: 46px;
              font-weight: 800;
            `}
          >
            Welcome Back to Fraction Hive!
          </div>
          <b
            className={css`
              position: relative;
              font-size: var(--label-l5-14-semi-bold-lh-130-size);
              line-height: 140%;
              color: var(--primary-neutral-500);
            `}
          >
            Sign in your account
          </b>
        </div>
        <FrameComponent3 />
      </div>
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 714px;
          height: 1024px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 714px;
            height: 1024px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: var(--color-darkslategray);
              width: 714px;
              height: 1024px;
            `}
          />
        </div>
        <div
          className={css`
    position: relative;
    bottom: 0px;
    right: 0px; /* This doesn't impact image placement; use left for horizontal control */
    width: 694px;
    height: 911px;
  `}
        >
          <img
            className={css`
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0px 32px 0px 0px;
      width: 604px; /* Background image width */
      height: 911px;
      object-fit: cover;
      z-index: 1; 
    `}
            alt=""
            src="/rectangle-9636@2x.png"
          />

          <img
            className={css`
      position: absolute;
      top: 150px; /* Adjust to center vertically or as needed */
      left: 300px; /* Adjust to position horizontally */
      width: 404px; /* Make smaller in width compared to background */
      height: 560px; /* Proportionally smaller height */
      object-fit: cover;
      z-index: 2; 
    `}
            alt=""
            src="/image_front.jpg"
          />

        </div>
      </div>
    </div>
  );
};

export default Login;
