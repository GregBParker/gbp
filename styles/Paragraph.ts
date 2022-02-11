import styled from 'styled-components'

const small = `
  font-size: 14px;
  line-height: 20px;
`

const large = `
font-size: 18px;
line-height: 28px;
`

const light = `
  color: var(--neutral-500);
`

const strong = `
  color: var(--neutral-900);
  font-weight: 600;
`

const detail = `
  font-weight: normal;
  color: var(--neutral-500);
  font-style: italic;
  font-size: 14px;
`

const Paragraph = styled.p<{
  size?: 'small' | 'large'
  color?: 'light'
  strong?: boolean
  fontStyle?: 'detail'
}>`
  font-size: 16px;
  line-height: 28px;
  color: var(--neutral-600);

  ${p => p.size === 'small' && small}
  ${p => p.size === 'large' && large}
  ${p => p.color === 'light' && light}
  ${p => p.strong && strong}
  ${p => p.fontStyle === 'detail' && detail}
`

export default Paragraph
