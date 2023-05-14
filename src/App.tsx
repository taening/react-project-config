import { Layout } from 'antd';
import { HomeOutlined, ApiOutlined, FireOutlined } from '@ant-design/icons';
import React from 'react';

import './App.css';
import MySider from './components/organisms/MySider';
import MyHeader from './components/organisms/MyHeader';
import MyFooter from './components/organisms/MyFooter';
import MyContent from './components/organisms/MyContent';
import ActionList from './pages/ActionList';
import Home from './pages/Home';
import TopicList from './pages/TopicList';

const App = () => {
  // Path 관련 정보로 Menu, Breadcrumb 등의 정보를 구분해서 UI에 표시해야함
  type PagesInfoProps = {
    name: string;
    path: string;
    element: JSX.Element;
    icon?: JSX.Element;
    children?: PagesInfoProps[];
  };

  // TODO: DB로 전환해야할듯?
  const pagesInfo: PagesInfoProps[] = [
    { name: 'Home', path: '/home', element: <Home />, icon: <HomeOutlined /> },
    { name: 'Topic', path: '/topic', element: <TopicList />, icon: <ApiOutlined /> },
    { name: 'Action', path: '/action', element: <ActionList />, icon: <FireOutlined /> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MySider />
      <Layout>
        <MyHeader />
        <MyContent />
        <MyFooter />
      </Layout>
    </Layout>
  );
};

export default App;
