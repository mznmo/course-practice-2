import { formatter } from "../util/investment";

export default function Results({results}) {
    if (!results.length) {
        return <p className="center">No investment results available.</p>;
    }

    const totalInvested = results.reduce((sum, year) => sum + year.annualInvestment, 0);

    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Invest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {results.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.annualInvestment)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInvested)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
  