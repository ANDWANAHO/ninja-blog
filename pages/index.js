import Head from 'next/head'
import Image from 'next/image'

import NavBar from '../comps/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
    <title>Ninja Home</title>
    </Head>
    <div >
      <p className={styles.title}>Home Page</p>
      <p className={styles.text}>Non minim pariatur ea culpa duis sunt.Enim enim aute qui labore nulla adipisicing duis eu proident dolor. Ad incididunt voluptate exercitation velit culpa enim laboris qui. Eu nulla eiusmod dolore labore non.</p>
      <p className={styles.text}>Non minim pariatur ea culpa duis sunt.Enim enim aute qui labore nulla adipisicing duis eu proident dolor. Ad incididunt voluptate exercitation velit culpa enim laboris qui. Eu nulla eiusmod dolore labore non.</p>
      <p className={styles.text}>Non minim pariatur ea culpa duis sunt.Enim enim aute qui labore nulla adipisicing duis eu proident dolor. Ad incididunt voluptate exercitation velit culpa enim laboris qui. Eu nulla eiusmod dolore labore non.</p>
      <Link legacyBehavior href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
        </Link>
     
    </div>
    </>
  )
}
