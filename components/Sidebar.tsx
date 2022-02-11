import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Logo from './Logo'
import { Box, Flex, Heading, Paragraph } from '@styles'
import {
  About,
  Article,
  ArrowUpRight,
  Book,
  Code,
  Home,
  LinkedIn,
  Mail,
  Twitter
} from '@styles/icons'

const mainNav = [
  { name: 'Home', icon: <Home />, url: '/' },
  { name: 'About', icon: <About />, url: '/about' },
  { name: 'Services', icon: <Code />, url: '/services' }
  // { name: 'Articles', icon: <Article />, url: '/articles' },
  // { name: 'Book Notes', icon: <Book />, url: '/books' }
]

const getInTouchNav = [
  { name: 'Email', icon: <Mail />, url: 'mailto:greg@gbp.dev', external: true },
  {
    name: 'Twitter',
    icon: <Twitter />,
    url: 'https://twitter.com/gregbparker',
    external: true
  },
  {
    name: 'LinkedIN',
    icon: <LinkedIn />,
    url: 'https://linkedin.com/in/gregbparker',
    external: true
  }
]

interface INavItem {
  name: string
  icon: React.ReactElement
  url: string
  external?: boolean
  active?: boolean
}

const NavItem: React.FC<INavItem> = ({ name, icon, url, external, active }) => {
  const markup = (
    <NavItemWrapper active={active}>
      <Flex
        spacing="12px"
        align="center"
        style={{ gridTemplateColumns: '0fr 1fr' }}
      >
        {icon}
        <Paragraph size="small">{name}</Paragraph>
        {external && (
          <ExternalLinkIcon>
            <ArrowUpRight />
          </ExternalLinkIcon>
        )}
      </Flex>
    </NavItemWrapper>
  )
  return external ? (
    <a href={url} target="_blank" rel="noreferrer">
      {markup}
    </a>
  ) : (
    <Link href={url} passHref>
      {markup}
    </Link>
  )
}

const Sidebar = () => {
  const router = useRouter()

  return (
    <Wrapper>
      <Inner>
        <div style={{ margin: '0 0 32px 8px' }}>
          <Logo />
        </div>
        <Box spacing="32px">
          <nav>
            {mainNav.map(item => (
              <NavItem
                key={item.name}
                name={item.name}
                icon={item.icon}
                url={item.url}
                active={
                  item.name === 'Home'
                    ? router.pathname === '/'
                    : router.pathname.includes(item.url)
                }
              />
            ))}
          </nav>
          <Box spacing="8px">
            <NavHeading size="xsmall">Get in touch</NavHeading>
            <nav>
              {getInTouchNav.map(item => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  url={item.url}
                  external
                />
              ))}
            </nav>
          </Box>
        </Box>
      </Inner>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  width: 290px;
  min-width: 290px;
  height: 100vh;

  @media screen and (max-width: 1023px) {
    position: fixed;
    width: 290px;
    background: #fcfcfc;
    box-shadow: 0px 2px 4px rgb(16 24 40 / 15%);
    z-index: 1;
    transform: translateX(-100%);
  }
`

const Inner = styled.div`
  position: fixed;
  width: 290px;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding: 32px 16px;
`

const active = `
  background-color: var(--neutral-100);
  color: var(--neutral-900);

  p {
    color: var(--neutral-900);
    font-weight: 600;
  }
`

const NavHeading = styled(Heading)`
  color: var(--neutral-400);
  padding-left: 16px;
`

const NavItemWrapper = styled.div<{
  active?: boolean
}>`
  color: var(--neutral-500);
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 4px;

  p {
    color: var(--neutral-500);
    font-weight: 500;
  }

  &:hover {
    background-color: var(--neutral-100);
  }

  ${p => p.active && active};
`

const ExternalLinkIcon = styled.span`
  width: 18px;
  height: 18px;
  color: var(--neutral-400);

  svg {
    width: 18px;
    height: 18px;
  }
`
