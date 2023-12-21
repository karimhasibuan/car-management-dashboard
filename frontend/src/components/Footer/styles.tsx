import { css } from "@emotion/css";

const styles = {
  footerSection: css`
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      display: block;
    }
  `,
  addressFooterSection: css`
    width: 268px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }
  `,
  navigationFooterSection: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: #000000;
      margin-bottom: 16px;
    }

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `,
  sosmedFooterSection: css`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `,
  iconSosmedFooterSection: css`
    display: flex;
    justify-content: space-between;
    width: 268px;

    img {
      margin-right: 1rem;
    }
  `,
  logoFooter: css`
    display: block;
    background-color: #0d28a6;
    width: 100px;
    height: 34px;
  `,
  copyrightFooterSection: css`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `,
};

export default styles;
