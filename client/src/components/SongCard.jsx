import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { IoTrash } from 'react-icons/io5'
import { deleteAlbumById, deleteArtistById, deleteSongById, getAllAlbums, getAllArtists, getAllSongs } from '../api'
import { useStateValue } from '../context/StateProvider'
import { storage } from '../config/firebase.config'
import { ref } from 'firebase/storage'
import { actionType } from '../context/reducer'
const SongCard = ({data,index,type}) => {
    const [isDelete, setIsDelete] = useState(false) 
    const [{allArtists,allAlbums,allSongs,songIndex,isSongPlaying},dispath]=useStateValue();
    const deleteObject =(data) =>{
        // setIsDelete(true)
        if(type ==="song"){

            // const deleteRef =ref(storage,data.imageURL);
            // deleteObject(deleteRef).then(()=>{

            // })
            deleteSongById(data._id).then((res)=>{
            //         if(!allSongs){
                      getAllSongs().then((data) =>{
                        dispath({
                          type:actionType.SET_ALL_SONGS,
                          allSongs:data.song,
                        })
                      })
                    
        })
    }
    if(type ==="album"){
        deleteAlbumById(data._id).then((res)=>{
                  getAllAlbums().then((data) =>{
                    dispath({
                      type:actionType.SET_ALL_ALBUMS,
                      allAlbums:data.album,
                    })
                  })
                
    })
}
    if(type ==="artist"){
        deleteArtistById(data._id).then((res)=>{
                  getAllArtists().then((data) =>{
                    dispath({
                      type:actionType.SET_ALL_ARTISTS,
                      allArtists:data.artist,
                    })
                  })
    })
}
}
const addToContext=() =>{
    if(!isSongPlaying){
        dispath({
            type:actionType.SET_ISSONG_PLAYING,
            isSongPlaying:true
        })
    }
    if(songIndex!==index){
        dispath({
            type:actionType.SET_SONG_INDEX,
            songIndex:index,
        })
    }
}
  return (
    <motion.div className='relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center' onClick={type==="song" && addToContext}>
        <div className='w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden
        '>
            <motion.img 
            whileHover={{scale:1.05}}
            src={data?.imageURL} className='w-full rounded-lg object-cover h-[143px] '/>
        </div>
        <p className='text-base text-center text-headingColor font-semibold my-2'>
            {data.name.length>25?`${data.name.slice(0,25)}..`:data.name}
            {data.artist && (
            <span className='block text-sm text-gray-400 my-1'>{data.artist.length>25?`${data.artist.slice(0,25)}....`:data.artist}</span>
            )}
            </p>
        <div className='w-full absolute bottom-2 right-2 flex items-center justify-between px-4'>
            <motion.i whileTap={{scale:0.75}} className='text-base text-red-400 drop-shadow-md hover:text-red-600'
            onClick={() => setIsDelete(true)}>
                <IoTrash />
            </motion.i>
        </div>
        {isDelete && (
        <motion.div className='absolute inset-0 backdrop-blur-md bg-cardOverlay flex flex-col items-center justify-center px-4 py-2'>
            <p className='text-xl text-headingColor font-semibold text-center'>Are you sure you want to delete it?</p>
            <br></br><div className='flex items-center gap-4'>
                <motion.button className='px-2 py-1 text-sm uppercase rounded-md bg-green-300 cursor-pointer hover:bg-green-400' whileTap={{scale:0.7}} onClick={() => deleteObject(data)}>Yes</motion.button>
                <motion.button className='px-2 py-1 text-sm uppercase rounded-md bg-red-300 cursor-pointer hover:bg-red-400' whileTap={{scale:0.7}} onClick={()=>setIsDelete(false)}>No</motion.button>
            </div>
        </motion.div>
        )}
    </motion.div>
    
  )
}

export default SongCard