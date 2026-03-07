import { HeaderContainer, Divider, LogoContainer, Text } from './styles'
import { SearchInput } from '../SearchInput'
import logoDentsu from '../../assets/logo-dentsu.svg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src={logoDentsu} alt="dentsu" width={80} />
          <Text variant="caption">world services</Text>
        </LogoContainer>
        <nav>
          <SearchInput />
        </nav>
      </HeaderContainer>
      <Divider />
    </>
  )
}
