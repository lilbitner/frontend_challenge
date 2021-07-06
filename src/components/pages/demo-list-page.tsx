import React from 'react';
import { demoList, routes } from '../../constants/demo-constants';
import { useHistory } from 'react-router-dom';
import { DemoListTable } from '../atoms/demo-list-table';
import DemoListTemplate from '../templates/demo-list-template';

export const DemoListPage: React.FC = () => {
  const history = useHistory();
  return (
    <DemoListTemplate>
      <DemoListTable demoInfo={demoList} handleRowClick={() => history.push(routes.demoPresentation)} />
    </DemoListTemplate>
  )
}

export default DemoListPage
