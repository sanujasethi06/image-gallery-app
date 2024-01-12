
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import React from 'react'
import { Button } from '@/components/ui/button';
import cloudinary from 'cloudinary';
import { CloudinaryImage } from '../gallery/cloudinary-image';
import { SearchResult } from '../gallery/page';
import FavoriteList from './favorite-list';
import { ForceRefresh } from '@/components/force-refresh';


const FavoritePage = async () => {
   const results = (await cloudinary.v2.search
  .expression('resource_type:image AND tags=favorite')
       .sort_by('created_at', 'desc')
       .with_field('tags')
  .max_results(30)
       .execute()) as {resources:SearchResult[]};
  return (
    <section>
      <ForceRefresh/>
          <div className="flex flex-col gap-8">
              <div className="flex justify-between">
              
        </div>
        <FavoriteList initialResource={results.resources}/>
              
          </div>
    </section>
  )
}

export default FavoritePage
