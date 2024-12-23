import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Board(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log('searchParams:', searchParams)

  // 특정 파미미터 가져오기 
  const titel = searchParams.get('titel')
  const writer = searchParams.get('writer')

  return (
    <div>
      <h2>Board</h2>
      <p>url 의 path 는 "/board" 과 매칭된 컴포넌트</p>
      <hr/>
      {titel && <h3>검색(제목):{titel}</h3>}
      {writer && <h3>검색(글쓴이):{writer}</h3>}
    </div>
  );
}

export default Board;