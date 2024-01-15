
import React from 'react'
import cloudinary from 'cloudinary';
import AlbumGrid from './album-grid';
import { SearchResult } from '@/app/gallery/page';
import { ForceRefresh } from '@/components/force-refresh';




const GalleryPage = async ({params : {albumName}}:{params:{albumName: string}}) => {
   const results = (await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${albumName}`)
       .sort_by('created_at', 'desc')
       .with_field('tags')
  .max_results(30)
       .execute()) as { resources: SearchResult[] };
    
  return (
      <section>
          <ForceRefresh/>
          <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                  
              <h1 className='font-bold text-4xl'>
                  Album {albumName}
              </h1>
              
              </div>
              <AlbumGrid images={results.resources}
                 />
          </div>
    </section>
  )
}

export default GalleryPage
