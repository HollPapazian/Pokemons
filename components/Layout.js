import Head from 'next/head'
import NavBar from '../components/NavBar'

function Home({children}) {
  return (
    <>
      <Head>
        <title>Holl Papazian</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/sketchy/bootstrap.min.css" />
      </Head>
      <NavBar />
      <div className="container">{children}</div>
      
    </>
    );
}

export default Home;