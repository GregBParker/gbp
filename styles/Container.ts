import styled from 'styled-components'

const Container = styled.div<{
  small?: boolean
}>`
  margin: 0 auto;
  padding-left: 72px;
  padding-right: 72px;
  max-width: ${p => (p.small ? '924px' : '1319px')};
`

export default Container
