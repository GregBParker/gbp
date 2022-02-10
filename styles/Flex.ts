import styled from 'styled-components'

const Flex = styled.div<{
  spacing?: string
  align?: string
  justify?: string
}>`
  display: grid;
  grid-auto-flow: column;
  gap: ${p => p.spacing};
  align-items: ${p => p.align || 'flex-start'};
  justify-content: ${p => p.justify || 'flex-start'};
`

export default Flex
