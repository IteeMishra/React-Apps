import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter.jsx";
import Controls from "./components/Controls.jsx";
import Container from "./components/Container.jsx";
import { useSelector } from "react-redux";

function App() {
  return (
    <Container>
      <Header />
      <DisplayCounter />
      <Controls />
    </Container>
  );
}

export default App;
