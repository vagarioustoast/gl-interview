import React from 'react'

export default function StrategiesTable() {
    const data = [
        { strategy: 'Strategy 1', TVL: 100000, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
        { strategy: 'Strategy 2', TVL: 12500, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
        { strategy: 'Strategy 3', TVL: 12500, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
        { strategy: 'Strategy 4', TVL: 25000, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
      ];


  return (
    <div>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Strategy</th>
        <th scope="col">TVL</th>
        <th scope="col">Volatility</th>
        <th scope="col">Collateral</th>
        <th scope="col">PNL</th>
      </tr>
    </thead>
    <tbody>
        {data.forEach((element, index) => {
            <tr id={index}>
              <th scope="row">{element.strategy}</th>
              <td>{element.TVL}</td>
              <td>{element.Volatility}</td>
              <td>{element.Collateral}</td>
              <td>{element.PNL}</td>
            </tr>
        })}
    </tbody>
  </table>
  </div>
  )
}
