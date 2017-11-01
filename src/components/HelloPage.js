import React from 'react'
import { PageContainer, H1, NoWrap, P, Footer, Link } from './styled'

const HelloPage = ({ style }) => (
  <PageContainer background='#dfefe7' style={style}>
    <H1>Привет</H1>

    <P>Я, Дима Ивахненко разработчик <NoWrap>из Ростова-на-Дону</NoWrap></P>

    <Footer>
      Вы можете связаться со мной при помощи
      {' '}
      <Link href='mailto:jeetiss@ya.ru'>почты</Link>
      {' '}
      или
      {' '}
      <Link href='https://t.me/jeetiss' target='_blank'>Telegram</Link>
    </Footer>
  </PageContainer>
)

export default HelloPage
