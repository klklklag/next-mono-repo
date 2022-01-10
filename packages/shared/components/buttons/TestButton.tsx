import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Button = () => {
  const [cnt, setCnt] = useState(0);
  const incr = useCallback(() => setCnt(prev => prev + 1), [setCnt]);
  return (
    <TestButton onClick={incr}>{cnt ? `${cnt}회 클릭됨` : '테스트 버튼'}</TestButton>
  );
};

const TestButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0px solid;
  background-color: gray;
  padding: 0px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.45px;
  color: white;

  &:hover { opacity: 0.8; }
  &:active { opacity: 0.5; }
`;

export default Button;