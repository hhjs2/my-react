import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import Button from './Modal1';
import styled from 'styled-components';
import style from './Modal1.module.css';

// export const Modal1 = ({open, setOpen}) => {
export const Modal1 = (props) => {

    const { open, setOpen, initList, setInitList } = props;
    // const {initList, setInitList} = props;

    const close = () => {
        setOpen(false);
    }

    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');

    const handleInputchange = (e) => {
        setInput(e.target.value)
    }

    const handleInputchange2 = (e) => {
        setInput2(e.target.value)
    }

    
    const handleUpload = () => {

        if (input === '') {
            alert('제목을 작성해 주세요')
            return
        }
        if (input2 === ''){
            alert('내용을 입력해주세요')
            return
        }
            const item = {
                pk: initList.length,
                title: input,
                contents: input2,
                reply: [],
                chose: false
            }
            setInitList([...initList, item])
            close()
            setInput("")
            setInput2("")
        
    }

    const Button = styled.div`
    padding: 30px
    width: 200px
    background: green;`


    console.log(input);
    return (
        <Modal isOpen={open} className={style.titleModal}>
            <div className={style.modal}>
                <button className={style.modalAction} onClick={close}>창닫기 X</button>
                <div className={style.modalText}>
                    <h1 className={style.wirte}>글작성</h1>
                    <p className={style.wirte} >제목</p>
                    <input type="text" className={style.input} value={input} onChange={handleInputchange}></input>
                    <p className={style.wirte}>내용</p>
                    <input type="text" className={style.input} value={input2} onChange={handleInputchange2}></input>
                    <p></p>
                    < button className={style.push} onClick={handleUpload}>등록하기</button>
                </div>
            </div>

        </Modal>
    )
}

/*
   const [WriteUpload, setWriteUpload] = useState({
       title: '',
       content: ''
   })

   const getValue = e => {
       const { name, value } = e.target;
   }
console.log(input);

return (
<Modal isOpen={open}>
   <p>제목</p>
   <input type="text" onChange={getValue} ></input> 
   <p>내용</p>
   <input type="text"></input> 
   < button onClick={() => {}}> Upload</button>
   {names.map((name, idx) => { 
       return <p key={idx}>{name}</p>
   })}
   <button onClick={close}>X</button>
</Modal>
)
}
*/