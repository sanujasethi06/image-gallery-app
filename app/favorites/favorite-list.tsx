"use client"
import React, { useEffect, useState } from 'react'
import { CloudinaryImage } from '../gallery/cloudinary-image';
import { SearchResult } from '../gallery/page';

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
              <div className="grid grid-cols-4 gap-4">
                  {resources.map((result) => (
                      <CloudinaryImage
                          key={result.public_id}
                          
                            width="400"
                          height="300"
                          imageData={result}
                          onUnheart={(unheartedResource) => {
                              setResources((currentResources)=>
                      currentResources.filter((resource)=>resource.public_id !== unheartedResource.public_id)
                      
                              )
                          }}
                            // sizes="100vw"
                          alt="an image of something"
                          
                     />
                  ))}
              </div>
          </div>
    </section>
  )
}

export default FavoriteList