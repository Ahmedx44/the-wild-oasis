import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button onClick={() => alert("")}>Check in</Button>
        <Button onClick={() => alert("")}>Check out</Button>
        <Heading as="h2">Check in and out</Heading>
        <Input type="number" placeholder="Number of guestes"></Input>
        <Heading as="h3">Form</Heading>
      </StyledApp>
    </>
  );
}

export default App;
