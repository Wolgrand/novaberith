import React from 'react';
import Image from 'next/image'
import {RiSpotifyLine} from 'react-icons/ri';
import {SiApplemusic, SiDeezer, SiYoutube} from 'react-icons/si';

interface CardProps {
  link: string;
}

export default function Card({link}:CardProps) {
  return (
    <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
            <div  className="p-2 md:w-1/4 transform duration-500 hover:-translate-y-4" >
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className='relative h-72'>
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={'https://i.scdn.co/image/ab67616d0000b273fd59c0f2e36c971ae100da95'} alt={'Album Petálas'} layout='fill' />
                </div>
                <div className="p-4 justify-center text-center ">
                  <h1 className="title-font text-lg font-medium text-yellow-800 mb-3">Petálas</h1>
                  <p className="title-font text-sm -mt-3 font-medium text-yellow-800 mb-3">(Flaviane Montenegro)</p>
                  <div className="items-center justify-center flex-wrap inline-flex text-sm ">
                    <a href="" className='inline-flex align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <RiSpotifyLine className='mr-2' />
                      Spotify
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiDeezer className='mr-2' />
                      Deezer
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiYoutube className='mr-2' />
                      Youtube Music
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div  className="p-2 md:w-1/4 transform duration-500 hover:-translate-y-4">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className='relative h-72'>
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={'https://i.scdn.co/image/ab67616d0000b27375718735f089331528999f01'} alt={'Album Petálas'} layout='fill' />
                </div>
                <div className="p-4 justify-center text-center ">
                  <h1 className="title-font text-lg font-medium text-yellow-800 mb-3">Pequeno Ato de Amor</h1>
                  <p className="title-font text-sm -mt-3 font-medium text-yellow-800 mb-3">(Min. Nova Berith)</p>
                  <div className="items-center justify-center flex-wrap inline-flex text-sm ">
                    <a href="" className='inline-flex align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <RiSpotifyLine className='mr-2' />
                      Spotify
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiDeezer className='mr-2' />
                      Deezer
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiYoutube className='mr-2' />
                      Youtube Music
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div  className="p-2 md:w-1/4 transform duration-500 hover:-translate-y-4">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className='relative h-72'>
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={'https://i.scdn.co/image/ab67616d00001e02b1396996f4751ccc98c16787'} alt={'Album Petálas'} layout='fill' />
                </div>
                <div className="p-4 justify-center text-center ">
                  <h1 className="title-font text-lg font-medium text-yellow-800 mb-3">Infinito Amor</h1>
                  <p className="title-font text-sm -mt-3 font-medium text-yellow-800 mb-3">(Rafaela Maria)</p>
                  <div className="items-center justify-center flex-wrap inline-flex text-sm ">
                    <a href="" className='inline-flex align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <RiSpotifyLine className='mr-2' />
                      Spotify
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiDeezer className='mr-2' />
                      Deezer
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiYoutube className='mr-2' />
                      Youtube Music
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div  className="p-2 md:w-1/4 transform duration-500 hover:-translate-y-4">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className='relative h-72 transform duration-300'>
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={'https://i.scdn.co/image/ab67616d00001e0250e2ac97ec4f1fea8e711f8e'} alt={'Album Petálas'} layout='fill' />
                </div>
                <div className="p-4 justify-center text-center ">
                  <h1 className="title-font text-lg font-medium text-yellow-800 mb-3">Vinde</h1>
                  <p className="title-font text-sm -mt-3 font-medium text-yellow-800 mb-3">(Rodrigo Vieira)</p>
                  <div className="items-center justify-center flex-wrap inline-flex text-sm ">
                    <a href="" className='inline-flex align-middle justify-between items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <RiSpotifyLine className='mr-2' />
                      Spotify
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiDeezer className='mr-2' />
                      Deezer
                    </a>
                    <a href="" className='inline-flex justify-between align-middle items-center hover:bg-black hover:bg-opacity-20 rounded-lg p-2'>
                      <SiYoutube className='mr-2' />
                      Youtube Music
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
}

