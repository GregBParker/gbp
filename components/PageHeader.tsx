import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Button, Container, Flex, Heading, Paragraph } from '@styles'
import { ChevronDown } from '@styles/icons'

interface IProps {
  title: string
  description?: string
  actions?: React.ReactElement
  small?: boolean
}

const PageHeader: React.FC<IProps> = ({
  title,
  description,
  actions,
  small
}) => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <Wrapper sticky={sticky}>
      <Container small={small}>
        <Flex align='flex-end' justify='space-between'>
          <Box spacing='16px'>
            <Heading size='large'>{title}</Heading>
            <Paragraph size='large' color='light'>
              {description}
            </Paragraph>
          </Box>
          {actions}
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default PageHeader

const sticky = `
padding: 16px 0;
background: rgba(255,255,255,0.9);
backdrop-filter: blur(5px);

h1 {
  font-size: 24px;
}

p {
  display: none;
}
`

const Wrapper = styled.div<{
  sticky?: boolean
}>`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 290px);
  padding: 40px 0;
  border-bottom: 1px solid var(--neutral-100);
  background: white;
  transition: padding 0.1s ease-in 0s;

  h1 {
    transition: font-size 0.1s ease-in 0s;
  }

  ${p => p.sticky && sticky};
`
