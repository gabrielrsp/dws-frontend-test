import { HeaderContainer, Divider, LogoContainer, Text } from './styles'
import { SearchInput } from '../SearchInput'
import logoDentsu from '../../assets/logo-dentsu.svg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Text
          href="https://www.dentsu.com/?global=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoContainer>
            <img src={logoDentsu} alt="dentsu" width={80} />
            <Text variant="caption">world services</Text>
          </LogoContainer>
        </Text>

        <nav>
          <SearchInput />
        </nav>
      </HeaderContainer>

      <Divider />
    </>
  )
}
