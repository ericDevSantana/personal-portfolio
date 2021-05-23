import "./App.css";
import Header from "./Layout/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <MyProjects />
        <div>contact me</div>
      </main>
      <div style={{ bottom: "0", position: "fixed", width: "100%" }}></div>
    </div>
  );
}

export default App;
