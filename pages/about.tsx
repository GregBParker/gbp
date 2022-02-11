import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import Head from 'next/head'
import {
  Box,
  Button,
  Divider,
  Container,
  Flex,
  Heading,
  Paragraph
} from '@styles'
import Layout from '@components/Layout'
import Tool from '@components/Tool'
import PageHeader from '@components/PageHeader'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greg Parker</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeader title="About" small />
        <Container small style={{ marginTop: 177 }}>
          <Box spacing="40px">
            <Box spacing="24px">
              <Paragraph>
                For more than ten years, I have been building on the web through
                various roles in product and engineering.
              </Paragraph>
              <Paragraph>
                My career started at digital agencies, where I worked with
                startups, eCommerce brands, and non-profits build and launch
                their websites.
              </Paragraph>
              <Paragraph>
                This valuable experience along with an entreprenurial mindset
                and a love for product and design led me to co-founding Yaguara,
                a business analytics tool for eCommerce brands which was{' '}
                <a
                  href="https://news.crunchbase.com/news/arfa-becomes-chord-acquires-yaguara-bags-18m-series-a-for-d2c-platform/"
                  target="_blank"
                  rel="noreferrer"
                >
                  acquired in early 2021
                </a>{' '}
                by Chord Commerce.
              </Paragraph>
              <Paragraph>
                Now I like to work with exciting startups and brands in helping
                them <Link href="/services">plan, build, and launch</Link>{' '}
                modern web experiences.
              </Paragraph>
            </Box>
            <Divider />
            <Box spacing="24px">
              <Heading size="medium">Experience</Heading>
              <ExperienceGrid>
                <Box spacing="4px">
                  <Paragraph strong>Solutions Engineer</Paragraph>
                  <Paragraph size="small" color="light">
                    Chord Commerce
                  </Paragraph>
                </Box>
                <Box spacing="4px">
                  <Paragraph strong>Co-Founder and CPO</Paragraph>
                  <Paragraph size="small" color="light">
                    Yaguara{' '}
                    <Paragraph fontStyle="detail" style={{ display: 'inline' }}>
                      (acqd. 2021)
                    </Paragraph>
                  </Paragraph>
                </Box>
                <Box spacing="4px">
                  <Paragraph strong>Partner and CTO</Paragraph>
                  <Paragraph size="small" color="light">
                    Brllnt
                  </Paragraph>
                </Box>
                <Box spacing="4px">
                  <Paragraph strong>UI Developer</Paragraph>
                  <Paragraph size="small" color="light">
                    FiddleFly
                  </Paragraph>
                </Box>
                <Box spacing="4px">
                  <Paragraph strong>Lead Web Developer</Paragraph>
                  <Paragraph size="small" color="light">
                    MOS Creative
                  </Paragraph>
                </Box>
              </ExperienceGrid>
            </Box>
            <Divider />
            <Box spacing="32px">
              <Heading size="medium">Tools & Frameworks</Heading>
              <ToolsGrid>
                <Tool name="Miro" icon="/miro-logo.svg" />
                <Tool name="Figma" icon="/figma-logo.svg" />
                <Tool name="Webflow" icon="/webflow-logo.svg" />
                <Tool name="VS Code" icon="/vscode-logo.svg" />
                <Tool name="React" icon="/react-logo.svg" />
                <Tool name="Next.js" icon="/nextjs-logo.svg" />
                <Tool name="Gatsby" icon="/gatsby-logo.svg" />
              </ToolsGrid>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default AboutPage

const ToolsGrid = styled(Flex)`
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`

const ExperienceGrid = styled(Flex)`
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`
