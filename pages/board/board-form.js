import axios from "axios"
import { useState } from "react"
import style from "./style/board-form.module.css"

export default function BoardForm() {
    const proxy="http://localhost:5000"
    const [inputs, setInputs] = useState({})

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name,value}=e.target      
        setInputs({ ...inputs, [name]: value })
        

    }
    const handleClick = (e) => {
        e.preventDefault()
        // alert(`등록할 게시글: ${JSON.stringify(inputs)}`)
        axios.post(proxy+'/api/board/write',inputs)
            .then(res => {
            const board = res.data
            alert(JSON.stringify(board))
        })
        .catch(err => alert(err))
    }


    return (<>
        <div className={style.container}>
            <h1>Board Form</h1>
            <form onSubmit={handleClick}>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="passenger_id">
                            PassengerId</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText}
                            name="passenger_id" 
                            onChange={handleSubmit} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText}
                            name="name" 
                            onChange={handleSubmit} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                    <label htmlFor="team">Team</label>
                    </div>
                    <div className={style.col75}>
                        <select name="team_id" 
                            onChange={handleSubmit} >
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
                        <input type="textarea" id="subject" name="subject"
                            style={{ height: 200 + "px" }} onChange={handleSubmit}>
                        </input>
                    </div>
                </div>

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
