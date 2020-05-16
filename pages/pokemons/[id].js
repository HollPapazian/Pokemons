import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Layout'

const Post = (props) => {
  const router = useRouter()
  const { id } = router.query
  // console.log(props.pokemon)
  return (
    <Layout>
        { id && 
          <div style={{display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', width: '100%', textAlign:'center'}}>
            <div style={{fontSize:'2rem'}}>{props.pokemon}</div>
            <img style={{width: '200px'}} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
            <div className='pokemon-nav'>
            <Link href="/pokemons/[id]" as={`/pokemons/${(id-1).toString()}`} ><a className="nav-link">Назад</a></Link>
            <Link href="/pokemons/[id]" as={`/pokemons/${(+id+1).toString()}`} ><a className="nav-link">Вперед</a></Link>
            </div>
            
          </div> 
        }
        <style jsx>{`
        .pokemon-nav {
          display:flex;
          margin-top: 10px;
        }
      `}</style>
      </Layout>
  )
}

export async function getStaticPaths() {
  const paths = [];
  for (let i=1; i < 808; i++){
    paths.push({params: {id: i.toString()}})
  }

  return {paths, fallback:false}
}

export async function getStaticProps ({params}) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const json = await res.json()
    // console.log(json)
    return {props:{ pokemon: json.name }}
  }

export default Post