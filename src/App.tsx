import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/steniomoreira.png',
      name: 'Stenio Moreira',
      role: 'Front-end Developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galera 👋' },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-10 23:59:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diiegopaiivam.png',
      name: 'Diego Paiva',
      role: 'Back-end Developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galera 👋' },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-12 20:30:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/jamillyp.png',
      name: 'Jamilly Pinheiro',
      role: 'Front-end (Web | Mobile) | UX/UI Designer (Figma)'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galera 👋' },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-02-13 15:45:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />        
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
     
    </>
  )
}
