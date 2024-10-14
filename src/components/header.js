import { css } from "@emotion/css";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom"; 

const Header = ({ className = "" }) => {
  const navigate = useNavigate(); 
  const handleLoginClick = () => {
    navigate("/login"); 
  };

  return (
    <div
      className={[
        css`
          position: absolute;
          width: 1440px;
          height: 100px;
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          position: absolute;
          top: calc(50% - 14px);
          left: calc(50% - 270px);
          display: flex;
          gap: var(--gap-31xl);
        `}
      >
        <div>Home</div>
        <div>Listings</div>
        <div>Services</div>
        <div>Blog</div>
        <div>
          <div>Pages</div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 22px;
          right: 100px;
        `}
      >
        <div
          className={[
            css`
              width: 160px;
              border-radius: var(--br-xs);
              background-color: var(--color-lightgreen);
              height: 56px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer; 
            `,
            className,
          ].join(" ")}
          onClick={handleLoginClick} 
        >
          <div
            className={css`
              font-weight: 600;
            `}
          >
            Login
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: calc(50% - 16px);
          left: 120px;
          display: flex;
          gap: 10px;
          font-size: 25px;
        `}
      >
        <img alt="" src="/frame-162649.svg" />
        <div>Fraction Hive</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
