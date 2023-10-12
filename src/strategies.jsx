import Chart from 'chart.js/auto'

function initializeChart() {
  const data = [
    { strategy: 'Strategy 1', TVL: 100000, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
    { strategy: 'Strategy 2', TVL: 12500, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
    { strategy: 'Strategy 3', TVL: 12500, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
    { strategy: 'Strategy 4', TVL: 25000, Volatility: 'Low', Collateral: '$100', PNL: 1000 },
  ];

  const pieChart = new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'pie',
      data: {
        labels: ['Strategy 1', 'Strategy 2', 'Strategy 3', 'Strategy 4'],
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.TVL),
            backgroundColor: [
                '#855CF8',
                '#E289F2',
                '#7879F1',
                '#B085FF'
              ]
          },
        ],
      },
    }
  );

  return pieChart;
};

export default initializeChart;