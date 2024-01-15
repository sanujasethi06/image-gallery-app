import React from 'react'
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
import { FolderPlus } from 'lucide-react'
import { AddToAlbumDialog } from './add-to-album'
import { SearchResult } from '@/app/gallery/page'


export function ImageMenu({image} : {image:SearchResult}) {
    return (
      <div className="absolute top-2 right-2">
            
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className='w-12 h-12 p-0'><Menu/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
       
            <DropdownMenuItem asChild>
            {/* <FolderPlus className='mr-2 h-4 w-4'/>
            Add to Album */}
                        <AddToAlbumDialog image={ image} />
          </DropdownMenuItem>
          
       
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
  )
}
