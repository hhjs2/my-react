import React from 'react';
import Write from "./Write"
import { Modal1 } from "./Modal1"
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import style from './post.module.css';
import hs from './img/hs1.png';
import gwx from './img/5555.png';

const Post = () => {

  const navigate = useNavigate();


  const list = [
    {
      pk: 0,
      title: "제목",
      contents: "내용",
      chose: false,
      reply: [
        {
          reply_id: 0,
           comment: '댓글',
           highlight: false
        },
        {
          reply_id: 1,
          comment: '댓글1',
          highlight: false
       },
       {
        reply_id: 2,
        comment: '댓글2',
        highlight: false
     },
     {
      reply_id: 3,
      comment: '댓글3',
      highlight: false
     }
      ]
    }
  ]

  // map 리스트 나열할 때 (item 변수 이름,순서)
  // const a = () => {
  //   const list = ['a', 'b', 'c', 'd'];

  //   // for(let i=0; i < list.length; i ++){
  //   //   console.log(list[i])
  //   // }

  //   for(const item in list){
  //     console.log(item)
  //   }
  // }


  const [open, setOpen] = React.useState(false);
  const [initList, setInitList] = React.useState(list);

  React.useEffect(() => {console.log(initList)},[initList])
  const write = () => {
    navigate('/write')
  }
  const modal = () => {
    setOpen(true)
  }

  // const add = () => {
  //   const listItem =  {
  //     pk: initList.length,
  //     title: "제목",
  //     contents: "내용",
  //     reply: [
  //       {
  //         reply_id: 0,
  //         comment: '댓글1',
  //         highlight: false
  //      },
  //      {
  //       reply_id: 1,
  //       comment: '댓글2',
  //       highlight: false
  //    },
  //    {
  //     reply_id: 2,
  //     comment: '댓글3',
  //     highlight: false
  //    }
  //     ]
  //   }
  //   setInitList([...initList, listItem])
  //   // setInitList(initList.push(listItem))
  // }

  const detail = (item) => {
    navigate('/detail', {
      state: {
        data: item
      }
    }
    )
  }

//navigate('/이동경로',{state:{키:값, 키:값}}) state속성에 파라미터(키값)를 넣어줌
//navigate('/register', {state: {path:'', date: {} }});
//navigate의 두번째 인자인 options의 state에 현재 path와 보관해야할 date 값이 담긴 객체 전달
//path : 이전 경로, data : 이전 데이터


  const remove = (index) => {
    // setInitList(initList.filter((it) => {it.pk !== index }))
    console.log(index)
    setInitList(initList.filter(it => it.pk !== index))
  }




  return (
    <>
      {/* <Modal1 open={open} /> */}
      <Modal1 open={open} setOpen={setOpen} initList={initList} setInitList={setInitList}/>
      <header>
        <div style={{display:'flex'}}>
        <img  className={style.hs} src={hs}></img>
        <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>     
        <h1 className={style.titleName} img src={hs} >홍시's  H O U S E</h1> 
        </div>
        </div>
        <hr className={style.hr}/>        
        <div className={style.click}>
        < button className= {style.button1} onClick={() => write()}> 홍시 소개 </button>
        <button className= {style.button1} onClick={() => {modal(); /*handleUpload();*/}}> 글 작성 </button>
        </div>
        <hr className={style.hr}/>
        {/* <button className= {style.button1} onClick={add}> 추가 테스트 </button> */}
      </header>

      {
        initList.map((a, b) => {
          return (
            <>
              
              <div style={{display: 'flex'}}>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h1  className={style.Name} onClick={() => {detail(a)}}>{a.title}</h1>
              {/* <i class="ri-delete-bin-7-line"></i> */}
              <div className={style.imgButton}  onClick={() => {remove(a.pk)}} />
              </div>
              </div>
              {/* <h3> {a.reply[0].comment} </h3>  */}
              <hr className={style.hr}/>
            </>
          )
        })
      }
      
    </>
  );
}

export default Post;