import React, { FunctionComponent } from 'react'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  MarkSeries
} from 'react-vis'
//import '../../node_modules/react-vis/dist/style.css'

const myData = [
    {x: 1, y: 10, size: 30},
    {x: 1.7, y: 12, size: 10},
    {x: 2, y: 5, size: 1},
    {x: 3, y: 15, size: 12},
    {x: 2.5, y: 7, size: 4}
]
  

const ScatterPlot =() => {
    return (
        <XYPlot height={200} width={200}>
          <XAxis/>
          <YAxis/>
          <VerticalGridLines />
          <HorizontalGridLines />
          <MarkSeries
            sizeRange={[5, 15]}
            data={myData}
          />
        </XYPlot>
    )
}

export default ScatterPlot