import React from 'react';
import {RiSpotifyLine} from 'react-icons/ri';
import {SiApplemusic, SiDeezer} from 'react-icons/si';

interface CardProps {
  link: string;
}

export default function Card({link}:CardProps) {
  return (
    <section className="container -cvp-10 md:py-20 px-0 md:p-10 md:px-0 antialiased rounded-md">
        <section className="grid lg:grid-cols-4 2xl:grid-cols-3 grid-cols-1 gap-4 rounded-md ">
            <article className="w-80 mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-lg" style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273fd59c0f2e36c971ae100da95')"}}>
                <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 rounded-lg">
                    <h1 className="text-white group-hover:text-white bold  text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        Pétalas
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <div className="opacity-0 flex-row text-white  text-base mb-8 group-hover:opacity-80 transform duration-500">
                        <a href="" className='inline-flex hover:text-yellow-500 align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <RiSpotifyLine className='mr-2' />
                           Spotify
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiDeezer className='mr-2' />
                           Deezer
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiApplemusic className='mr-2' />
                           Apple Music
                        </a>
                    </div>
                </div>
            </article>
            <article className="w-80 mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-lg" style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b27375718735f089331528999f01')"}}>
                <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 rounded-lg">
                    <h1 className="text-white group-hover:text-white bold  text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        Pequeno Ato de Amor
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <div className="opacity-0 flex-row text-white  text-base mb-8 group-hover:opacity-80 transform duration-500">
                        <a href="" className='inline-flex hover:text-yellow-500 align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <RiSpotifyLine className='mr-2' />
                           Spotify
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiDeezer className='mr-2' />
                           Deezer
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiApplemusic className='mr-2' />
                           Apple Music
                        </a>
                    </div>
                </div>
            </article>
            <article className="w-80 mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-lg" style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d00001e02b1396996f4751ccc98c16787')"}}>
                <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 rounded-lg">
                    <h1 className="text-white group-hover:text-white bold  text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        Infinito Amor
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <div className="opacity-0 flex-row text-white  text-base mb-8 group-hover:opacity-80 transform duration-500">
                        <a href="" className='inline-flex hover:text-yellow-500 align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <RiSpotifyLine className='mr-2' />
                           Spotify
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiDeezer className='mr-2' />
                           Deezer
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiApplemusic className='mr-2' />
                           Apple Music
                        </a>
                    </div>
                </div>
            </article>
            <article className="w-80 mx-2 max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-lg" style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d00001e02b1396996f4751ccc98c16787')"}}>
                <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 rounded-lg">
                    <h1 className="text-white group-hover:text-white bold  text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        Infinito Amor
                    </h1>
                    <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <div className="opacity-0 flex-row text-white  text-base mb-8 group-hover:opacity-80 transform duration-500">
                        <a href="" className='inline-flex hover:text-yellow-500 align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <RiSpotifyLine className='mr-2' />
                           Spotify
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiDeezer className='mr-2' />
                           Deezer
                        </a>
                        <a href="" className='inline-flex hover:text-yellow-500 justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                          <SiApplemusic className='mr-2' />
                           Apple Music
                        </a>
                    </div>
                </div>
            </article>
        </section>
      </section>

  );
}

