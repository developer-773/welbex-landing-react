import React from "react";
import {
	StyledContainer,
	TelegramIcon,
	ViberIcon,
	WhatsappIcon,
} from "../../../assets";
import {
	StyledAddress,
	StyledAddressLink,
	StyledContactBox,
	StyledFooter,
	StyledFooterBox,
	StyledFooterHead,
	StyledFooterItem,
	StyledFooterLink,
	StyledFooterList,
	StyledFooterTelLink,
	StyledFooterTop,
	StyledFooterWrap,
	StyledPrivacy,
	StyledPrivacyBox,
	StyledSimpleBox,
} from "./footer.styles";
import { v4 as uid } from "uuid";
import {
	StyledHeaderSocialItem,
	StyledHeaderSocialLink,
	StyledHeaderSocialList,
} from "../header/header.styles";

export const Footer = () => {
	const about = [{ title: "Партнёрская программа" }, { title: "Вакансии" }];
	const firstMenu = [
		{ title: "Расчёт стоимости" },
		{ title: "Услуги" },
		{ title: "Виджеты" },
		{ title: "Интеграции" },
		{ title: "Наши клиенты" },
	];
	const secondMenu = [
		{ title: "Кейсы" },
		{ title: "Благодарственные письма" },
		{ title: "Сертификаты" },
		{ title: "Блог на Youtube" },
		{ title: "Вопрос / Ответ" },
	];

	const social = [
		{ icon: <TelegramIcon />, link: "https://telegram.org/" },
		{ icon: <ViberIcon />, link: "https://viber.com" },
		{ icon: <WhatsappIcon />, link: "https://whatsapp.com" },
	];

	return (
		<StyledFooter>
			<StyledContainer>
				<StyledFooterWrap>
					<StyledFooterTop>
						<StyledSimpleBox>
							<StyledFooterHead>О компании</StyledFooterHead>
							<StyledFooterList style={{ display: "inline-block" }}>
								{about.map((item) => (
									<StyledFooterItem key={uid()}>
										<StyledFooterLink href="/">{item.title}</StyledFooterLink>
									</StyledFooterItem>
								))}
							</StyledFooterList>
						</StyledSimpleBox>
						<StyledSimpleBox>
							<StyledFooterHead>Меню</StyledFooterHead>
							<StyledFooterBox>
								<StyledFooterList>
									{firstMenu.map((item) => (
										<StyledFooterItem key={uid()}>
											<StyledFooterLink href="/">{item.title}</StyledFooterLink>
										</StyledFooterItem>
									))}
								</StyledFooterList>
								<StyledFooterList>
									{secondMenu.map((item) => (
										<StyledFooterItem key={uid()}>
											<StyledFooterLink href="/">{item.title}</StyledFooterLink>
										</StyledFooterItem>
									))}
								</StyledFooterList>
							</StyledFooterBox>
						</StyledSimpleBox>
						<StyledSimpleBox className="testtt">
							<StyledFooterHead>Контакты</StyledFooterHead>
							<StyledContactBox>
								<StyledFooterTelLink href="tel:+75555555555">
									+7-555-555-55-55
								</StyledFooterTelLink>
								<StyledHeaderSocialList>
									{social.map((item) => {
										return (
											<StyledHeaderSocialItem key={uid()}>
												<StyledHeaderSocialLink
													href={item.link}
													target="_blank"
												>
													{item.icon}
												</StyledHeaderSocialLink>
											</StyledHeaderSocialItem>
										);
									})}
								</StyledHeaderSocialList>
								<StyledAddress>
									<StyledAddressLink
										href="https://google.com/maps/search/Москва, Путевой проезд 3с1, к 902"
										target={"_blank"}
									>
										Москва, Путевой проезд 3с1, к 902
									</StyledAddressLink>
								</StyledAddress>
							</StyledContactBox>
						</StyledSimpleBox>
					</StyledFooterTop>
					<StyledPrivacyBox>
						<StyledPrivacy>
							©WELBEX {new Date().getFullYear() - 1}. Все права защищены.
						</StyledPrivacy>
						<StyledFooterLink style={{ textDecorationLine: "underline" }} href="/">
							Политика конфиденциальности
						</StyledFooterLink>
					</StyledPrivacyBox>
				</StyledFooterWrap>
			</StyledContainer>
		</StyledFooter>
	);
};
