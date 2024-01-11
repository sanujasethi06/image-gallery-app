
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import React from 'react'
import { Button } from '@/components/ui/button';
import UploadButton from './UploadButton';
import cloudinary from 'cloudinary';
import { CloudinaryImage } from './cloudinary-image';

type SearchResult = {
    public_id: string
}
const GalleryPage = async () => {
   const results = (await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(10)
       .execute()) as {resources:SearchResult[]};
  return (
      <section>
          <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                  
              <h1 className='font-bold text-4xl'>
                  Gallery
              </h1>
              <UploadButton />
              </div>
              <div className="grid grid-cols-4 gap-4">
                  {results.resources.map((result) => (
                      <CloudinaryImage
                            key={result.public_id}
                            width="500"
                            height="300"
                            src={result.public_id}
                            // sizes="100vw"
                            alt="an image of something"
                     />
                  ))}
              </div>
          </div>
    </section>
  )
}

export default GalleryPage
