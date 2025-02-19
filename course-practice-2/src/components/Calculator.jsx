import { useState } from "react";

export default function Calculator({onCalculate}) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: +value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onCalculate(userInput);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          Initial Investment
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Annual Investment
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Expected Return (%)
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Duration (Years)
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit" onClick={handleSubmit}>Calculate</button>
    </div>
  );
}
