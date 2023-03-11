import React from 'react'
import { StyledContainer } from '../../../assets'
import { StyledGivesDesc, StyledGivesItem, StyledGivesList, StyledGivesText, StyledHead, StyledHeading, StyledHeadSpan, StyledMain, StyledSection, StyledSectionLeft, StyledSectionRight, StyledSectionWrap, StyledSpan, StyledSubheading } from './main.styles'
import { v4 as uid } from 'uuid'
import { useMediaQuery } from 'react-responsive'
import {Button} from "../../index"

export const Main = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)'
  })

  const isTablet = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const arrWeGivesSmall = [{title: 'Skype аудит'},
  {title: '30 виджетов'},
  {title: 'DASHBOARD'},
  {title: 'Месяц аmoCRM'}]

  const arrWeGives = [{title: 'Виджеты', subtitle: '30 готовых решений'}, {title: 'Dashboard', subtitle: 'с показателями вашего бизнеса'}, {title: 'Skype Аудит', subtitle: 'отдела продажи CRM системы'}, {title: '35 дней', subtitle: 'использования CRM'}]

  return (
    <StyledMain>
      <StyledSection>
        <StyledContainer>
          <StyledSectionWrap>
          <StyledSectionLeft>
          <StyledHeading>Зарабатывайте больше 
          </StyledHeading>
          <StyledSpan>с WELBEX</StyledSpan>
          <StyledSubheading>Развиваем и контролируем продажи за вас</StyledSubheading>
          </StyledSectionLeft>
          <StyledSectionRight>
            <StyledHead>
            Вместе с 
            <StyledHeadSpan> бесплатной консультацией </StyledHeadSpan> 
            мы дарим:  
            </StyledHead>
           
            <StyledGivesList>
              {isMobile ?
                arrWeGivesSmall.map(item => {
                  return <StyledGivesItem key={uid()}>
                    <StyledGivesText>{item.title}</StyledGivesText>
                  </StyledGivesItem>
                })
              : isTablet ? 
            arrWeGives.map(item => {
              return <StyledGivesItem key={uid()}>
              <StyledGivesText>{item.title}</StyledGivesText>
              <StyledGivesDesc>{item.subtitle}</StyledGivesDesc>
            </StyledGivesItem>
             
            })
            : ''}
              </StyledGivesList>
              {isTablet ? 
            <Button type={'button'}>Получить консультацию</Button>
          : ''}
          </StyledSectionRight>
          </StyledSectionWrap>
        </StyledContainer>
      </StyledSection>
    </StyledMain>
  )
}
