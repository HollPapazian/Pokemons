import Layout from '../components/Layout'
// import Prices from '../components/Prices'
// import { useState, useEffect } from 'react';

export default function Home(props) {
  // const [user, setUser] = useState('Moshe')

  return (
      <Layout>
        <img src="https://pokeres.bastionbot.org/images/pokemon/3.png" alt=""/>  
      </Layout>
    );
}

// Home.getServerSideProps = async (context) => {
//   console.log(context.req)
//   const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//   const json = await res.json()
//   return { bpi: json.bpi }
// }
