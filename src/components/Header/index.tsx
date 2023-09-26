import { HeaderContainer, HeaderContent, NewEmployerButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>Employer's List</span>
        <NewEmployerButton>New Employer</NewEmployerButton>
      </HeaderContent>
    </HeaderContainer>
  )
}