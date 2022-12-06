import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props : {ninjas:data}
    }
}
const AllNinjas = ({ninjas}) => {
    return ( 
        <div>
           <h1>
           All Ninjas
           </h1>
           {ninjas.map(ninja=>(
            <Link href={'/ninjas/' + ninja.id} key = {ninja.id} legacyBehavior> 
            <a className={styles.single}>
                {ninja.name}
            </a>
            </Link>
           ))}
        </div>
     );
}
 
export default AllNinjas;