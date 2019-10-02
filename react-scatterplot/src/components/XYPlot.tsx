import React, { FunctionComponent, ReactNode, ReactElement } from 'react'
import {
    VictoryChart,
    VictoryThemeDefinition,
    VictoryStyleInterface,
    VictoryTheme,
    VictoryContainer
} from 'victory'

type Props = {
    containerComponent?: ReactElement
    theme?: VictoryThemeDefinition
    width: number
    height: number
    style?: VictoryStyleInterface
    children?: ReactNode
}

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