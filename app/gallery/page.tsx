
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import React from 'react'
import { Button } from '@/components/ui/button';
import UploadButton from './UploadButton';
import cloudinary from 'cloudinary';
import { CloudinaryImage } from './cloudinary-image';

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
    const MAX_COLUMNS = 4;
    function getColumns(colIndex: number) {
        return results.resources.filter((resource ,idx)=> idx % MAX_COLUMNS ===colIndex)
        
    }
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
                  {[
                      getColumns(0),
                      getColumns(1),
                      getColumns(2),
                      getColumns(3)].map((column, idx) => <div key={ idx} className="flex flex-col gap-4">
                         {column.map((result) => (
                      <CloudinaryImage
                          key={result.public_id}
                            width="400"
                          height="300"
                          imageData={result}
                            // sizes="100vw"
                          alt="an image of something"
                     />
                  ))} 
                      </div>)
                  
                      
                  }
                  
              </div>
          </div>
    </section>
  )
}

export default GalleryPage
