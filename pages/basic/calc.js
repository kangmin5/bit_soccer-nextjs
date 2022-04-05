import React, { useState } from "react";
import axios from "axios";

export default function Calc() {
    const [inputs, setInputs] = useState({opcode: "+"})
    // const { num1, num2, opcode} = inputs

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({...inputs, [name]: value})
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/calc', inputs)
        .then(res => {
            // const calc = res.data
            // document.getElementById('calc-result').innerHTML = `
            // <h3>num1 : ${calc.num1}</h3>
            // <h3>opcode : ${calc.opcode} </h3>
            // <h3>num2 : ${calc.num2} </h3>
            // <h3>calc결과 : ${calc.calc}</h3>
            // `
            const calc = res.data
            document.getElementById('calc-result').innerHTML = `
                <h3>${calc.num1} ${calc.opcode} ${calc.num2} = ${calc.res}</h3>
            `
        })
        .catch(err => alert(err))
    }

    return (<>
        <h1>계산기</h1>
        <form action="" onSubmit={onSubmit}>

            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> <br />

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />

            <button type="submit">계산하기</button>
        </form>

        <div>결과 : <span id="calc-result"></span> </div>
    </>
    )
}