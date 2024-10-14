import { css } from "@emotion/css";
import PropTypes from "prop-types";
import React from "react";

const commonStyles = {
  productContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    text-align: left;
    font-size: var(--label-l5-14-semi-bold-lh-130-size);
    color: var(--color-brand-black);
    font-family: var(--paragraph-p1-regular);
  `,
  imageContainer: css`
    position: relative;
    height: 252px;
    color: var(--screen-color-white);
    align-self: stretch;
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--br-xs);
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  infoContainer: css`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: var(--gap-5xl);
    font-size: var(--heading-mobile-h4-size);
  `,
  title: css`
    align-self: stretch;
    line-height: 140%;
  `,
  featureBadge: css`
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-200);
    display: flex;
    align-items: center;
    padding: var(--padding-5xs) var(--padding-xl);
  `,

  statsContainer: css`
    display: flex;
    gap: var(--gap-base);
  `,
  first: css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`,
  second: css`display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-5xs);`,
  third: css`
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`,

  fourth: css`position: relative;
                    line-height: 150%;
                    font-weight: 600;`,
  fifth: css`position: relative;
                  font-size: var(--label-l5-14-semi-bold-lh-130-size);
                  line-height: 150%;
                  color: var(--color-neutral-neutral);`,
  borderLine: css`
                  width: 0;
                position: relative;
                border-right: solid var(--color-brand-black);
                box-sizing: border-box;
                height: 50px;`,
  statItem: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap-9xs);
  `,
  statValue: css`
    display: flex;
    align-items: flex-start;
    gap: var(--gap-5xs);
    line-height: 150%;
    font-weight: 600;
  `,
  bottomContainer: css`
    align-self: stretch;
    border-radius: var(--br-xs);
    background-color: var(--primary-01);
    border: 1px solid var(--color-brand-black);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs) var(--padding-xl);
    gap: var(--gap-5xs);
    height: 118px;
  `,
  returnInfo: css`
    align-self: stretch;
    display: flex;
    justify-content: space-between;
  `,
  investmentInfo: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  `,
};

const Product = ({ className = "", placeholderImage, frame16 }) => {
  return (
    <div className={[commonStyles.productContainer, className].join(" ")}>
      <div className={commonStyles.imageContainer}>
        <img className={commonStyles.image} alt="" src={placeholderImage} />
        <div
          className={css`
            position: absolute;
            top: 16px;
            left: calc(50% - 191.7px);
            width: 383.4px;
            display: flex;
            justify-content: space-between;
          `}
        >
          <div className={commonStyles.featureBadge}>
            <div
              className={css`
                line-height: 160%;
                font-weight: 600;
              `}
            >
              Featured
            </div>
          </div>
          <img
            className={css`
              width: 36px;
              height: 36px;
            `}
            alt=""
            src={frame16}
          />
        </div>
      </div>
      <div className={commonStyles.infoContainer}>
        <div className={css`align-self: stretch;`}>
          <div className={commonStyles.title}>
            <b>1 Bed in Reehan, Downtown Dubai</b>
          </div>
          <div className={commonStyles.statsContainer}>
            {[
              {
                imgSrc: "/bed-fill0-wght400-grad0-opsz24-1.svg",
                value: 3,
                label: "Bedrooms",
              },
              {
                imgSrc: "/bathtub-fill0-wght400-grad0-opsz24-1.svg",
                value: 4,
                label: "Bathrooms",
              },
              {
                imgSrc: "/pageless-fill0-wght400-grad0-opsz24-1.svg",
                value: "360m²",
                label: "Living Area",
              },
              {
                imgSrc: "/frame.svg",
                value: "Dubai",
                label: "Location",
              },
            ].map((stat, index) => (
              <div key={index} className={commonStyles.statItem}>
                <div className={commonStyles.statValue}>
                  <img
                    className={css`
                      width: 24px;
                      height: 24px;
                      flex-shrink: 0;
                    `}
                    alt=""
                    src={stat.imgSrc}
                  />
                  <div>{stat.value}</div>
                </div>
                <div
                  className={css`
                    font-size: var(--label-l5-14-semi-bold-lh-130-size);
                    line-height: 150%;
                    color: var(--color-neutral-neutral);
                  `}
                >
                  {stat.label}
                </div>
              </div>

            ))}
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            border-radius: var(--br-base);
            background-color: var(--secondary-light-gray);
            display: flex;
            padding: var(--padding-xs);
            font-size: var(--label-l5-14-semi-bold-lh-130-size);
            color: var(--color-neutral-neutral);
            justify-content: space-between;
          `}
        >
          {[
            { title: "Min. Investment", value: "$700,000" },
            { title: "Property Value", value: "$700,000" },
          ].map((info, index) => (
            <div key={index} className={commonStyles.investmentInfo}>
              <div className={css`line-height: 150%;`}>{info.title}</div>
              <div
                className={css`
                  font-size: var(--text-large-semi-bold-size);
                  line-height: 150%;
                  font-weight: 600;
                  color: var(--color-brand-black);
                `}
              >
                {info.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={commonStyles.bottomContainer}>
        {[
          { title: "5 Years Total Return", value: "47.21 %" },
          { title: "Yearly Investment Return", value: "47.21 %" },
          { title: "Projected net yield", value: "47.21 %" },
        ].map((returnInfo, index) => (
          <div key={index} className={commonStyles.returnInfo}>
            <div>{returnInfo.title}</div>
            <b className={css`font-size: var(--paragraph-p1-18-medium-lh-160-size); line-height: 140%;`}>
              {returnInfo.value}
            </b>
          </div>
        ))}
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string,
  frame16: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propLeft1: PropTypes.any,
  propWidth1: PropTypes.any,
  propTop1: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default Product;
