import styled from 'styled-components'

const primary = `
  padding: 10px 20px;
  background: var(--primary-500);
  border-radius: 6px;
  border: none;
  color: white;

  &:hover {
    background: var(--primary-600);
  }
`

const Button = styled.button<{
  primary?: boolean
}>`
  display: flex;
  align-items: center;
  -webkit-appearance: none;
  padding: 10px 12px;
  background: white;
  border: 1px solid var(--neutral-300);
  color: var(--neutral-600);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
  cursor: pointer;
  height: 42px;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    border-color: var(--neutral-400);
  }

  svg {
    margin-left: 8px;
  }

  ${p => p.primary && primary}
`

export default Button
