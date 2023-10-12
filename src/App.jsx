import { useEffect, useState } from 'react'
import './App.css'
import initializeChart from './strategies'
import StrategiesTable from './StrategiesTable';

function App() {
  const [chart, setChart] = useState(null);

  useEffect(() =>{
    if (chart){
      chart.destroy()
    }

    const newChart = initializeChart();

    return () => {
      newChart.destroy()
    }

  }, [])

  return (
    <>Lending Allocations
    <canvas id="acquisitions"></canvas>
    <StrategiesTable />
    </>
  )
}

export default App
