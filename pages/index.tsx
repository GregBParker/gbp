import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Heading, Paragraph } from '@styles'
import Layout from '@components/Layout'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greg Parker</title>
        <meta name='description' content='Description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Container small style={{ marginTop: 72 }}>
          <Box spacing='40px'>
            <Box spacing='24px'>
              <Paragraph>
                Hey, I’m Greg. I’m an independent front-end developer based in
                Denver, CO that helps companies build fast, maintainable
                websites using modern technologies.
              </Paragraph>
              <Paragraph>
                I was previously the Co-Founder and CPO of Yaguara, a business
                analytics tool for eCommerce brands which was{' '}
                <a href='#' target='_blank'>
                  acquired in early 2021
                </a>{' '}
                by Chord Commerce. While at Chord, I worked as a Staff Engineer
                to help launch and replatform brands like Caraway to a headless
                architecture.
              </Paragraph>
              <Paragraph>
                You can find me on{' '}
                <a
                  href='https://twitter.com/gregbparker'
                  target='_blank'
                  rel='noreferrer'
                >
                  Twitter
                </a>{' '}
                and <a href='#'>LinkedIN</a> where I talk about design,
                development, and the occasional NFT tweet.
              </Paragraph>
            </Box>
            <Box spacing='40px'>
              <Heading size='medium'>Updates</Heading>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default HomePage
