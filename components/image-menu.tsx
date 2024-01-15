import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from './icons/menu'
import { FolderPlus, PencilIcon } from 'lucide-react'
import { AddToAlbumDialog } from './add-to-album'
import { SearchResult } from '@/app/gallery/page'
import Link from 'next/link'


export function ImageMenu({image} : {image:SearchResult}) {
   const [open ,setOpen] =useState(false) 
    return (
      <div className="absolute top-2 right-2">
            
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className='w-12 h-12 p-0'><Menu/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
       
            <DropdownMenuItem asChild >
                        <AddToAlbumDialog image={ image} onClose={()=>setOpen(false)}/>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild >
                        <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
                            <PencilIcon className='mr-2 h-4 w-4'/>
                            Edit</Link>
            </DropdownMenuItem>
          
       
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
  )
}
