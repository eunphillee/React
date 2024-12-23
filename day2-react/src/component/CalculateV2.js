import React, { useState } from 'react';
import '../App.css'

function Calculate2() {
// useState 훅으로 정의한 변수는 상태 변수
  const [first,setFirst] = useState(0)
  const [second,setSecond] = useState(0)
  const [op,setOp] = useState('')
  const [result, setResult] = useState(0)
  
  // 상태 변수 username 또는 nickname 값이 변경되면 리렌더링.콘솔 출력
  console.log('리렌더링',first, second)

  // OK 버튼 이벤트
  const handleCalculate = (e) => {
      const sel = e.target.innerHTML
      setOp(sel)
      switch (sel) {
        case '+':
          setResult(first+second)
          break;
        case '-':
          setResult(first-second)
          break;
        case '×':
          setResult(first*second)
          break;
        case '÷':
          setResult(first/second)
          break;
        default:
          setResult(0)
          break;
      }
  }


  return (
    <div>
          <h3>input 에 state 변수 활용</h3>
          <p>input value 에 상태변수를 적용하면 onChange 이벤트 꼭 필요합니다.</p>
          <hr/>
          <input type='text'
                placeholder='첫번째 값을 입력하세요.'
                value={first} 
                onChange={(e) => setFirst(Number(e.target.value))}
          />      
          <span id="op">{op}</span>
          <input type='text'
                placeholder='두번째 값을 입력하세요.'
                value={second}
                onChange={(e) => setSecond(Number(e.target.value))}
          /> 
          <span id="op">=</span>
          <input type='text'
                 value={result} disabled
          />       
          <hr/>     
          <div className="calcBtn">
            <button onClick={handleCalculate}>+</button>
            <button onClick={handleCalculate}>-</button>
            <button onClick={handleCalculate}>×</button>
            <button onClick={handleCalculate}>÷</button>
          </div>
    </div>
  )
}

export default Calculate2;