
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import React from 'react'
import { Button } from '@/components/ui/button';
import UploadButton from './UploadButton';
import cloudinary from 'cloudinary';
import { CloudinaryImage } from './cloudinary-image';
import { ImageGrid } from '@/components/image-grid';
import GalleryGrid from './gallery-grid';



export  type SearchResult = {
    public_id: string,
    tags: string[]
}
const GalleryPage = async () => {
   const results = (await cloudinary.v2.search
  .expression('resource_type:image')
       .sort_by('created_at', 'desc')
       .with_field('tags')
  .max_results(30)
       .execute()) as { resources: SearchResult[] };
    
  return (
      <section>
          <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                  
              <h1 className='font-bold text-4xl'>
                  Gallery
              </h1>
              <UploadButton />
              </div>
              <GalleryGrid images={results.resources}
                 />
          </div>
    </section>
  )
}

export default GalleryPage
