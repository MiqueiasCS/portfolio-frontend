import GlobalStyle from "./global.style";
import { Header } from "./components/header";
import { Footer } from "./components/footer/style";
import { Projects } from "./components/projects";

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Projects />
      <Footer>projeto Portifólio</Footer>
    </>
  );
}

export default App;
