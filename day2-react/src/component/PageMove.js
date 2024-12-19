import React, { useState } from 'react';

// 연습문제
// 버튼 2개로 페이지 번호를 앞 또는 뒤로 이동 
// 상태 변수 1개 

function PageMove({last=12}) {
    // 전체 페이지 개수로 last 값 설정. 부모 컴포넌트에서 전달 
    // const start = 1
    // const last =29

    // 페이지 번호는 1~ last 범위에서만 변경합니다. 
    const[pageno, setPageno] = useState(5)


    const handlePrev =() =>{
        // -1
        setPageno(pageno-1)

    }

    const handleNext =() =>{
         // +1
         setPageno(pageno+1)

    }
    return (


        <div>
                <h2>상태 변수 값을 button 속성 설정 </h2>
                <h3>현재 페이지번호 :{pageno}</h3>
                <button onClick={handlePrev}disabled={pageno==1}
                        style={{fontSize:'20px'}}>&lt;</button>
                <button onClick={handleNext}disabled={pageno==1}
                        style={{fontSize:'20px'}}>&gt;</button>
      
        </div>
    )
}

export default PageMove;