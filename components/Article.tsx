import styled from 'styled-components'
import { Badge, Box, Paragraph, Flex } from '@styles'

interface IArticle {
  title: string
  description: string
  date: string
  tags?: string[]
  image?: string
}

const Article: React.FC<IArticle> = ({
  title,
  description,
  date,
  tags,
  image
}) => {
  return (
    <Flex align='center' spacing='24px'>
      <ArticleImage
        style={{
          backgroundImage: `url(https://picsum.photos/200/300?random=${Math.floor(
            Math.random() * 100
          )})`
        }}
      />
      <Box spacing='32px'>
        <Box spacing='8px'>
          <Paragraph strong>{title}</Paragraph>
          <Paragraph color='light'>{description}</Paragraph>
        </Box>
        <Flex spacing='8px' align='center'>
          <Badge>Web Performance</Badge>
          <Paragraph size='small'>&bull;</Paragraph>
          <Paragraph size='small' color='light'>
            {date}
          </Paragraph>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Article

const ArticleImage = styled.div`
  width: 238px;
  height: 160px;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
