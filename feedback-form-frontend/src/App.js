import Header from "./components/Header";
import Question from "./components/Question";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      
        <Question/>
      </div>
  );
};

export default App;
