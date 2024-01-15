"use client"
import { Button } from '@/components/ui/button'
import { CldImage } from 'next-cloudinary'
import React from 'react'

export default async function EditPage({searchParams:{publicId}}:{searchParams:{publicId:string}}) {
    console.log(publicId)
  return (
    <section>
          <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                  
              <h1 className='font-bold text-4xl'>
                  Edit {publicId}
          </h1>
        </div>
        <Button>Generative Fill</Button>
          <CldImage src={publicId} width="300" height="200" alt="edit image"/>
             
              
                
          </div>
    </section>
  )
}
