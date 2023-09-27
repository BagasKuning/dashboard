import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,
        Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
        import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'
import { Header } from '../components'


export default function Orders() {

  const { currentMode } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };
  
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        editSettings={editing}
        contextMenuItems={contextMenuItems}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}
