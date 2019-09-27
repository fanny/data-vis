import React, { FunctionComponent } from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory'


const myData = [
  {x: 1, y: 10},
  {x: 1.7, y: 12},
  {x: 2, y: 5},
  {x: 3, y: 15},
  {x: 2.5, y: 7}
]
  

const ScatterPlot: FunctionComponent =() => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domain={{ x:[0, 5], y: [0,7]}}
    >
      <VictoryScatter
        style={{ data: {fill: "#c43a31" }}}
        width={50}
        data={myData}
      />
    </VictoryChart>
  )
}

export default ScatterPlot