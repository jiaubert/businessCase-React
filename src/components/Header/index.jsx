import styled from "styled-components"
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <div>
        <StyledLink to="/">
          Accueil
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
