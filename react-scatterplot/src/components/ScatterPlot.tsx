import React, { FunctionComponent } from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory'

const ScatterPlot: FunctionComponent =() => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={1000}
    >
      <VictoryScatter
        style={{ data: { fill: "#c43a31" } }}
        size={7}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
    </VictoryChart>
  )
}

export default ScatterPlot