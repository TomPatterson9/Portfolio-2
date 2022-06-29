import Head from 'next/head';
import { Navbar } from '../components/Navbar';



export default function Home() {
  return (
<div>
  <Head>
    <title>Tom Patterson</title>
  </Head>
  <Navbar />
  <div className='flex flex-col items-center justify-center w-full'>
      <h1 className='text-3xl'>Home Page</h1>

      
    </div>
</div>
  )
}