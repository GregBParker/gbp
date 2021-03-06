interface IProps {
  color?: string
}

const Home: React.FC<IProps> = ({ color }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.75 19.2502H17.25C18.3546 19.2502 19.25 18.3548 19.25 17.2502V9.75025L12 4.75024L4.75 9.75025V17.2502C4.75 18.3548 5.64544 19.2502 6.75 19.2502Z'
      stroke={color || 'currentColor'}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.74951 15.7493C9.74951 14.6447 10.645 13.7493 11.7495 13.7493H12.2495C13.3541 13.7493 14.2495 14.6447 14.2495 15.7493V19.2493H9.74951V15.7493Z'
      stroke={color || 'currentColor'}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default Home
