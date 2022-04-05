import React,{useState} from 'react'
import style from "board/style/board-form.module.css"

export default function TeamForm() {
    const [inputs, setInputs] = useState({})
    const [inputList,setInputList] = useState([])
    const {teamId,teamRegion,teamName,orgYyyy,stadiumName,address,tel } = inputs

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name,value}=e.target      
        setInputs({...inputs,[name]:value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const newData = {
            teamId: teamId,
            teamRegion: teamRegion,
            teamName: teamName,
            orgYyyy: orgYyyy,
            stadiumName: stadiumName,
            address: address,
            tel: tel
        }
        alert(`등록할 팀 정보 : ${JSON.stringify(inputs)}`)
        setInputList(oldData => [newData, ...oldData])

    }

    return (<>
        <div className={style.container}>
            <h1>Team Form</h1>
            <form onSubmit={onSubmit}>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamId">팀 ID</label>
                    </div>
                    <div className={style.col75}>
                            <input type="text" className={style.inputText} id="teamId" name="teamId" value={inputs.value} onChange={handleSubmit} />
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamRegion">연고지</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="teamRegion" name="teamRegion" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamName">팀명</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="teamName" name="teamName" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="orgYyyy">창단년도</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="orgYyyy" name="orgYyyy" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="stadiumName">스타디움 명칭</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="stadiumName" name="stadiumName" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="address">주소</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="address" name="address" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="tel">전화번호</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="tel" name="tel" value={inputs.value} onChange={handleSubmit}/>
                    </div>
                </div>
                <br/>
                <div className={style.row}>
                    <input type="submit" className={style.inputSubmit}
                    value="Submit"/>
                </div>
            </form>
            <div>
                <h2>Team List</h2>
                <ul className={style.lis}>
                    {inputList.map((newList, index) => {
                        return (
                            <li key={index}>{newList.teamName }</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </>)
}