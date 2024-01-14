"use client"
import React from 'react'
import UploadButton from './UploadButton';
import { CloudinaryImage } from './cloudinary-image';
import { ImageGrid } from '@/components/image-grid';
import { SearchResult } from './page';



export default function GalleryGrid({images}: {images: SearchResult[]}){
  return (
     
              <ImageGrid images={images}
                  getImage={(imageData: SearchResult) => {
                      return (
                      <CloudinaryImage  
                          key={imageData.public_id}
                            width="400"
                          height="300"
                          imageData={imageData}
                            // sizes="100vw"
                          alt="an image of something"
                     />
                  )
              }}/>
         
  )
}

