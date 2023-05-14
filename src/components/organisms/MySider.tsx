import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import { HomeOutlined, ApiOutlined, FireOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

import ActionList from '../../pages/ActionList';
import Home from '../../pages/Home';
import TopicList from '../../pages/TopicList';

function MySider() {
  // Sider 조작 관련 useState
  const [collapsed, setCollapsed] = useState(true);

  /**
   * Styled-Components를 적용한 div태그
   */
  const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 8px 5px;
  `;

  /**
   * Fold Button 클릭 시 동작 이벤트
   */
  const onClickFold = () => {
    setCollapsed(!collapsed);
  };

  /**
   * Menu Button 클릭 시 동작 이벤트
   * @param info
   */
  const onClickMenu: MenuProps['onClick'] = info => {
    switch (info.key) {
      case 'Home':
        console.log('home');
        break;
      case 'Topic':
        console.log('topic');
        break;
      case 'Action':
        console.log('action');
        break;
      default:
        console.log(info.key);
        break;
    }
  };

  type MenuItem = Required<MenuProps>['items'][number];

  /**
   * 기정의된 pagesInfo Dictionary List를 이용해 MenuItem을 만드는 메서드
   * @returns
   */
  const generateMenuItems = (): MenuItem[] => {
    const result: MenuItem[] = [];

    return result;
  };

  return (
    <Layout.Sider collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
      <StyledButtonWrapper>
        <Button type="primary" onClick={onClickFold}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </StyledButtonWrapper>
      <Menu
        theme="dark"
        mode="vertical"
        items={[
          { key: 'Home', title: 'Home', label: <Home />, icon: <HomeOutlined /> },
          { key: 'Topic', title: 'Topic', label: <TopicList />, icon: <ApiOutlined /> },
          { key: 'Action', title: 'Action', label: <ActionList />, icon: <FireOutlined /> },
        ]}
        onClick={onClickMenu}
      />
    </Layout.Sider>
  );
}

export default MySider;
