import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles/user-list.module.css'

const Table = ({ columns, colspan, data}) => {
    return (
      <table className={styles.table}>
        <thead>
            {/**<th key={column} className={styles.td}>{column}</th> */}
            <tr className={styles.tr}  >
            {columns.map((column,index) => (
                  <th className={styles.td} key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
                {data.length == 0
                    ? <tr className={styles.tr}>
                            <td colSpan={colspan} className={styles.td}>데이터가 없습니다</td>
                        </tr>
                    : data.map((user) => (
                        <tr className={styles.tr}  key={user.username} >
                            <td className={styles.td}>
                                <Link href={{pathname:`/user/[username]`,
                                            query:{selectedUser: 'test'}}} as={`/user/${user.username}`}>
                                <a>{user.username}</a>
                                </Link>
                        </td>
                            <td className={styles.td}>{user.password}</td>
                            <td className={styles.td}>{user.name}</td>
                            <td className={styles.td}>{user.telephone}</td>
                        </tr>
            ))}
        </tbody>
      </table>
    );
  }
  
export default function UserList() {
    const columns = ["Username", "Password", "Name", "Telephone"];
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/list').then(res => {
            setData(res.data.users)
        }).catch(err => { })
    }, [])
    return (<>
        <h1>사용자 목록</h1>
        <div className={styles.td}>
            <Table columns={columns} colspan={4} data={data} />
        </div>
    </>)
}