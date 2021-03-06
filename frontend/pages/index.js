import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

import { useState } from 'react'
import axios from 'axios'
import config from '../config/config'
import Link from 'next/link'

 // export default function Home({ token }) {
  export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div className={styles.gridContainer}>
            <div>
                Username:
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Password:
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }
 
  return (
    <Layout>
    <Head>
        <title>First Page</title>
    </Head>
    <div className={styles.container}>
        <Navbar />
        <br></br>

        <h1>One Piece</h1>
        <h1>welcome</h1>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>


        <img  src="https://i.pinimg.com/736x/03/96/a0/0396a078a999a1b0521bd48e5ff20bc7.jpg" alt="One Piece" width="500" height="500"></img>
<p>
        <a href="https://www.facebook.com/fanpageop/"><img  src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/social-facebook-icon.png"  width="50" height="50" ></img></a>

        <a href="https://www.bilibili.tv/th/media/37976">
          <img  src="https://i.pinimg.com/736x/b4/e3/2f/b4e32f895502f90bcca0b3d76105e367.jpg"  width="50" height="50" ></img></a>   
        </p>
        
        
    </div>
    <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
    
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
