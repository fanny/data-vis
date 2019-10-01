import React from 'react'
import ReactDOM from 'react-dom'
import ScatterPlot from './components/ScatterPlot'

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
];

ReactDOM.render(
  <ScatterPlot
    data={data}
    fillColor="#F71963"
    size={4}
    symbol="diamond"
  />,
  document.getElementById('example'),
)