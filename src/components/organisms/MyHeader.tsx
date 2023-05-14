import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../resource/company_logo.png';

function MyHeader() {
  /**
   * Styled-Components를 적용한 antd Header
   */
  const StyledHeader = styled(Header)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  /**
   * Styled-Components를 적용한 antd Link
   */
  const StyledLink = styled(Link)`
    display: flex;
    width: 100px;
    height: 35px;
  `;

  /**
   * Styled-Components를 적용한 img태그
   */
  const StyledImage = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
  `;

  return (
    <StyledHeader>
      <StyledLink to={'/home'}>
        <StyledImage src={logo} alt="Hyundai-WIA LOGO" />
      </StyledLink>
    </StyledHeader>
  );
}

export default MyHeader;
