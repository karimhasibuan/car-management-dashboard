import { css } from '@emotion/css';

const stylesOurServices = {
	ourServices: css`
    align-items: center;
    padding-top: 100px;
    width: 1027px;

    @media (max-width: 768px) {
      width: 100%;
      padding-left: 0px;
      padding-right: 0px;
    }
  `,
	leftServiceSection: css`
    @media (max-width: 768px) {
      padding-left: 0px;
      padding-right: 0px;
      text-align: center;
      img {
        width: 80%;
      }
    }
  `,
	rightServiceSection: css`
    margin-top: 24px;
    p {
      text-align: justify;
    }
    }
  `,
	pointServices: css`
    display: flex;
    align-items: center;
    align-content: center;
    margin-bottom: 18px;
  `,
	pointServicesP: css`
    margin-left: 16px;
    margin-bottom: 0px;
  `,
};

export default stylesOurServices;
