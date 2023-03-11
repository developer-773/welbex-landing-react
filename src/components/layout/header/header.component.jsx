import React from 'react'
import { StyledHeader, StyledHeaderDesc, StyledHeaderItem, StyledHeaderLeft, StyledHeaderLeftBox, StyledHeaderLink, StyledHeaderList, StyledHeaderRight, StyledHeaderSocialItem, StyledHeaderSocialLink, StyledHeaderSocialList, StyledHeaderWrap, StyledLink, StyledTelLink } from './header.styles'
import {Logo} from "../../index"
import { StyledContainer, TelegramIcon, ViberIcon, WhatsappIcon } from '../../../assets'
import { v4 as uid } from 'uuid'

export const Header = () => {

    const headerArr = [{name: "Услуги"}, {name: "Виджеты"}, {name: "Интеграции"}, {name: "Кейсы"}, {name: "Сертификаты"}]

    const social = [{icon: <TelegramIcon />, link: 'https://telegram.org/'}, {icon: <ViberIcon />, link: 'https://viber.com'}, {icon: <WhatsappIcon />, link: 'https://whatsapp.com'}]

  return (
    <StyledHeader >
        <StyledContainer>
        <StyledHeaderWrap>
            <StyledHeaderLeft>
                <StyledHeaderLeftBox>
                <StyledLink href='/'>
                    <Logo />
                </StyledLink>
                <StyledHeaderDesc>
                крупный интегратор CRM в Росcии и ещё 8 странах
                </StyledHeaderDesc>
                </StyledHeaderLeftBox>
                <StyledHeaderList>
                    {headerArr.map(item => {
                        return (
                        <StyledHeaderItem key={uid()}>  
                            <StyledHeaderLink href='/'>{item.name}</StyledHeaderLink>
                        </StyledHeaderItem>
                        )
                    })}
                </StyledHeaderList>
            </StyledHeaderLeft>
            <StyledHeaderRight>
                   <StyledTelLink href='tel:+75555555555'>+7-555-555-55-55</StyledTelLink> 
                   <StyledHeaderSocialList>
                    {social.map(item => {
                        return <StyledHeaderSocialItem key={uid()}>
                        <StyledHeaderSocialLink href={item.link} target="_blank">
                          {item.icon}
                        </StyledHeaderSocialLink>
                        </StyledHeaderSocialItem>
                    })}

                   </StyledHeaderSocialList>
            </StyledHeaderRight>
        </StyledHeaderWrap>
        </StyledContainer>
    </StyledHeader>
  )
}
