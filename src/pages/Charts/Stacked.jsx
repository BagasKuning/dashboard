import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { Header } from "../../components"
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'

export default function Stacked() {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category={"Stacked Column"} title={"Monthly Budget and Expense Analysis"} />

      <ChartComponent
        id='chart'
        height='420px'
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[ StackingColumnSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}
