import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Container, Heading, Paragraph } from '@styles'
import Layout from '@components/Layout'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greg Parker</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container small style={{ marginTop: 72 }}>
          <Box spacing="40px">
            <Box spacing="24px">
              <Paragraph>
                Hey, I’m Greg. I’m product thinker and engineer based in Denver,
                CO and have building on the web for over a decade.
                {` You can read more `}
                <Link href="/about">about me here</Link>
                {`, and find me on `}
                <a
                  href="https://twitter.com/gregbparker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
                {` where I talk about all things digital including the occasional
                NFT tweet.`}
              </Paragraph>
              {/* <Paragraph>
                I was previously the Co-Founder and CPO of Yaguara, a business
                analytics tool for eCommerce brands which was{' '}
                <a href="#" target="_blank">
                  acquired in early 2021
                </a>{' '}
                by Chord Commerce. While at Chord, I worked as a Staff Engineer
                to help launch and replatform brands like Caraway to a headless
                architecture.
              </Paragraph> */}
            </Box>
            <Box spacing="40px">
              <Heading size="medium">Updates</Heading>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default HomePage
