"use client"
import HeartShape from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import FullHeartShape from "@/components/icons/FullHeart";




export function CloudinaryImage(props: any & {imageData:SearchResult})
{
    const [transition, startTransition] = useTransition();
    const { imageData } = props;
    const isFavorited = imageData.tags.includes("favorite");

    return (<div className="relative">
        <CldImage {...props} src={imageData.public_id} />
        {isFavorited? <FullHeartShape className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer" onClick={() => {
            startTransition(() => {
                setAsFavoriteAction(imageData.public_id,false)
            })
            
        }}/>:  <HeartShape className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" onClick={() => {
            startTransition(() => {
                setAsFavoriteAction(imageData.public_id,true)
            })
            
        }}/>}
      
    </div>)
}   