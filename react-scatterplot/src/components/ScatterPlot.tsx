import React, { FunctionComponent } from 'react'
import {
  VictoryScatter,
  VictoryScatterProps,
  VictoryVoronoiContainer,
  VictoryAxis
} from 'victory'
import XYPlot from './XYPlot'
import Grid from './Grid'

type ScatterPlotProps = 'style' | 'data' | 'size' | 'symbol'
type customProps = {
  fillColor: string
}
type Props = Pick<VictoryScatterProps,  ScatterPlotProps> & customProps

// Whithout grid
const style = {grid: {fill: "none", stroke: "none"}}

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
      <VictoryAxis style={style} />
      <VictoryAxis style={style} dependentAxis/>
      <VictoryScatter
        style={{ data: { fill: fillColor }, parent: { border: "1px solid #ccc" } }}
        size={size}
        symbol={symbol}
        data={data}
      />
    </XYPlot>
  )
}

export default ScatterPlot

