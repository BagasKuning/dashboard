import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


export default class SparkLineChart extends React.PureComponent
{
  render() 
  {
    const { id, type, height, width, data, currentColor, color } = this.props;
    console.log(data.map((a) => a.y))
    return <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth='1'
      valueType='Numeric'
      type={type}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x-axis'
      yName='y-axis'
      tooltipSettings={{
        visible: true,
        
        // still have problem here
        format: `X : ${this.props.data.map((a) => a.x)}  ,  Y : ${this.props.data.map((a) => a.y)}`,
        trackLineSettings: { visible: true }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  }

}





















// export default function SparkLine({ id, height, width, color, data, type, currentColor }) {
//   return (
//     <div>
//       <SparklineComponent
//         id={id}
//         height={height}
//         width={width}
//         lineWidth={1}
//         valueType='Numeric'
//         fill={color}
//         border={{color: currentColor, width: 2}}
//         dataSource={data}
//         xName='x'
//         yName='y'
//         type={type}
//         tooltipSettings={{
//           visible: true, 
//           format: '${x} : data ${y}',
//           trackLineSettings: {
//             visible: true
//           }
//         }}
//       >
//         <Inject services={[SparklineTooltip]} />
//       </SparklineComponent>
//     </div>
//   )
// }
