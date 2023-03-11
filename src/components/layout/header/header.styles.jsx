import styled from "styled-components";
import { Device } from "../../../assets";

export const StyledHeader = styled.header`
	padding: 20px 0;
	background-color: #0E1014;
	@media ${Device.tablet} {
		background-color: transparent;
	}
`;

export const StyledHeaderWrap = styled.div`
	display: flex;
	justify-content: start;
	align-items: start;
	@media ${Device.tablet} {
		justify-content: space-between;
	}
`;
export const StyledHeaderLeft = styled.div`
	display: flex;
`;

export const StyledHeaderLeftBox = styled.div`
	display: none;
	width: 174px;
	@media ${Device.tablet} {
		display: flex;
		flex-direction: column;
		margin-right: 54px;
	}
`;

export const StyledLink = styled.a`
	margin-right: 54px;
	margin-bottom: 10px;
`;
export const StyledHeaderDesc = styled.p`
	margin-top: 0;
	font-family: "Montserrat", sans-serif;
	font-weight: 300;
	font-size: 10px;
	line-height: 16px;
	color: #e4e5ea;
`;

export const StyledHeaderList = styled.ul`
	display: flex;
	width: 85vw;
	padding-bottom: 5px;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		background-color: transparent;
	}
	@media ${Device.tablet} {
	overflow-x: hidden;
	width: auto;
	}

	@media only screen and (min-width: 608px){ 
		justify-content: center;
	}

`;

export const StyledHeaderItem = styled.li`
	margin-right: 14px;
	@media ${Device.tablet} {
		&:not(:last-child) {
			margin-right: 30px;
		}
	}
`;

export const StyledHeaderLink = styled.a`
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #e4e5ea;
	text-transform: uppercase;

	@media ${Device.tablet} {
		text-transform: capitalize;
	}
`;

export const StyledHeaderRight = styled.div`
	display: none;
	@media only screen and (min-width: 923px){
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 190px;
	}

	@media only screen and (min-width: 1111px){
		width: 100%;
		flex-direction: row;
		justify-content: flex-end;
	}
`;

export const StyledTelLink = styled.a`
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 13px;
	line-height: 19px;
	text-align: right;
	color: #e4e5ea;
	@media only screen and (min-width: 1111px){
	margin-right: 48px;
	font-size: 16px;

	}
`;

export const StyledHeaderSocialList = styled.ul`
	display: flex;
	align-items: center;
`

export const StyledHeaderSocialItem = styled.li`
	&:not(:last-child) {
		margin-right: 32px;
	}
`

export const StyledHeaderSocialLink = styled.a``
