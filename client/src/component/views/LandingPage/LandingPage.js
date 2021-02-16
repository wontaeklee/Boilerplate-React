import {React, useEffect} from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'

function LandingPage(props) {

    useEffect(()=>{
        axios.get('/api/hello')
        .then(response=>console.log(response));
    }, [])

    const logoutHandler = () =>{
        axios.get('/api/users/logout')
        .then(response=>{
           if(response.data.success){
               props.history.push('/login')
           }else{
               alert('로그인 상태가 아닙니다');
           }
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'  }}>
            <h2>시작 페이지</h2>
            <button onClick={logoutHandler}>로그아웃</button>
        </div>
    )
}

export default withRouter(LandingPage)
