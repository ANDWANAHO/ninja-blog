export const getStaticPaths = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    
    const paths = data.map(ninja =>{
        return {
            params: {id : ninja.id.toString()}
        }
    })
    return{
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json()

    return {
        props: {ninjas :data}
    }
   

}
const Details = ({ninjas}) => {
    return ( 
        <div>
            <h1>{ninjas.name}</h1>
            <p>{ninjas.email}</p>
            <p>{ninjas.website}</p>
            <p>{ninjas.address.city}</p>
            <p>{ninjas.street}</p>
        </div>
     );
}
 
export default Details;