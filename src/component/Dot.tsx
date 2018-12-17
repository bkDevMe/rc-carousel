import * as React from 'react'
import * as styledComponents from 'styled-components'

export const Dot = styledComponents.default('span')<{ selected: boolean; selesctedColor?: string }>`
  display: inline-block
  width: 0.3rem
  height: 0.3rem
  border-radius: 0.15rem
  background-color: ${props => (props.selected ? props.selesctedColor || '#da373d' : 'grey')}
  margin: 0.3rem 0.15rem
  opacity: ${props => (props.selected ? 1 : 0.3)}
  transition-duration: 0.3s
`

export const WrapperDot = styledComponents.default('div')<{ width: number }>`
  position: absolute
  width: ${props => props.width}px
  z-index: 100
  bottom: 0.1rem
  text-align: center
  background-color: transparent
`

const IndicatorDot: React.SFC<{
  total: number
  currentIndex: number
  width: number
  selesctedColor: string
  slideItems: React.ReactNode[]
}> = ({ total, currentIndex, width, selesctedColor, slideItems }) => {
  if (total < 2) {
    return <Dot selected={true} />
  } else {
    return (
      <WrapperDot width={width}>
        {(slideItems as React.ReactNode[]).map((dot, i) => {
          return <Dot selesctedColor={selesctedColor} selected={i === currentIndex - 1} key={i} />
        })}
      </WrapperDot>
    )
  }
}

export default IndicatorDot
