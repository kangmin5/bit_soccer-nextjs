import axios from 'axios'
import {useState, useEffect } from 'react'
// import style from './style/board-list.module.css'

const Board = ({ columns,data}) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column,index) => (
                        <th key={index}>{ column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0
                    ? <tr>
                        <td>데이타가 없습니다.</td>
                    </tr>
                    : data.map((board,index) => (
                        <tr key={index}>
                            <td>{ board.passenger_id}</td>
                            <td>{ board.name}</td>
                            <td>{ board.team}</td>
                            <td>{ board.subject}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default function BoardList() {
    const columns = ["PassengerId", "Name", "TeamId", "Subject"]
    const [data, setData] = useState([])
    useEffect(() => { 
        axios.get('http://localhost:5000/api/board/list')
            .then(res=> setData(res.data.boards))
            .catch(err => alert(err))
    },[])
    return (
        <>
            <h1> Board List</h1>
            <Board columns={columns} data={data}/>
        </>)
}

