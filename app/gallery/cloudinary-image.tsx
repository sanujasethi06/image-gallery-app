"use client"
import HeartShape from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useState, useTransition } from "react";
import { SearchResult } from "./page";
import FullHeartShape from "@/components/icons/FullHeart";
import { ImageMenu } from "@/components/image-menu";





export function CloudinaryImage(props: {
    imageData: SearchResult;
    onUnheart?:(unheartedResource: SearchResult)=>void}&Omit <CldImageProps,"src">)
{
    const [transition, startTransition] = useTransition();
    const { imageData ,onUnheart} = props;
    
    const [isFavorited, setIsFavorited] =useState (imageData.tags.includes("favorite"))
    return (<div className="relative">
        <CldImage {...props} src={imageData.public_id} />
        {isFavorited ? <FullHeartShape className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer" onClick={() => {
            onUnheart?.(imageData);
            setIsFavorited(false)
            startTransition(() => {
                setAsFavoriteAction(imageData.public_id,false)
            })
            
        }}/>:  <HeartShape className="absolute top-2 left-2 hover:text-red-500 text-white cursor-pointer" onClick={() => {
                setIsFavorited(true)
                startTransition(() => {
                setAsFavoriteAction(imageData.public_id,true)
            })
            
        }} />}
        <ImageMenu image={ imageData} />
      
    </div>)
}   