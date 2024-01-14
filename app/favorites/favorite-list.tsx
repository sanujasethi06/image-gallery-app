"use client"
import React, { useEffect, useState } from 'react'
import { CloudinaryImage } from '../gallery/cloudinary-image';
import { SearchResult } from '../gallery/page';
import { ImageGrid } from '@/components/image-grid';

const FavoriteList = ({ initialResource }: { initialResource: SearchResult[] }) => {
    const [resources, setResources] = useState(initialResource);
    useEffect(() => {
        setResources(initialResource)
    },[initialResource])
  
  return (
      <section>
          <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                  
              <h1 className='font-bold text-4xl'>
                  Favorite Images
              </h1>
              
              </div>
              <ImageGrid images={resources}
                  getImage={(imageData: SearchResult) => {
                      return (
                      <CloudinaryImage
                          key={imageData.public_id}
                          
                            width="400"
                          height="300"
                          imageData={imageData}
                          onUnheart={(unheartedResource) => {
                              setResources((currentResources)=>
                      currentResources.filter((resource)=>resource.public_id !== unheartedResource.public_id)
                      
                              )
                          }}
                            // sizes="100vw"
                          alt="an image of something"
                          
                     />
                  )
              }}/>
              
          </div>
    </section>
  )
}

export default FavoriteList