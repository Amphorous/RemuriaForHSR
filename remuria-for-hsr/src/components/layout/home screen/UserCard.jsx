import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdArrowBack } from "react-icons/md";
import { removeFocus } from '../../../store/userCardSlice';

function UserCard({uid, cardState}) {

    // useEffect(()=>{console.log(cardState)}, [])

    //dont forget to add removeFocus
    const localUsers = useSelector( state => state.localUsers );
    const [focusedUserDetails, setFocusedUserDetails] = useState();
    const [isBackPressed, setIsBackPressed] = useState(false);

    //timeout < 0 => dont allow refresh
    const [timeout, setTimeout] = useState(0);
    const dispatch = useDispatch();

    useEffect(()=>{
        setFocusedUserDetails(() => {
            return localUsers.filter( u => u.uid === uid)[0]
        })
    }, [localUsers, uid])

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/timeout/${uid}`)
        .then((res) => {
            //console.log(res.data)
            setTimeout(res.data);
        })
    }, [uid])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout((prev)=>{
                return (prev+1);
            })
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);
    

    useEffect(()=>{
        console.log("focused user info loaded: ", focusedUserDetails);
    }, [focusedUserDetails])

    function removeFocusOnBackPress(){
        dispatch(removeFocus());
    }

  return (
    <div className='w-full'>

        <div className="afacad-bold text-8xl text-white text-wrap px-4 py-2 mb-4 rounded-3xl flex">
            <div className={`p-3 rounded-full bg-gray-800/50  transition aspect-[1/1] flex items-center justified-center mr-5
                ${isBackPressed ? '' : 'hover:bg-gray-800/80'}`}
                onClick={()=>{removeFocusOnBackPress()}}
                onMouseDown={() => setIsBackPressed(true)}
                onMouseUp={() => setIsBackPressed(false)}
            >
                <MdArrowBack />
            </div>
            <p>User Found!</p>
        </div>

        <div className='aspect-[31.5/15] w-full  relative rounded-2xl ' 
        >
            <img src="https://enka.network/ui/UI_NameCardPic_Shougun_P.png" className='w-full absolute -z-10 rounded-2xl' />
            <div className="absolute aspect-[31.5/17] w-full bg-gray-800/50 rounded-2xl backdrop-blur-[3px]">

                <div className="absolute text-white px-1 -rotate-90 mt-10 flex libre-baskerville-regular backdrop-blur-xs rounded-4xl z-10">
                    TL: {focusedUserDetails?.level}
                </div>
                <div className="border-2 border-dashed w-[95%] absolute ml-[5%] rounded-2xl h-full border-white/42 z-0 flex flex-col justify-between">
                    <div className="flex">

                    </div>
                    <div className="flex timeoutbox text-gray-400 afacad-semi-bold ml-4 mb-1.5">
                        Last Updated: {(timeout+60 < 60)? <>
                            {timeout + 60} seconds
                        </>:
                        <>
                            {(timeout+60 < 3600 )? <>
                                {Math.floor((timeout+60)/60)} minutes
                            </>: <>
                                {Math.floor((timeout+60)/3600)} hours
                            </>}
                        </>}
                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default UserCard