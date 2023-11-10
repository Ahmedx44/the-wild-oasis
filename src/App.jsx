import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button varitaion="primary" size="medium" onClick={() => alert("")}>
              Check in
            </Button>
            <Button
              varitaion="secondary"
              size="small"
              onClick={() => alert("")}
            >
              Check out
            </Button>
          </div>
        </Row>

        <Row>
          <Heading as="h3">Form</Heading>
          <Input type="number" placeholder="Number of guestes" />
          <Input type="number" placeholder="Number of guestes" />
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
