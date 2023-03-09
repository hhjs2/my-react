import React, { Component } from 'react';
import hs2 from './img/hs2.png';
import style from './Write.module.css'

function Write () {
    return (
        <div >
            < h1 className={style.title}> ~ 홍시에 대해 소개 합니다 ~</h1>
             <div className={style.big}>
             <img src={hs2} className={style.hs2}/>
            
               <div className={style.first}>
                <p className={style.push2}>이름 : 홍시</p>
                <p  className={style.push}> 나이 : 3년 6개월 </p>
                <p className={style.push2} >성별 : 여자</p>
                <p className={style.push}>몸무게 : 거대한 6kg</p>
                <p className={style.push2}>특징 : 귀여움</p> 
                <p className={style.push}>좋아하는 거 : 파란 깃털 낚시대, 밥</p>
                <p className={style.push2}>싫어하는 거 : 귤 </p>
                <p className={style.push}>좋아하는 장소 : 창문 위, 냉장고 위 </p>                    
                <p className={style.push2}>싫어하는 장소 : 새로운 집</p>
                </div>            
               </div> 
         </div> )
}
         

    export default Write ;