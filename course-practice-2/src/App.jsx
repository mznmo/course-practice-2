import Header from "./components/Header"
import Calculator from "./components/Calculator"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment"
import { useState } from "react"
function App() {
  const [investmentResults, setInvestmentResults] = useState([]);

  function handleCalculate(userInput){
    const results = calculateInvestmentResults(userInput);
    setInvestmentResults(results);
  }

  return (
    <>
   <Header />
   <Calculator onCalculate={handleCalculate} />
   <Results results={investmentResults}/>
   </>
  )
}

export default App
