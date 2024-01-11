import { css } from '@emotion/css';

const stylesJumbotron = {
	headerSection: css`
    padding-top: 37px;
  `,
	leftHeaderSection: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
	leftHeaderSectionH3: css`
    font-size: 36px;
    line-height: 54px;
  `,
	leftHeaderSectionContent: css`
    padding-left: 102px;
    padding-right: 32px;
    @media (max-width: 768px) {
      padding-left: 0px;
      margin-left: 0px;
    }
  `,
	rightHeaderSectionImg: css`
    width: 100%;
    @media (max-width: 768px) {
      margin-top: 24px;
    }
  `,
};

export default stylesJumbotron;
