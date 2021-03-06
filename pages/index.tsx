import Head from 'next/head'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import parse from "html-react-parser"
import { useQuery, QueryClient, QueryClientProvider  } from "react-query";
import { RiInstagramLine, RiFacebookBoxLine, RiYoutubeLine, RiHeart3Fill } from "react-icons/ri";
import styles from '../styles/Home.module.css'
import api from '../utils/api'
import Card from '../components/Card'
import MusicCards from '../components/MusicCards'
import logo from '../public/images/logo.png'
import cdPetalas from '../public/images/cd-petalas.jpg'
import cdPequenoAto from '../public/images/cd-pequenoato.jpg'
import cdVinde from '../public/images/cd-vinde.jpg'
import cdInfinitoAmor from '../public/images/cd-infinitoamor.jpg'

interface Post {
  link: string,
  title: string,
  thumbnail: string
  content: string
}

export default function Home() {
  const { data, isLoading, error} = useQuery('posts', async () => {
    const response = await api('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@novaberith')
    const posts = response.data?.items.slice(0,3).map((post:Post, index:number) => {
      return {
        id: index,
        link: post.link,
        title: post.title,
        thumbnail: post.thumbnail,
        content: parse(post.content.split('</p>')[1].substring(0,200)+'...')
      };
    })
    /* return players.sort((a,b) => (a.name > b.name) ? 1 : -1); */
    return posts;
  })
  
  
  return (
    <>
    <header className="bg-white shadow dark:bg-gray-800 flex sticky top-0 z-50">
        <div className="container w-10/12 px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex ">
                <div className="hidden sm:flex sm:middle sm:flex-row items-center">
                  <Image src={logo} alt="Nova Berith logotipo"  width={60} height={60}  />
                  {/* <span className="ml-3 text-2xl font-bold text-gray-800 dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300" >Nova Berith</span> */}
                </div>
                
                
                <div className="flex md:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            
            <div className="items-center md:flex divide-x divide-black">
                <div className="flex flex-col md:flex-row">
                    <a className="my-1 text-lg font-medium text-yellow-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#blog">Not??cias</a>
                    <a className="my-1 text-lg font-medium text-yellow-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#nossaHistoria">Nossa Hist??ria</a>
                    <a className="my-1 text-lg font-medium text-yellow-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#musica">M??sica</a>
                    <a className="my-1 text-lg font-medium text-yellow-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#artes">Artes</a>
                    <a className="my-1 text-lg font-medium text-yellow-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Forma????o</a>
                    
                </div>

                <div className="pl-2 flex flex-row justify-center">
                    <a className="relative m-1 text-yellow-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="https://www.instagram.com/novaberith/">
                      <RiInstagramLine size="24" />
                    </a>
                    <a className="relative m-1 text-yellow-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#facebook">
                      <RiFacebookBoxLine size="24" />
                    </a>
                    <a className="relative m-1 text-yellow-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="https://www.youtube.com/c/comunidadenovaberith">
                      <RiYoutubeLine size="24" />
                    </a>
                </div>
            </div>
        </div>
    </header>
    <section id='video-area' className="relative flex items-center justify-center mb-12 overflow-hidden bg-black text-white bg-opacity-50">
      <div
        className="relative z-30 text-center  md:py-44  font-sans font font-bold  text-white bg-black bg-opacity-50 w-full h-full"
      >
        {/* <h1 className="text-red-500" style={{textShadow: '', fontSize: '75px'}}>
          Nova Berith
        </h1> */}
        <h3 className="-mt-7 " style={{textShadow: '', fontSize: '75px'}}>
          Ser Sorriso de Deus
        </h3>
        <h3 className="-mt-7 " style={{color: 'yellow', fontWeight: 'bold', fontSize: '44px'}}>
          para{' '}
        <span style={{ color: 'yellow', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['o Brasil', 'a ??frica', 'Portugal', 'o Canad??', 'o Mundo!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => console.log(`Done after 5 loops!`)}
          />
        </span>
        </h3>
        
      </div>
      <div className='absolute bg-black w-full'>
        <video
          autoPlay
          loop
          muted
          
          style={{filter: " " }}
          
          className="z-10 w-auto min-w-full min-h-full max-w-none h-auto bg-black text-white bg-opacity-50"
        >
          <source
            src="/video/novaberith.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    <section id="blog" className="px-32 text-gray-600 body-font">
      <h1 className="flex text-center text-4xl title-font font-medium text-yellow-800">
        | Not??cias
      </h1>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data && data.map((post:Post, index:number)=>(
            <div key={index} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className='relative h-28'>
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.thumbnail} alt={post.title} layout='fill' />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-yellow-800 mb-3">{post.title}</h1>
                  <p className="leading-relaxed mb-3">{post.content}</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 hover:text-indigo-800 inline-flex cursor-pointer items-center md:mb-2 lg:mb-0" href={post.link}>Ler mais
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id='nossaHistoria' className=" px-32 text-justify  flex justify-center flex-col">
      <h1 className="my-6 flex text-center text-4xl title-font font-medium text-yellow-800">
        | Nossa Hist??ria
      </h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col ">
          <p className='leading-relaxed body-font text-gray-600'>
            A Comunidade Cat??lica Nova Berith foi fundada em 23 de maio de 1999. Nosso carisma ?? ser sorriso de Deus para o mundo, ser sinal de esperan??a e viver como testemunha do amor e da alegria. A fundadora ?? Jana??na L??cia Novais de Ara??jo Costa, e o cofundador, seu esposo, Jos?? de Oliveira Costa Filho.
          </p>
          <br />
          <p className='leading-relaxed body-font text-gray-600'>
            O nome berith invoca, no horizonte da escritura o pacto de amor profundo entre Deus e os homens, impacto devido ?? iniciativa amorosa de Deus, o qual implica tamb??m uma comunh??o entre os homens, como irm??os, uma fraternidade. Nessa perspectiva, a palavra Berith, pode igualmente ser traduzida por alian??a, comunh??o, comunidade e fraternidade. Tudo, portanto, nasce da iniciativa amorosa do Deus que, em sua miseric??rdia, ???ofereceu muitas vezes alian??a aos homens??? at?? ??quela Nova, definitivamente, selada em Cristo.
          </p>
        </div>
      </div>
      
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-yellow-700 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">Nossa miss??o ?? testemunhar o amor, a alegria e a esperan??a aos que est??o perdidos. Isto acontece de v??rias formas: por meio de grupos de ora????o, catequese, retiros, encontros, assist??ncia lit??rgica nas celebra????es e projetos sociais nas periferias existenciais, onde somos chamados.</p>
            <span className="inline-block h-1 w-10 rounded bg-yellow-700 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JANA??NA COSTA</h2>
            <p className="text-gray-500">Fundadora</p>
          </div>
        </div>
      </div>
    </section>
        
    <section id='musica' className='px-32 text-justify  flex justify-center flex-col'>
      <h1 className="my-6 flex text-center text-4xl title-font font-medium text-yellow-800">
        | M??sica
      </h1>
      <div className='flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 xl:-mx-2 justify-center'>
        <MusicCards  link='https://open.spotify.com/album/2xVQJJ4uKSv7vGXpVXIUdr' />
      </div>
    </section>
    <section id="artes">

    </section>
    </>
  )
}

