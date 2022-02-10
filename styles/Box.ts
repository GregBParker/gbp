import styled from 'styled-components'

const Box = styled.div<{
  spacing?: string
}>`
  display: grid;
  grid-auto-flow: row;
  gap: ${p => p.spacing};
`

export default Box
