import React from 'react';
import Calculate2 from './component/CalculateV2';
import CalculateRef from './component/CalculateRef';
import './App.css';
import CounterRef from './component/CounterRef';

function App(props) {
    return (
        <div className="App">
            <Calculate2 />
            <CalculateRef/>
            <hr/>
            <CounterRef/>
        </div>
    );
}

export default App;