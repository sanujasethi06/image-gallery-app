import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Folder } from "./page"
import Link from "next/link"


export function AlbumCard({folder}: {folder :Folder}) {
  return (
    <Card >
      <CardHeader>
              <CardTitle>{folder.name }</CardTitle>
              <CardDescription>All your {folder.name} images</CardDescription>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild><Link href={`/albums/${folder.name}`}>View Albums</Link></Button>
      </CardFooter>
    </Card>
  )
}

