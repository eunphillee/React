import React, { useState } from 'react';

//위부에서 사용할 컴포넌트 
function Box() {
    // 값 저장 일반객체 
    // const boxsize = {
    //     width: 100,
    //     height: 100,
    // }
     // boxsize 변수를 상태 변수로 정의하세요. 초기값은 boxsize 입니다.
     
    const [boxwidth,setWidth] = useState(100)
    const [boxheight,setheight] = useState(100)

    const handleResize = (e) => {
        switch (e.target.id) {
            case "width_inc":
                setWidth(boxwidth+10)
                break;
            case "width_dec":
                setWidth(boxwidth-10)
                break;
            case "height_inc":
                setheight(boxheight+10)
                break;
            case "height_dec":
                setheight(boxheight-10)
                break;
            default:
                break;
        }
    }

    return (
        <>
        {/* 숙제: 위치 이동 버튼 4개 추가. 함수이름 handleposition
            state(상태) 변수 이름 : boxleft , boxtop
        */}
            <button onClick={handleResize} id ="width_inc">가로+</button>
            <button onClick={handleResize} id ="width_dec">가로-</button>
            <button onClick={handleResize} id ="height_inc">세로+</button>
            <button onClick={handleResize} id ="height_dec">세로-</button>
        <div id='container'>
            {/* SandBox 렌더링 하기 위해 너비, 높이를 전달해 줍니다.  */}
            <SandBox width={boxwidth} height={boxheight}/>
        </div>
        </>
    );
}

// 이 파일 안에서만 사용할 컴포넌트 
function SandBox(props){  // SandBox({width, height})
    // 스타일 적용할 객체
    // Box 컴포넌넌트에서 전해준 너비, 높이를 스타일 객체에 적용합니다. 
    const boxstyle = {
        
        width: `${props.width}px`,
        height: `${props.height}px`,
        left: '100px',
        top: '100px',
        position: 'absolute',
        background: 'yellow'
    }
    return (<div style={boxstyle}>
        
        </div>)
   
}

export default Box;