"use client"
import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult = {
    info :{
     public_id:string
  },
    event:'success'
  }

export default function Home() {
  const [imageId,setImageId]= useState("")

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <CldUploadButton uploadPreset="epnb3tgq"
        onUpload = {(result: UploadResult) => {
        setImageId (result.info.public_id);
      }}/>
      {imageId && <CldImage
        width="400"
        height="400"
        src={imageId}
        sizes="100vw"
        alt=""
        
    />}
    </main>
  )
}
