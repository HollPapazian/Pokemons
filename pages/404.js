import Layout from '../components/Layout'

function Page404() {
  return (
    <>
    <Layout>
    <div className='wraper-travolta'>
      <img src="https://thumbs.gfycat.com/RespectfulHotIndianpangolin-size_restricted.gif" alt=""/>
    </div>
    <style jsx>{`
        .wraper-travolta {
          display:flex;
          justify-content: center;
        }
        .wraper-travolta img {
          width: 600px;
        }
        @media (max-width: 510px) {
          .wraper-travolta img {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
    </>
  );
}

export default Page404;