

import React from 'react'
import { useLocation } from "react-router-dom";
import Comments from '../components/Comments';
import styly from './Detail.module.css';
export const Detail = () => {
    const location = useLocation();
 //locaition.state로 전달 받은 파라미터를 취득 가능
    const item = location.state.data;
   //item 변수에 location.state에서 date(파라미터) 취득

    // 해당 게시글의 댓글 리스트
    const [initChose, setInitChose] = React.useState(item.chose);
    const [initComment, setInitComment] = React.useState(item.reply);
    // item을 location함수를 이용해서 post 페이지에 있는 값을 가져와줌
    const [comment, setComment] = React.useState("");
    // 댓글 초기값을 빈함수로 놔두고 댓글 함수 설정
    // const number = Math.floor(Math.random() * initComment.length);
    //리스트의 컨텐츠의 갯수
    //const replynumber = list.reply.map((replynumbers) => {replynumbers});
    //replynumber.length  
    const value = "";

    const save = (temp) => {
        if( comment !== value){
            const a = {
                reply_id: initComment.length,
                comment: temp,
                heighlight: false       
             }
    
            setInitComment([...initComment, a])
            setComment("")
        } else{
            alert('댓글을 입력하세요')
        }
    }

    const remove = (index) => {
        console.log(index)
        setInitComment(initComment.filter(it => it.reply_id !== index))
        // setInitComment(initComment.filter((it)=> {
        //     console.log(`it :: ${it}`);
            // it.reply_id !== index
        // }))
    }
    // 댓글 삭제
    
    // 추첨하기 함수
    const choose = () => {

        if(initChose){          
            alert('당첨자가 있습니다.')            
        }else{
            doChose()
        }
    }

    const doChose = () => {
        
        const number = Math.floor(Math.random() * initComment.length);
        console.log(number)
        
        alert(`당첨자 댓글은 ${initComment[number].comment} 입니다.`)     
         setInitComment(
        initComment.map((data, index) => {
             return index === number ? { ...data, highlight: true } : data
            } )  )
            setInitChose(true)
          
    }
   // 댓글에 색이 없으면 모든 인덱스 값의 highlight가 false이면
    // 댓글에 색이 있을 때  
    // onChange 함수를 이용해서 이벤트 값을 setComment에 넣기
  return (
    <>
    <div className={styly.big}>
        <h1 className={styly.title}>{item.title}</h1>
        <hr></hr>
        <div className={styly.content}>
           <p>{item.contents}</p>
        </div>
        
        <hr />
        <div>
        <input value={comment} className={styly.input} onChange={(e)=>{setComment(e.target.value)}} />
        <button className={styly.buttonOk} onClick={() => {save(comment)}}>확인</button>
        <button className={styly.buttonCh} onClick={choose}> 댓글 추첨하기</button> 
        </div>
        <p></p>

        {/* 
        <></> === <div>
         */}
        {initComment.map((item, index) => {
            return (
                <>
                <p className={ styly.reply}> 
                 
                 <Comments item={item} />
                 <div className={styly.replyButton} onClick={()=> {remove(item.reply_id)}}/>
                </p>
                 </>
            )
        })}
    </div> 
    </>
  )
}


export default Detail