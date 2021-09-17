
export default function Home() {
  return (<div></div>)
}
export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/main',
      permanent: false
    }
  }
}