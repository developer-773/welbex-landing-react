import styled from "styled-components";
import { Device } from "../../../assets";

export const StyledFooter = styled.footer`
	padding: 35px 0 60px 0;
	background: #0e1014;

	@media ${Device.tablet} {
		background: transparent;
	}
`;

export const StyledFooterWrap = styled.div``;

export const StyledFooterTop = styled.div`
	@media ${Device.tablet} {
		display: flex;
		margin-bottom: 32px;
	}
`;

export const StyledSimpleBox = styled.div`
	&:not(:last-child) {
		margin-right: auto;
	}

	@media ${Device.laptop} {
		&:nth-child(1) {
			margin-right: 98px;
		}
	}

	@media ${Device.tablet} {
		&:last-child {
			text-align: right;
			ul {
				justify-content: flex-end;
			}
		}
	}
`;

export const StyledFooterBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StyledFooterHead = styled.h4`
	margin-bottom: 20px;
	font-family: "Inter", sans-serif;
	font-weight: 700;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #656566;
`;

export const StyledFooterList = styled.ul`
	@media ${Device.tablet} {
		&:nth-child(1) {
			margin-right: 52px;
		}
	}
`;

export const StyledFooterItem = styled.li`
	margin-bottom: 10px;
`;

export const StyledFooterLink = styled.a`
	font-family: "Inter", sans-serif;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #e4e5ea;
`;

export const StyledContactBox = styled.div`
	& li:not(:last-child) {
		margin-right: 13px;
	}

	margin-right: 0;
`;

export const StyledFooterTelLink = styled.a`
	display: inline-block;
	margin-bottom: 10px;
	font-family: "Inter", sans-serif;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #e4e5ea;
`;

export const StyledAddress = styled.address``;

export const StyledAddressLink = styled.a`
	display: inline-block;
	margin-top: 12px;
	margin-bottom: 50px;
	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #e4e5ea;
`;

export const StyledPrivacyBox = styled.div`
	@media ${Device.tablet} {
		text-align: right;
	}
`;

export const StyledPrivacy = styled.p`
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #e4e5ea;
`;
