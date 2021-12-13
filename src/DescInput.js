import './DescInput.css';
import { Component, useEffect, useRef } from 'react';

function DescInput(props) {

    const input = useRef();

    useEffect(()=>{
        input.current = document.querySelector('input');
    });

    return (
        <form className='desc-input'>
            <input type='text'></input>
            <button type='submit' onClick={(e) => {
                const text = input.current.value;
                props.send(text);//부모한테 받은 함수send호출 후 매개변수(인풋텍스트)
                e.preventDefault();
            }}>추가</button>
        </form> //자료를 전달하는 버튼은 폼안에 있어야함
    );
}




// class DescInput extends Component {
//     render() {
//         return (
//             <form className='desc-input'>
//                 <input type='text' id="user_text"></input>
//                 <button type='submit' onClick={(e)=>{
//                     console.log(document.querySelector('.desc-input'));
//                     const  text = 
//                         document.querySelector('input').value;
//                     this.props.send(text);//부모한테 받은 함수send호출 후 매개변수(인풋텍스트)
//                     e.preventDefault();
//                 }}>추가</button> 
//             </form> //자료를 전달하는 버튼은 폼안에 있어야함
//         );
//     }
// }
export default DescInput;
