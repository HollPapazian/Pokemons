import Layout from '../components/Layout'
import Prices from '../components/Prices'
import { useState, useEffect } from 'react';

function Home(props) {

  const [user, setUser] = useState('Moshe')

  // useEffect(()=>{
  //   fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.time.updated)
  //     setUser(data.time.updated)
  //   })
  // })
  return (
      <Layout>
      <div>Welcome to Next.js, {user}!</div>
      <Prices bpi={props.bpi} />
      </Layout>
    );
}

// Home.getServerSideProps = async (context) => {
//   console.log(context.req)
//   const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//   const json = await res.json()
//   return { bpi: json.bpi }
// }

export async function getServerSideProps(context) {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const json = await res.json()
  // return { bpi: json.bpi }
  return {
    props: { bpi: json.bpi }, // will be passed to the page component as props
  }
}

export default Home;