import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>Calc</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/board/board-list'>BoardList</Link> </li>
        <li className={styles.li}> <Link href='/board/board-form'>BoardForm</Link> </li>
        <li className={styles.li}> <Link href='/board/team-form'>TeamForm</Link> </li>
        <li className={styles.li}> <Link href='/game/game-list'>GameList</Link> </li>
        <li className={styles.li}> <Link href='/game/team-list'>TeamList</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo-list'>TodoList</Link> </li>
        <li className={styles.li}> <Link href='/user/login'>Login</Link> </li>
        <li className={styles.li}> <Link href='/user/join'>Join</Link> </li>
        <li className={styles.li}> <Link href='/user/user-list'>UserList</Link> </li>
        
        
      </ul>
    </nav>
  );
}

