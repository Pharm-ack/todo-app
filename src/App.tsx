import Header from "./components/Header";
import DisplayImage from "./components/DisplayImage";
import Todo from "./components/Todo";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <DisplayImage />
      <section className="view">
        <Header />
        <Todo />
      </section>
    </main>
  );
}

export default App;
