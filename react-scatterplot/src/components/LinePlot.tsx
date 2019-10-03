import React, { FunctionComponent } from 'react'
import { VictoryLine, VictoryVoronoiContainer } from 'victory'
import XYPlot from './XYPlot';


const myData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
]
const LinePlot: FunctionComponent = () => {
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
        <VictoryLine
          data={myData}
        >

        </VictoryLine>
        </XYPlot>
    )
}

export default LinePlot