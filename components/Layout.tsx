import styled from 'styled-components'
import Sidebar from './Sidebar'

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>{children}</Main>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const Main = styled.main`
  background: #ffffff;
  border-left: 1px solid #f3f4f6;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  width: calc(100vw - 290px);
  padding-bottom: 56px;
`
