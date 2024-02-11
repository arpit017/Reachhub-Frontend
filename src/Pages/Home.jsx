import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { Homelements } from './Homelements'
import { SimpleGrid } from '@chakra-ui/react'
import Navbar from './Navbar'

export const Home = () => {

  const[state,setState]=useState([])

  const getData=()=>{
axios.get("https://reachhub-l2zo.onrender.com/top-players")
.then((res)=>{console.log(res.data);setState(res.data)})
.catch((err)=>{console.log(err)})
  }

useEffect(()=>{
getData()
},[])



  return (
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=600')",color:"white" }}>
      <Navbar/>
      <SimpleGrid spacing={4} templateColumns='repeat(4, minmax(200px, 1fr))'>
      
      {
        state.length>0 && state.map(ele=>{
          return <div >
            <Homelements ele={ele}/>
          </div>
          
        })
      }
      </SimpleGrid>
      
      </div>
  )
}
