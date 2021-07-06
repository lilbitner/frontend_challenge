import React from 'react';
import { demoList, routes } from '../../constants/demo-constants';
import { useHistory } from 'react-router-dom';
import { DemoList } from '../atoms/demo-list';
import DemoListTemplate from '../templates/demo-list-template';

export const DemoListPage: React.FC = () => {
  const history = useHistory();
  return (
    <DemoListTemplate>
      <DemoList demoInfo={demoList} handleRowClick={() => history.push(routes.demoPresentation)} />
    </DemoListTemplate>
  )
}

export default DemoListPage
