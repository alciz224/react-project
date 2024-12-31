import { useQueryClient, useQuery } from '@tanstack/react-query'
import React from 'react'
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { getPosts } from '../api/api'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import apiClient from '../api/apiClient'
import PostContainer from '../components/post/PostContainer'
import Section from '../components/common/Section'
import PostFilter from '../components/post/PostFilter'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowNext from '@mui/icons-material/ArrowForward'
import Loading from '../components/common/Loading'
import Center from '../components/common/utils/Center'
import { Card } from '@mui/material'

const Posts = () => {
  const navigate = useNavigate()
  const  [searchParams, setSearchParams] = useSearchParams()

  const handleFilter = (filter="all") =>{
    const newParams= new URLSearchParams(searchParams)
    if (filter==="all"){
      newParams.delete("filter_by");
    }else{
      newParams.set("filter_by", filter);
    };
    newParams.delete("page")
    setSearchParams(newParams);
  };

  const updatePage = (page)=>{
    const newParams= new URLSearchParams(searchParams);
    if (page){
      newParams.set("page", page);
      setSearchParams(newParams);
    }else{
      newParams.delete("page");
      setSearchParams(newParams);
    }

  }

  const queryString = searchParams.toString() || "";


  const { isFetched, isLoading, error, data } = useQuery({
    queryKey: ["posts", queryString],
    queryFn: async ()=>{
      const res= await getPosts(queryString);
      return res;
    },
    keepPreviousData: true
  }
  );


  //if (isPending) return "loading..."

  if (error) return (
    <Center>
    <Card sx={{
      margin: 2,
      padding: 2
    }}>
  An error has occured: {error.message}
    </Card>
    </Center>
  )

  return (
    <Section title="Nos Blog-posts" subtitle="Decouvrez les nouvelles de notre maison de production!"><>
    <PostFilter handleFilter={handleFilter}/>
    {isLoading? <Loading/>:
    <PostContainer updatePage={updatePage} data={data}/>}
    </>
    </Section>
  )
}

export default Posts
