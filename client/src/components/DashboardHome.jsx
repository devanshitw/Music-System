import React from 'react'
import { useStateValue } from '../context/StateProvider'
import { useEffect } from 'react'
import {getAllUsers}  from '../api/index'
import {getAllAlbums} from '../api/index'
import {getAllArtists} from '../api/index'
import { getAllSongs } from '../api/index'
import { actionType } from '../context/reducer'
import { FaUsers } from 'react-icons/fa'
import{ GiLoveSong, GiMusicalNotes} from 'react-icons/gi'
import{RiUserStarFill} from 'react-icons/ri'
import{ bgColors} from "../utils/styles"
export const DashboardCard =({ icon,name,count })=>{
  const bg_Color=bgColors[parseInt(Math.random()*bgColors.length)]

  return(
    <div style={{background :`${bg_Color}`}}className='p-4 w-40 h-auto gap-3  rounded-lg shadow-md pl-[50px]'>
      {/* <p>User Card</p> */}
      {icon}
      <p className='text-xl text-textColor font-semibold items-center justify-center  '>{name}</p>
      <p className='text-xl text-textColor items-center justify-center pl-[20px]'>{count}</p>
      {/* <p className='text-xl text-textColor font-semibold'>{name}</p>
      <p className='text-xl text-textColor font-semibold'>{name}</p> */}
    </div>)
  
}
const DashboardHome = () => {
  const [{ allUsers, allSongs , allArtists , allAlbums },dispatch]= useStateValue();


  useEffect(() => {
    if(!allUsers){
      getAllUsers().then((data)=>{
        // console.log(data)
        dispatch({
          type:actionType.SET_ALL_USERS,
          allUsers:data.data,
        })
      });
    }
    if(!allArtists){
      getAllArtists().then((data)=>{
        // console.log(data)
        dispatch({
          type:actionType.SET_ALL_ARTISTS,
          allArtists:data.artist
        })
      })
    }
    if(!allAlbums){
      getAllAlbums().then((data)=>{
        // console.log(data)
        dispatch({
          type:actionType.SET_ALL_ALBUMS,
          allAlbums:data.album
        })
      }
      )
    }
    if(!allSongs){
      getAllSongs().then((data)=>{
        // console.log(data)
        dispatch({
          type:actionType.SET_ALL_SONGS,
          allSongs:data.song
        })
      }
      )
    }
 }, [])
  
  return (
    <div className='w-full flex items-center justify-evenly flex-wrap'>
      <DashboardCard icon={<FaUsers className='text-3xl text-textColor ml-[10px]'/>} name={"Users"} count={allUsers?.length>0?allUsers?.length:0}/>
      <DashboardCard icon={<GiLoveSong className='text-3xl text-textColor ml-[10px]'/>} name={"Songs"} count={allSongs?.length>0?allSongs?.length:0}/>
      <DashboardCard icon={<RiUserStarFill className='text-3xl text-textColor ml-[10px]'/>} name={"Artists"} count={allArtists?.length>0?allArtists?.length:0}/>
      <DashboardCard icon={<GiMusicalNotes className='text-3xl text-textColor ml-[10px]'/>} name={"Albums"} count={allAlbums?.length>0?allAlbums?.length:0}/>
    </div>
  )
}

export default DashboardHome