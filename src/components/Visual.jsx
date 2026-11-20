import React from 'react'

const Visual = ({sub,title}) => {


  const onClickButton=()=>{
    console.log(title);
    
    // title이 console에 찍히게 만들기
  }

  return (
    <section className='visual'>
      {/* App.jsx 에서 보낸 데이터 나오게 하기 */}
      <p>{sub}</p>
      <h2>{title}</h2>
      <button 
      className='btn' 
      onClick={onClickButton}
      // 이벤트 등록하기
      >메뉴보러가기</button>
    </section>
  )
}

export default Visual