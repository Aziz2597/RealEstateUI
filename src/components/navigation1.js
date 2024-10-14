import { css } from "@emotion/css";
import PropTypes from "prop-types";
import React from "react";

const Navigation1 = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          position: absolute;
          bottom: 0px;
          left: calc(50% - 720px);
          width: 1440px;
          height: 419px;
          text-align: right;
          font-size: 20px;
          color: var(--lgrey-01);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          position: absolute;
          background-color: var(--color-gray-100);
          width: 1440px;
          height: 419px;
        `}
      />
      <div
        className={css`
          position: absolute;
          bottom: 32px;
          left: calc(50% - 138px);
          letter-spacing: -0.02em;
          line-height: 28px;
        `}
      >
        Copyright © Fraction Hive 2024
      </div>
      <div
        className={css`
          position: absolute;
          top: 100px;
          left: 100px;
          display: flex;
          gap: var(--gap-211xl);
          text-align: left;
        `}
      >
        <div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-5xs);
            `}
          >
            <img alt="" src="/frame-1626491.svg" />
            <div
              className={css`
                position: relative;
                letter-spacing: -0.2px;
                line-height: 28px;
                font-weight: 800;
              `}
            >
              Fraction Hive
            </div>
          </div>
          <div>
            <div
              className={css`
                position: relative;
                line-height: 180%;
              `}
            >
              <p
                className={css`
                  margin: 0;
                `}
              >
                Fraction Hive@example.com
              </p>
              <p
                className={css`
                  margin: 0;
                `}
              >
                (+1) 2345 6789
              </p>
            </div>
            <div
              className={css`
                position: relative;
                line-height: 180%;
              `}
            >
              <p
                className={css`
                  margin: 0;
                `}
              >
                4140 Parker Rd. Allentown,
              </p>
              <p
                className={css`
                  margin: 0;
                `}
              >
                New Mexico 31134
              </p>
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            gap: var(--gap-61xl);
            color: var(--screen-color-white);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: var(--gap-5xl);
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 130%;
                font-weight: 600;
              `}
            >
              Pages
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                gap: var(--gap-xs);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Listings
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                About us
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Blog
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: var(--gap-5xl);
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 130%;
                font-weight: 600;
              `}
            >
              Support
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                gap: var(--gap-xs);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Properties
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                FAQ
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Contact Us
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: var(--gap-5xl);
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 130%;
                font-weight: 600;
              `}
            >
              Legal
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                gap: var(--gap-xs);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Privacy Policy
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >{`Terms & Conditions`}</div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Licensing
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Instructions
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: var(--gap-5xl);
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 130%;
                font-weight: 600;
              `}
            >
              Platform
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                gap: var(--gap-xs);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Official Website
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                Play Store
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 180%;
                  font-weight: 500;
                `}
              >
                App Store
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
