import React, { FunctionComponent } from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme, ScatterSymbolType } from 'victory'

type Props = {
  fillColor: string,
  data: any[],
  size: number,
  symbol: ScatterSymbolType
}

const ScatterPlot: FunctionComponent<Props> = ({ data, size, fillColor, symbol }) => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={1000}
    >
      <VictoryScatter
        style={{ data: { fill: fillColor } }}
        size={size}
        symbol={symbol}
        data={data}
      />
    </VictoryChart>
  )
}

export default ScatterPlot
