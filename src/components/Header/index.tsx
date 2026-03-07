import { HeaderContainer, Divider, LogoContainer, Text } from './styles'
import logoDentsu from '../../assets/logo-dentsu.svg'

export function Header () {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src={logoDentsu} alt="dentsu" width={70} />
          <Text variant="small">world services</Text>
        </LogoContainer>
        <nav>
          <input type="text" placeholder="SEARCH" />
        </nav>
      </HeaderContainer>
      <Divider />
    </>
  )
}
