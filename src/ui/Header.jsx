import styled from "styled-components";
const HeaderStyled = styled.header`
  background-color: var(--color-grey-0);
  padding: 3rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
function Header() {
  return <HeaderStyled>Header</HeaderStyled>;
}

export default Header;
