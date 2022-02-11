import styled from 'styled-components'
import { Flex, Paragraph } from '@styles'

interface ITool {
  name: string
  icon: string
}

const Tool: React.FC<ITool> = ({ name, icon }) => {
  return (
    <Flex align="center" spacing="16px">
      <Icon src={icon} />
      <Paragraph>{name}</Paragraph>
    </Flex>
  )
}

export default Tool

const Icon = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 4px;
`
