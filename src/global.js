import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--paragraph-p1-18-medium-lh-160: 'Plus Jakarta Sans';
--font-playfair-display: 'Playfair Display';
--font-jost: Jost;
--paragraph-p1-regular: Sora;
--paragraph-p1-16-medium-lh-160: 'Clash Grotesk';

/* font sizes */
--paragraph-p1-18-medium-lh-160-size: 18px;
--text-large-semi-bold-size: 20px;
--heading-mobile-h4-size: 24px;
--label-l5-14-semi-bold-lh-130-size: 14px;
--text-regular-normal-size: 16px;
--heading-desktop-h2-size: 48px;

/* Colors */
--screen-color-white: #fff;
--primary-01: #d0ff91;
--lgrey-03: #f9f9f9;
--lgrey-01: #f3f3f3;
--secondary-light-gray: #fafafa;
--color-gray-100: #111;
--black-01: #0b0f0e;
--color-gray-200: rgba(17, 17, 17, 0.75);
--primary-neutral-500: #848fac;
--grey-011: #818b9c;
--grey-01: #7f879e;
--color-neutral-neutral: #666;
--color-brand-black: #000;
--primary-neutral-100: #eff3fa;
--dgrey-01: #e4e9ee;
--dark-green-03: #1d9e34;
--color-darkslategray: #122a2c;
--color-lightgreen: #b7e08a;
--color-seagreen: #027a48;

/* Gaps */
--gap-211xl: 230px;
--gap-61xl: 80px;
--gap-5xl: 24px;
--gap-xs: 12px;
--gap-15xl: 34px;
--gap-5xs: 8px;
--gap-base: 16px;
--gap-11xl: 30px;
--gap-9xs: 4px;
--gap-31xl: 50px;
--gap-7xs: 6px;
--gap-22xl: 41px;
--gap-41xl: 60px;
--gap-mini: 15px;
--gap-20xl: 39px;

/* Paddings */
--padding-sm: 14px;
--padding-lg: 18px;
--padding-5xs: 8px;
--padding-xl: 20px;
--padding-xs: 12px;
--padding-2xs: 11px;
--padding-base: 16px;
--padding-3xs: 10px;
--padding-mid: 17px;
--padding-smi: 13px;
--padding-5xl: 24px;

/* Border radiuses */
--br-3xs: 10px;
--br-5xs: 8px;
--br-xs: 12px;
--br-base: 16px;
--br-5xl: 24px;
--br-9xs: 4px;

}
`;
}
