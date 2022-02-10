interface IProps {
  color?: string
}

const ArrowUpRight: React.FC<IProps> = ({ color }) => (
  <svg width='24' height='24' fill='none' viewBox='0 0 24 24'>
    <path
      stroke={color || 'currentColor'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M17.25 15.25V6.75H8.75'
    ></path>
    <path
      stroke={color || 'currentColor'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M17 7L6.75 17.25'
    ></path>
  </svg>
)

export default ArrowUpRight
