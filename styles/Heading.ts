import styled from 'styled-components'

const large = `
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
`

const medium = `
  font-size: 20px;
  line-height: 28px;
`

const xsmall = `
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0;
`

const Heading = styled.h1<{
  size?: 'large' | 'medium' | 'xsmall'
}>`
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--neutral-800);

  ${p => p.size === 'large' && large};
  ${p => p.size === 'medium' && medium};
  ${p => p.size === 'xsmall' && xsmall};
`

export default Heading
