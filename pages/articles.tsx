import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, Flex, Box, Container, Heading, Paragraph } from '@styles'
import { ChevronDown } from '@styles/icons'
import Layout from '@components/Layout'
import PageHeader from '@components/PageHeader'
import Article from '@components/Article'

const ArticlesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greg Parker</title>
        <meta name='description' content='Description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <PageHeader
          title='Articles'
          description='Thoughts on various subjects'
          actions={
            <Flex spacing='16px'>
              <Button>
                All topics
                <ChevronDown />
              </Button>
              <Button>Sort by date</Button>
            </Flex>
          }
        />
        <Container style={{ marginTop: 221 }}>
          <Box spacing='56px'>
            <Article
              title='This is an example title'
              description='This is a description'
              date='March 1, 2022'
            />
            <Article
              title='This is an example title'
              description='This is a description'
              date='March 1, 2022'
            />
            <Article
              title='This is an example title'
              description='This is a description'
              date='March 1, 2022'
            />
            <Article
              title='This is an example title'
              description='This is a description'
              date='March 1, 2022'
            />
            <Article
              title='This is an example title'
              description='This is a description'
              date='March 1, 2022'
            />
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default ArticlesPage
