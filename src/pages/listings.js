import React from "react";
import Header from "../components/header";
import Heading from "../components/heading";
import { css } from "@emotion/css";
import Product from "../components/product";
import Navigation1 from "../components/navigation1";
import FilterSection from "../components/filter-section";
const Listings = () => {
  const filterData = [
    {
      title: "Best Filter",
      options: ["4 stars or upper", "Luxury Building", "Best Seller", "Discount"],
    },
    {
      title: "Location",
      options: ["Bandung", "Jakarta", "Bali", "Medan", "Surabaya", "Jogja"],
    },
    {
      title: "Category",
      options: ["Apartment", "Villa", "House", "Commercial"],
    },
  ];

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--screen-color-white);
        height: 2860px;
        overflow: hidden;
        left: 0;
      `}
    >
      <Header />
      <Heading />

      <section
        className={css`
          position: absolute;
          top: 468px;
          left: 120px;
          width: 278px;
          height: 1238px;
        `}
      >
        <aside
          className={css`
            border-radius: var(--br-xs);
            border: 1px solid var(--dgrey-01);
            box-sizing: border-box;
            height: 100%;
          `}
        />
        <h3
          className={css`
            position: absolute;
            top: 24px;
            left: 24px;
            font-weight: 600;
          `}
        >
          Filter Option
        </h3>
        <hr
          className={css`
            position: absolute;
            top: 67.5px;
            left: 23.5px;
            width: 231px;
            border-top: 1px solid var(--dgrey-01);
          `}
        />
        <nav
          className={css`
            position: absolute;
            top: 92px;
            left: 24px;
            display: flex;
            flex-direction: column;
            gap: var(--gap-5xl);
          `}
        >
          {filterData.map((filter, index) => (
            <React.Fragment key={index}>
              <FilterSection title={filter.title} options={filter.options} />
              {index < filterData.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </nav>
      </section>

      <main
        className={css`
          position: absolute;
          top: 468px;
          left: 438px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        `}
      >

        {[...Array(3)].map((_, index) => (
          <section
            key={index}
            className={css`
              display: flex;
              gap: var(--gap-11xl);
            `}
          >
            <Product
              placeholderImage={index === 0 ? `/placeholder-image@2x.png` : `/placeholder-image${index * 2}@2x.png`}
              frame16="/frame-16.svg"
            />
            <Product
              placeholderImage={`/placeholder-image${index * 2 + 1}@2x.png`}
              frame16="/frame-16.svg"
            />
          </section>
        ))}
      </main>

      <header
        className={css`
          position: absolute;
          top: 150px;
          left: 416px;
          display: flex;
          flex-direction: column;
          gap: var(--gap-base);
          text-align: center;
          font-size: var(--heading-desktop-h2-size);
          color: var(--color-brand-black);
        `}
      >
        <b>Our Listing</b>
        <p
          className={css`
            color: var(--color-neutral-neutral);
            font-size: var(--text-regular-normal-size);
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>

      {/* Pagination Footer */}
      <footer
  className={css`
    position: absolute;
    top: 2385px;
    left: 713px;
    display: flex;
    gap: var(--gap-base);
  `}
>
  <button
    className={css`
      border-radius: var(--br-5xs);
      padding: var(--padding-sm) var(--padding-lg);
    `}
  >
    &#8592; {/* Left arrow character */}
  </button>
  <div
    className={css`
      display: flex;
      gap: var(--gap-xs);
    `}
  >
    {[1, 2, 3].map((number) => (
      <button
        key={number}
        className={css`
          border-radius: var(--br-5xs);
          background-color: ${number === 1
            ? "var(--primary-01)"
            : "var(--lgrey-03)"};
          padding: var(--padding-sm) var(--padding-lg);
          color: ${number === 1 ? "var(--color-gray-100)" : "inherit"};
        `}
      >
        {number}
      </button>
    ))}
    <button
      className={css`
        border-radius: var(--br-5xs);
        background-color: var(--lgrey-03);
        padding: var(--padding-sm) var(--padding-lg);
      `}
    >
      ...
    </button>
  </div>
  <button
    className={css`
      border-radius: var(--br-5xs);
      padding: var(--padding-sm) var(--padding-lg);
      transform: rotate(180deg);
    `}
  >
    &#8592; {/* Left arrow character, rotated */}
  </button>
</footer>


      <Navigation1 />
    </div>
  );
};

export default Listings;