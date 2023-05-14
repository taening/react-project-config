import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import styled from 'styled-components';

function MyFooter() {
  /**
   * Styled-Components를 적용한 antd Footer
   */
  const StyledFooter = styled(Footer)`
    font-weight: bold;
    text-align: center;
  `;

  return <StyledFooter>Hyundai-WIA ©2023 Created by SF-Solution Development Team</StyledFooter>;
}

export default MyFooter;
