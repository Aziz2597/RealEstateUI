import React from "react";
import PropTypes from "prop-types";

const Heading = ({ className = "" }) => {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        top: "352px",
        left: "120px",
        width: "1200px",
        display: "flex",
        justifyContent: "space-between",
        textAlign: "left",
      }}
    >
      <div>
        <div style={{ fontWeight: 600 }}>Showing listings properties</div>
        <div style={{ color: "var(--grey-011)" }}>Showing 1 - 60 Properties</div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--gap-5xl)",
          color: "var(--grey-011)",
        }}
      >
        <div
          style={{
            width: "241px",
            display: "flex",
            alignItems: "center",
            gap: "var(--gap-9xs)",
          }}
        >
          <div style={{ lineHeight: "160%" }}>Sort By:</div>
          <div
            style={{
              borderRadius: "var(--br-5xs)",
              border: "1px solid var(--dgrey-01)",
              display: "flex",
              padding: "var(--padding-2xs) var(--padding-base)",
              color: "var(--black-01)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--gap-9xs)",
              }}
            >
              <div style={{ fontWeight: 600 }}>Relevant Products</div>
              <i className="fas fa-chevron-down" style={{ fontSize: "12px" }}></i>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1px",
            borderRight: "1px solid var(--dgrey-01)",
            height: "25px",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "var(--gap-5xs)",
          }}
        >
          <div
            style={{
              borderRadius: "var(--br-5xs)",
              backgroundColor: "var(--color-darkslategray)",
              padding: "var(--padding-3xs)",
            }}
          >
            <i className="fas fa-th-large" style={{ fontSize: "24px", color: "#fff" }}></i>
          </div>
          <div
            style={{
              borderRadius: "var(--br-5xs)",
              border: "1px solid var(--dgrey-01)",
              padding: "var(--padding-3xs)",
            }}
          >
            <i className="fas fa-bars" style={{ fontSize: "24px", color: "var(--dgrey-01)" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
};

export default Heading;
