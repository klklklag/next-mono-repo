import React, { useCallback, useState } from 'react';

const Button = () => {
  const [cnt, setCnt] = useState(0);
  const incr = useCallback(() => setCnt(prev => prev + 1), [setCnt]);
  return (
    <button onClick={incr}>{cnt ? `${cnt}회 클릭됨` : '테스트 버튼'}</button>
  );
}

export default Button;