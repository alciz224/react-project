import React from 'react'
import Grid from '@mui/material/Grid2'
import PostCard from './PostCard'
import Button from '@mui/material/Button'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowNext from '@mui/icons-material/ArrowForward'

const PostContainer = ({data, updatePage}) => {
  const posts = data.results;
  return (
    <>
    {posts.lenght!==0?
      <Grid container rowSpacing={3} columnSpacing={3}>
      {posts.map((post)=>(
        <Grid key={post.id} 
          size={{xs:12,sm:6,md:4,lg:3}}>
            <PostCard post={post}/>
        </Grid>
        ))}
    </Grid> : <p>Pas de post à afficher!!!</p>}
    { 
        data.previous && 
        <Button 
        startIcon={<ArrowBack/>}
        onClick={
      ()=>updatePage(new URL(data.previous).searchParams.get("page"))
    }>previous page</Button>}
    {
        data.next && 
        <Button 
        endIcon={<ArrowNext/>}
        onClick={
      ()=>updatePage(new URL(data.next).searchParams.get("page"))
    }>next page</Button>}
    </>
  )
}

export default PostContainer
