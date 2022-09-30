import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=50"
        />

        <div className={styles.profile}>

          <Avatar src="https://github.com/capbruno.png" />

          <strong>Bruno Nascimento</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  )
}