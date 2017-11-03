import React from 'react'
import { PageContainer, H1, P, Footer, Link, Copywrite } from './styled'

const TitlesPage = ({ style }) => (
  <PageContainer background='#000' style={style}>
    <H1 color='#fff'>что я делал</H1>

    <div>
      <P color='#fff'>
        <Link color='#fff' href='#'>
          Собрал MVP для Riders
        </Link>
      </P>

      <P color='#fff'>
        <Link color='#fff' href='#'>
          Парсил данные для Statzilla
        </Link>
      </P>

      <P color='#fff'>
        <Link color='#fff' href='#'>
          Делал трейдинг в Tradingview
        </Link>
      </P>
    </div>

    <Footer color='#fff'>
      Посмотрите мой профиль на
      {' '}
      <Link color='#fff' href='https://github.com/jeetiss' target='_blank'>
        Github
      </Link>
    </Footer>

    <Copywrite>
      Дизайн
      {' '}
      <Link
        color='#fff'
        target='_blank'
        href='https://dribbble.com/shots/3835516-My-new-personal-page'
      >
        Артем Тарадаш
      </Link>
    </Copywrite>
  </PageContainer>
)

export default TitlesPage
