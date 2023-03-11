import styled from "styled-components";
import { Device } from "../../../assets";
import bgMobile from "../../../assets/images/bg-mobile1.png";

export const StyledMain = styled.main``;

export const StyledSection = styled.section`
	padding: 40px 0 65px;
	background-image: url(${bgMobile});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: center center;

	@media ${Device.tablet} {
		background-image: none;
	}
`;

export const StyledSectionWrap = styled.div`
	display: flex;
	flex-direction: column;

	@media ${Device.tablet} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const StyledSectionLeft = styled.div`
	width: 272px;
	margin-bottom: 45px;

	@media ${Device.tablet} {
		width: 362px;
		margin-bottom: 0;
	}
`;

export const StyledHeading = styled.h1`
	margin-bottom: 0;
	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 44px;
	color: #e4e5ea;

	@media ${Device.tablet} {
		font-size: 48px;
		line-height: 58px;
	}
`;
export const StyledSpan = styled.span`
	display: block;
	margin-bottom: 15px;
	font-family: "Inter", sans-serif;
	font-weight: 900;
	font-size: 36px;
	line-height: 44px;
	background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	@media ${Device.tablet} {
		margin-bottom: 30px;
		font-size: 48px;
		line-height: 58px;
	}
`;

export const StyledSubheading = styled.p`
	margin-top: 0;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #e4e5ea;
`;

export const StyledSectionRight = styled.div`
	width: 291px;

    @media ${Device.tablet} {
        width: 350px;
    }
`;

export const StyledHead = styled.h3`
    margin-bottom: 20px;
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	text-align: left;
	color: #e4e5ea;

	@media ${Device.tablet} {
        margin-bottom: 40px;
		text-align: right;
	}
`;

export const StyledHeadSpan = styled.span`
	font-family: "Inter", sans-serif;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
	background: linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	@media ${Device.tablet} {
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}
`;

export const StyledGivesList = styled.ul`
	display: flex;
	flex-wrap: wrap;

	@media ${Device.tablet} {
		justify-content: flex-end;
        margin-bottom: 61px;
	}
`;

export const StyledGivesItem = styled.li`
	margin-right: 15px;
    text-align: right;
    @media ${Device.tablet} {
        width: 135px;
        margin-right: 30px;
        margin-bottom: 30px;
        &:nth-child(even) {
        margin-right: 0;
        }

        &:nth-child(3) {
            width: 165px;
        }

    }
`;

export const StyledGivesText = styled.p`
	display: inline-flex;
	align-items: center;
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #e4e5ea;
	&::before {
		content: "";
		display: inline-block;
		height: 1px;
		margin-right: 5px;
		border-left: 10px solid yellow;
	}

	@media ${Device.tablet} {
        margin: 0;
        margin-bottom: 6px;
		font-family: "Inter", sans-serif;
		font-weight: 500;
		font-size: 18px;
		line-height: 22px;
		&::before {
			content: none;
		}
	}
`;

export const StyledGivesDesc = styled.p`
    margin: 0;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #e4e5ea;
    text-align: right;
`;
