import { css } from "@emotion/css";
import PropTypes from "prop-types";
import React from "react";

const FilterSection = ({ title, options }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-xs);
        text-align: left;
        font-size: var(--text-regular-normal-size);
        color: var(--black-01);
        font-family: var(--paragraph-p1-regular);
      `}
    >
      <div
        className={css`
          width: 230px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <b
          className={css`
            letter-spacing: -0.2px;
            line-height: 140%;
          `}
        >
          {title}
        </b>
        <span
          className={css`
            font-size: 18px; /* Adjust size if necessary */
          `}
        >
          &#8595; 
        </span>
      </div>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-xs);
          color: var(--grey-011);
        `}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: var(--gap-5xs);
            `}
          >
            <span
              className={css`
                font-size: 18px; /* Adjust size if necessary */
              `}
            >
              &#9744; 
            </span>
            <div
              className={css`
                line-height: 160%;
              `}
            >
              {option}
            </div>
          </div>
        ))}

        <div
          className={css`
            line-height: 160%;
            font-weight: 500;
            color: var(--dark-green-03);
          `}
        >
          Show All
        </div>
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSection;
