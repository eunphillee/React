import React from 'react';

//위부에서 사용할 컴포넌트 
function Box() {
    const boxsize = {
        width: 100,
        height: 100,
    }
     // boxsize 변수를 상태 변수로 정의하세요. 초기값은 boxsize 입니다.
     
    const[size,setSize] = useState(boxsize)

    const handleResize = (e) => {
        switch (e.target.id) {
            case "width_inc":
                boxsize.width+=10
                break;
            case "width_dec":
                boxsize.width-=10
                break;
            case "height_inc":
                boxsize.height+=10
                break;
            case "height_dec":
                boxsize.height-=10
                break;
            default:
                break;
        }
    }

    return (
        <>
            <button onClick={handleResize} id ="width_inc">가로+</button>
            <button onClick={handleResize} id ="width_dec">가로-</button>
            <button onClick={handleResize} id ="height_inc">세로+</button>
            <button onClick={handleResize} id ="height_dec">세로-</button>
        <div id='container'>
            <SandBox size={boxsize}/>
        </div>
        </>
    );
}

// 이 파일 안에서만 사용할 컴포넌트 
function SandBox({size}){
    const boxstyle = {
        width: `${size.width}px`,
        height: `${size.height}px`,
        background: 'yellow'
    }
    return (<div style={boxstyle}>
        
        </div>)
   
}

export default Box;