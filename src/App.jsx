import "./App.css";
import data from "./data";
import List from "./list";

function App() {
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
      </section>
    </main>
  );
}

export default App;
