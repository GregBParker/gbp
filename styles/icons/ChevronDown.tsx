interface IProps {
  color?: string
}

const ChevronDown: React.FC<IProps> = ({ color }) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15 8L10 13L5 8'
      stroke={color || 'currentColor'}
      strokeWidth='1.67'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default ChevronDown
