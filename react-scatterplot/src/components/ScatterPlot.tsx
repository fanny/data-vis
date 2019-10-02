import React, { FunctionComponent } from 'react'
import { VictoryScatter, ScatterSymbolType, VictoryVoronoiContainer, VictoryContainer } from 'victory'
import XYPlot from './XYPlot'

type Props = {
  fillColor: string,
  data: any[],
  size: number,
  symbol: ScatterSymbolType
}

const ScatterPlot: FunctionComponent<Props> = ({
  data,
  size,
  fillColor,
  symbol
}) => {
  return (
    <XYPlot
      width={1000}
      height={300}
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => `x:${datum.x}, y:${datum.y}`}
        />
      }
    >
      <VictoryScatter
        style={{ data: { fill: fillColor } }}
        size={size}
        symbol={symbol}
        data={data}
      />
    </XYPlot>
  )
}

export default ScatterPlot

// Add voronoi
// make grid optional

