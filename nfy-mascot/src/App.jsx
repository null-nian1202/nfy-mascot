import { Mascot } from "page-mascot";
import "./App.css";

function App() {
  return (
    <main className="page">
      <h1>NFY's little corner</h1>

      <p>Move your mouse around 👀</p>

      <Mascot
        directions="/mascots/nfy-directions.jpg"
        reactions="/mascots/nfy-reactions.png"
        size={300}
        label="NFY mascot"
      />
    </main>
  );
}

export default App;