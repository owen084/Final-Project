import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

import Link from 'next/link'


const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>One Piece</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <h1>One Piece</h1>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
                <br />
                <div>
                    <div className={styles.box} >
                    <br></br>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    One Piece เล่าเรื่องราวของหนุ่มน้อย ลูฟี่ ที่ปรารถนาจะค้นพบมหาสมบัติวันพีซ และได้รับการขนานนามว่าเป็นเจ้าแห่งโจรสลัด<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ในโลกสมมติที่มีพื้นผิวเป็นทะเลเกือบทั้งหมด ลูฟี่ต้องออกเรือไปยังทะเลกว้างใหญ่ไพศาลเข้าไปยัง ‘แกรนด์ไลน์’ ทะเลที่ใหญ่ที่สุดในโลกซึ่งตั้งอยู่ตรงเส้นศูนย์สูตร<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; แล้วออกเดินเรือผจญภัยไปรอบโลกเพื่อที่จะไปถึงเกาะสุดท้าย รัฟเทล ที่ว่ากันว่าสมบัติวันพีซถูกเก็บไว้ที่นั่น <br></br>
                    <br></br>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

                    
                    </div>
                    <br />
                    <br/><br/>
                    <img  src="https://i.pinimg.com/564x/ef/b3/63/efb363195f8197287d5a24b46b16fb8b.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/564x/39/dd/13/39dd1324a442bbbe8f4661bd9b584f48.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/564x/03/96/a0/0396a078a999a1b0521bd48e5ff20bc7.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    <img  src="https://i.pinimg.com/564x/a8/c2/d4/a8c2d41086cf7c30cda11d07935e27c1.jpg" alt="Trulli" width="250" height="250"></img>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/564x/03/99/50/0399500bb568919c09230df5897ebd7b.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img  src="https://i.pinimg.com/564x/9d/40/f3/9d40f3cfc04a5fc1729811bc7a9c4101.jpg" alt="Trulli" width="250" height="250"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>
                    ดู One Piece ถูกลิขสิทธิ์ได้ที่<br></br>
                    https://www.bilibili.tv/th/media/37976<br></br>
                    Fanpage : ONE PIECE Fanpagee<br></br>
                    https://www.facebook.com/fanpageop/<br></br>
                    <img  src="https://img.icons8.com/bubbles/2x/facebook-new.png"  width="50" height="50"></img> 
                    <img  src="https://i.pinimg.com/originals/2f/8b/6b/2f8b6be58b676791c6948de91ef4fd00.png"  width="50" height="50"></img>
                    <img  src="https://img.icons8.com/bubbles/2x/instagram.png"  width="50" height="50"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    </div>
                  <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
