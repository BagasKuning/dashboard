import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BarSeries, Legend, Tooltip, DataLabel, Category } from '@syncfusion/ej2-react-charts'
import { Header } from "../../components"
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'

export default function Bar() {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={"Chart"} title={"Olympic Medal Counts"} />

      <ChartComponent
        id='chart'
        height='420px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[ BarSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
