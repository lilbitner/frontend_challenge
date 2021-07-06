import MaterialTable from 'material-table';
import { styled, Paper } from '@material-ui/core';
import React from 'react';
import { DemoButton } from './demo-button';

interface IDemoList {
  handleRowClick: () => void,
  demoInfo: { demoTitle: string }[]
}
const TableCard = styled('div')({ backgroundColor: 'white', width: '40%' });
const TablePaper = styled(Paper)({ border: '1px solid black' });

export const DemoListTable: React.FC<IDemoList> = ({ demoInfo, handleRowClick }: IDemoList) => {
  const buttonNode = <DemoButton handleClick={handleRowClick}>Start</DemoButton>;
  return (
    <TableCard>
      <MaterialTable
        columns={[
          {
            align: 'left',
            field: 'demoTitle',
            title: 'Demo Title',
          },
          {
            align: 'left',
            render: () => buttonNode,
          },
        ]}
        components={{
          Container: ({ children, ...props }: { children: React.FC }) => <TablePaper {...props}>{children}</TablePaper>,
        }}
        data={demoInfo}
        options={{
          draggable: false,
          padding: 'default',
          paging: false,
          search: false,
          sorting: false,
          tableLayout: 'fixed',
          thirdSortClick: false,
        }}
        style={{
          maxHeight: '30rem',
          overflow: 'auto',
        }}
        title="My Demo's"
      />
    </TableCard>
  );
}
