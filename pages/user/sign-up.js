import axios from 'axios'
import React,{useState} from 'react'
import styles from './styles/sign-up.module.css'

export default function SignUp() {
    const proxy="http://localhost:5000"
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(proxy+'/api/user/signup', inputs)
            .then(res => {
                const signup = res.data
                document.getElementById("result-span").innerHTML = `
                <h3> ${'['+signup.username+']'} 님 회원 가입을 환영합니다.</h3>
                `
            })
            .catch(err=>alert(err))
    }

  return (
    <div className={styles.container}>
      <h1>회원가입</h1>
          <form onSubmit={onSubmit} >
            <div>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                />
            </div>
              <div>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
            </div>  
              <div>
              <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            </div>  
              <div>
              <input
              type="text"
              placeholder="telephone"
              name="telephone"
              onChange={handleChange}
            />
            </div>  
        
        <button type="submit">submit</button>
      </form>
      <div>

        <div> 결과 : <span id="result-span"></span></div>
      </div>

    </div>
  )
}
