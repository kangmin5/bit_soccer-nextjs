import style from './style/board-list.module.css'

export default function BoardList() {
    return (
        <>
        <div className={style.container}>
        <h1>BOARD List</h1>
                <table>
                    <thead>
                        <tr>
                            <td> passengerId</td>
                            <td> name</td>
                            <td>teamId</td>
                            <td>subject</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>338383</td>
                            <td>23232332</td>
                            <td>23232</td>
                            <td>2323233</td>                       
                        </tr>
                        <tr>
                            <td>338383</td>
                            <td>23232332</td>
                            <td>23232</td>
                            <td>2323233</td>                       
                        </tr>
                        <tr>
                            <td>338383</td>
                            <td>23232332</td>
                            <td>23232</td>
                            <td>2323233</td>                       
                        </tr>
                    </tbody>
                
                
                </table>
            
            
            
            </div>
        
        </>)
}