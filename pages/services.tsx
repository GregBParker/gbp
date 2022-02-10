import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Box, Container, Divider, Heading, Paragraph } from '@styles'
import Layout from '@components/Layout'
import PageHeader from '@components/PageHeader'

const ServicesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greg Parker | Services</title>
        <meta name='description' content='Description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <PageHeader
          title='Services'
          description={`Let's work together!`}
          small
          actions={<Button primary>Get started</Button>}
        />
        <Container small style={{ marginTop: 221 }}>
          <Box spacing='40px'>
            <Box spacing='24px'>
              <Paragraph>
                Engineering engagements are personalized packages for each
                client, but they all combine some or all of the following:
              </Paragraph>
              <Box spacing='4px'>
                <Paragraph strong>Audit</Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius porttitor ligula nec vehicula. Ut fringilla velit sed
                  mauris molestie, in vulputate tortor pretium. Sed vulputate
                  vestibulum massa, et lacinia lacus convallis gravida. Vivamus
                  vitae feugiat dolor.
                </Paragraph>
              </Box>
              <Box spacing='4px'>
                <Paragraph strong>Strategy</Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius porttitor ligula nec vehicula. Ut fringilla velit sed
                  mauris molestie, in vulputate tortor pretium. Sed vulputate
                  vestibulum massa, et lacinia lacus convallis gravida. Vivamus
                  vitae feugiat dolor.
                </Paragraph>
              </Box>
              <Box spacing='4px'>
                <Paragraph strong>Implementation</Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius porttitor ligula nec vehicula. Ut fringilla velit sed
                  mauris molestie, in vulputate tortor pretium. Sed vulputate
                  vestibulum massa, et lacinia lacus convallis gravida. Vivamus
                  vitae feugiat dolor.
                </Paragraph>
              </Box>
            </Box>
            <Divider />
            <Box spacing='32px'>
              <Heading as='h2' size='medium'>
                How can I help?
              </Heading>
              <Box spacing='4px'>
                <Paragraph strong>You need a new website built</Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius porttitor ligula nec vehicula. Ut fringilla velit sed
                  mauris molestie, in vulputate tortor pretium. Sed vulputate
                  vestibulum massa, et lacinia lacus convallis gravida. Vivamus
                  vitae feugiat dolor.
                </Paragraph>
              </Box>
              <Box spacing='4px'>
                <Paragraph strong>You have a website but it’s slow</Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius porttitor ligula nec vehicula. Ut fringilla velit sed
                  mauris molestie, in vulputate tortor pretium. Sed vulputate
                  vestibulum massa, et lacinia lacus convallis gravida. Vivamus
                  vitae feugiat dolor.
                </Paragraph>
              </Box>
              <Box spacing='4px'>
                <Paragraph strong>
                  You have a website but conversions are lagging
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius porttitor ligula nec vehicula. Ut fringilla velit sed
                  mauris molestie, in vulputate tortor pretium. Sed vulputate
                  vestibulum massa, et lacinia lacus convallis gravida. Vivamus
                  vitae feugiat dolor.
                </Paragraph>
              </Box>
              <Box spacing='4px'>
                <Paragraph strong>
                  You have a website but it’s hard to maintain
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  varius porttitor ligula nec vehicula. Ut fringilla velit sed
                  mauris molestie, in vulputate tortor pretium. Sed vulputate
                  vestibulum massa, et lacinia lacus convallis gravida. Vivamus
                  vitae feugiat dolor.
                </Paragraph>
              </Box>
            </Box>
            <Divider />
            <Box>
              <Heading as='h2' size='medium'>
                Nice things people have said about me
              </Heading>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default ServicesPage
