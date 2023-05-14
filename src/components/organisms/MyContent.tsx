import type { BreadcrumbProps } from 'antd';
import { Breadcrumb } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import ActionList from '../../pages/ActionList';
import Home from '../../pages/Home';
import PageNotFound from '../../pages/PageNotFound';
import TopicList from '../../pages/TopicList';

function MyContent() {
  /**
   * Styled-Components를 적용한 antd Breadcrumb
   */
  const StyledBreadcrumb = styled(Breadcrumb)`
    background-color: rgb(231, 233, 235);
  `;

  /**
   * 기정의된 pagesInfo Dictionary List를 이용해 BreadcrumbItem을 만드는 메서드
   * @returns
   */
  const generateBreadcrumbItems = (): BreadcrumbProps['items'] => {
    const result: BreadcrumbProps['items'] = [];

    return result;
  };

  return (
    <Content>
      <StyledBreadcrumb separator=">" items={generateBreadcrumbItems()} />
      <Routes>
        {/* 기본 제공 Page URL */}
        <Route path="/home" element={<Home />} />
        <Route path="/topic" element={<TopicList />} />
        <Route path="/action" element={<ActionList />} />

        {/* 기본 제공 Page URL 이외에 대한 예외처리 */}
        <Route path="/" element={<Navigate replace to={'/home'} />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Content>
  );
}

export default MyContent;
