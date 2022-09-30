import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'
import { createContext } from 'react'
import styles from './App.module.css'
import { useState } from 'react'
import ReactSwitch from 'react-switch'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/capbruno.png',
      name: 'Bruno Nascimento',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/henriquesan14.png',
      name: 'Henrique Santos',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'parahraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-28 17:40:12')
  },
];

export const ThemeContext = createContext(null)

export function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>


      <div id={theme}>

        <Header />
        <div className={styles.btnToggle}>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>

      </div>
    </ThemeContext.Provider>
  )
}


