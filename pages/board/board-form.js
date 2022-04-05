import axios from "axios"
import { useState } from "react"
import style from "./style/board-form.module.css"

export default function BoardForm() {
    const [inputs, setInputs] = useState({})
    const [list,setList] = useState([])
    const {passengerId,name,teamId,subject}= inputs
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name,value}=e.target      
        setInputs({ ...inputs, [name]: value })
        

    }
    const handleClick = (e) => {
        e.preventDefault()
        // alert(`등록할 게시글: ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/board/write',inputs)
        .then(res => {
            alert(JSON.stringify(res.data.result))
        })
        .catch(err => alert(err))
    }


    return (<>
        <div className={style.container}>
            <h1>Board Form</h1>
            <form onSubmit={handleClick}>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="passengerId">PassengerId</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} name="passengerId" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} name="name" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                    <label htmlFor="team">Team</label>
                    </div>
                    <div className={style.col75}>
                    <select name="teamId" value={inputs.value}  onChange={handleSubmit} >
                        <option value="K09" >Fc seoul</option>
                        <option value="K02">Suwon Samseong blue wings</option>
                        <option value="K04" >Incheon United</option>
                    </select>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                    <label htmlFor="subject">Subject</label>
                    </div>
                    <div className={style.col75}>
                    <input type="textarea"  id="subject" name="subject"  style={{height:200 + "px"}} onChange={handleSubmit}></input>
                    </div>
                </div>
                <br/>
                <div className={style.row}>
                        <input type="submit"
                            className={style.inputSubmit}
                            value="Submit"

                        />

                </div>
            </form>

        </div>
    </>)
}
