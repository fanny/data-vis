import React, { FunctionComponent, CSSProperties } from 'react'
import { VictoryAxis, VictoryAxisProps } from 'victory'

type Props = Pick<VictoryAxisProps, 'style' | 'dependentAxis'>

const Grid: FunctionComponent<Props> = ({ style, dependentAxis }) => {
  return (
    <VictoryAxis
      style={style}
      dependentAxis={dependentAxis}
    />
  )
}

export default Grid