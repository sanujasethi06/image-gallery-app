
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import React from 'react'
import { Button } from '@/components/ui/button';
import cloudinary from 'cloudinary';
import { CloudinaryImage } from '../gallery/cloudinary-image';
import { SearchResult } from '../gallery/page';

const FavoritePage = async () => {
   const results = (await cloudinary.v2.search
  .expression('resource_type:image AND tags=favorite')
       .sort_by('created_at', 'desc')
       .with_field('tags')
  .max_results(30)
       .execute()) as {resources:SearchResult[]};
  return (
      <section>
          <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                  
              <h1 className='font-bold text-4xl'>
                  Favorite Images
              </h1>
              
              </div>
              <div className="grid grid-cols-4 gap-4">
                  {results.resources.map((result) => (
                      <CloudinaryImage
                          key={result.public_id}
                          path="/favorites"
                            width="400"
                          height="300"
                          imageData={result}
                            src={result.public_id}
                            // sizes="100vw"
                          alt="an image of something"
                          publicId={result.public_id}
                     />
                  ))}
              </div>
          </div>
    </section>
  )
}

export default FavoritePage
