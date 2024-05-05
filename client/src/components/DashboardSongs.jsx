import React from 'react'
import{NavLink} from 'react-router-dom'
import {IoAdd,IoPause,IoPlay,IoTrash} from "react-icons/io5"
import { useState } from 'react';
import {AiOutlineClear} from 'react-icons/ai'
import { useEffect } from 'react';
import{ useStateValue} from '../context/StateProvider'
import {actionType} from '../context/reducer'
import {getAllSongs} from '../api'
import SongCard from './SongCard';

const DashboardSongs = () => {
  const [songFilter, setSongFilter] = useState("");
  const [isFoucs, setIsFoucs] = useState(false);
  const [{allSongs}, dispath] = useStateValue();
  useEffect(() => {
    if(!allSongs){
      getAllSongs().then((data) =>{
        dispath({
          type:actionType.SET_ALL_SONGS,
          allSongs:data.song,
        })
      })
    }
}, [])
  
  return (
    <div className='w-full p-4 flex items-center justify-center flex-col mt-[-40px]'>
      <div className='w-full flex justify-center items-center gap-20'>
        <NavLink to={"/dashboard/newSong"} className='flex flex-col items-center justify-center px-4 py-3 border rounded-md border-gray-300 hover:shadow-md-cursor-pointer  hover:border-gray-500 '>
          <IoAdd /><span>Add Content</span>
          {/* <span className='flex items-center justify-center '>Add Content</span> */}
        </NavLink>
        {/* <input type="text" className={`w-52 px-4 py-2  border ${isFoucs ? "border-gray-500 shadow-md": "border-gray-300"} rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold`}placeholder='Search here...' value={songFilter} 
        onChange={(e)=> setSongFilter(e.target.value)}
        onBlur={() => {setIsFoucs(false)}}
        onFocus={()=>setIsFoucs(true)}
          />

        <i className=' text-textColor cursor-pointer'>
          <AiOutlineClear className='text-3xl '/><span>Clear</span>
        </i> */}
      </div>
      <div className='relative w-full my-4 p-4 py-16 border border-gray-300 rounded-md'>
        <div className='absolute top-4 left-4'>
          <p className='text-xl font-bold text-textColor'>
            <span className='text-xl font-bold text-black'>Count : </span>
          {allSongs?.length}
          </p>
        </div>

        <SongContainer data={allSongs} />
      </div>
    </div>
  )
}
export const SongContainer =({data}) => {
return(
<div className='w-full flex flex-wrap gap-3 items-center justify-evenly'> 
{
data && data.map((song,i)=>(
  <SongCard key={song._id} data={song} index={i} type="song"/>
))}

</div>)
}

export default DashboardSongs