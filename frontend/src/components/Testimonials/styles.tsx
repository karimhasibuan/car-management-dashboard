import { css } from "@emotion/css";

const styles = {
  testimonial: css`
    margin: 100px auto;
  `,
  lowerTestimonial: css`
    margin-top: 40px;
    margin-bottom: 24px;
  `,
  cardTestimonial: css`
    display: flex;
    width: 619px;
    margin-right: 32px;
    padding: 69px 0px;
    border-radius: 8px;
    border: 1px solid #d0d0d0;
    background-color: #f1f3ff;
    box-shadow: 0px 0px 4px 0px #00000026;

    @media (max-width: 768px) {
      width: 214px;
      display: block;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `,
  leftCardTestimonial: css`
    margin: 0px 23px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      margin: 0px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `,
  leftCardTestimonialImg: css`
    width: 200px;
    @media (max-width: 768px) {
      width: 100px;
    }
  `,
  rightCardTestimonial: css`
    margin-right: 32px;
    width: 100%;

    @media (max-width: 768px) {
      display: block;
      justify-content: center;
      margin-right: 0px;
    }
  `,
  descCardTestimonial: css`
    width: 415px;
    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  arrow: css`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  arrowWidth: css`
    width: 100px;
    display: flex;
    justify-content: space-around;
  `,
  leftArrow: css`
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;

    &:hover {
      background-color: #5cb85f;
      color: #ffffff;
    }
  `,
  rightArrow: css`
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;

    &:hover {
      background-color: #5cb85f;
      color: #ffffff;
    }
  `,
};
export default styles;
