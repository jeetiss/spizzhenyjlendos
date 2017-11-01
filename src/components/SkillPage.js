import React from 'react'
import { PageContainer, H1, Colored, P, Footer, Link } from './styled'

const SkillPage = ({ style }) => (
  <PageContainer background='#4993db' style={style}>
    <H1>что я могу</H1>

    <P>
      Занимаюсь <Colored>фронтенд</Colored> разработкой,
      на ты с <Colored>JS</Colored>, использую <Colored>webpack</Colored>,
      могу сделать
      {' '}
      <Colored>SPA</Colored>
      {' '}
      на
      {' '}
      <Colored>React</Colored>
      {' '}
      /
      {' '}
      <Colored>Redux</Colored>
    </P>

    <Footer>
      <Link href='mailto:jeetiss@ya.ru'>Напишите</Link>
      {' '}
      мне, если у вас есть вопросы и предложения или свяжитесь через
      {' '}
      <Link href='https://t.me/jeetiss' target='_blank'>Telegram</Link>
    </Footer>
  </PageContainer>
)

export default SkillPage
