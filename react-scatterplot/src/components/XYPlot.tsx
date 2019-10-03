import React, { FunctionComponent, ReactNode, ReactElement } from 'react'
import {
  VictoryChart,
  VictoryTheme,
  VictoryContainer,
  VictoryChartProps
} from 'victory'

type XYPlotProps = 'containerComponent' | 'theme' | 'width' | 'height' | 'style'
type Props = Pick<VictoryChartProps, XYPlotProps>

const XYPlot: FunctionComponent<Props> = ({
  children,
  theme=VictoryTheme.material,
  width,
  height,
  containerComponent=<VictoryContainer/>,
  style
}) => {
  return (
    <VictoryChart
      containerComponent={containerComponent}
      theme={theme}
      width={width}
      height={height}
      style={style}
    >
      {children}
    </VictoryChart>
  )
}

export default XYPlot