import React from 'react'
import ach from '../../../assets/achievementIcon.webp';
import { IoMdClose } from "react-icons/io";

function FailedUserCard({setCardState}) {

    function profileImageGetter(headIcon){
        return "https://enka.network/ui/hsr/SpriteOutput/AvatarRoundIcon/UI_Message_Contacts_Anonymous.png";
    }

    function regionColourPicker(region){
        switch(region){
            case "MHY": return 'bg-white';
            case "ASIA": return 'bg-[#FDF628]';
            case "CN": return 'bg-[#FD4428]';
            case "NA": return 'bg-[#FDA828]';
            case "EU": return 'bg-[#285AFD]';
            case "THM": return 'bg-[#2feb25]';
        }
        return `bg-purple-400`
    }

  return (
    <div className='w-full'>

        <div className="afacad-bold text-8xl text-white text-wrap px-4 py-2 mb-4 rounded-3xl flex items-center">
            <p className='leading-[85%]'>User Not Found!</p>
        </div>

        <div className='aspect-[31.5/15] w-full  relative rounded-2xl bg-[#605138]' 
        
        >
            
            <div className="absolute aspect-[31.5/17] w-full bg-[#625c49]/50 rounded-2xl backdrop-blur-[3px]">

                
                <div className="border-2 border-dashed w-[95%] ml-[5%] rounded-2xl h-full border-white/42 z-0 flex flex-col justify-between relative">

                    <div className=" absolute flex flex-col  items-center 
                    justify-center libre-baskerville-regular right-0 top-1/4  -mr-[2px]">

                        <div className="flex items-center justify-center bg-black/15 text-white backdrop-blur-sm py-3 px-2 mb-3
                        rounded-l-full hover:bg-white hover:text-black hover:border-black/42 transition
                        border-l-2 border-t-2 border-b-2 border-dashed border-white/42 cursor-pointer"
                            onClick={()=>{setCardState(0)}}
                        >
                            <IoMdClose />
                        </div>
                        
                    </div>

                    <div className="cardbody flex flex-col w-full ">
                        <div className="flex nameandpfpbox ml-7 mr-5 mt-5 items-center ">
                            <img src={profileImageGetter("0")} className='h-full aspect-square bg-black/12 rounded-full 
                                
                            ' />
                            <div className="flex flex-col overflow-hidden text-ellipsis">
                                <p className="libre-baskerville-bold text-white text-[300%]
                                ml-4 overflow-hidden text-ellipsis">???</p>
                                <p className="libre-baskerville-regular text-white/80 text-[80%] -mt-2
                                ml-4 overflow-hidden text-ellipsis">Something went wrong...</p>
                            </div>
                        </div>

                        <div className="flex flex-col ml-10 mt-5"
                        // 
                        >

                            <div className="flex">
                                <div className={`${regionColourPicker("fff")} afacad-bold text-black px-2 text-center rounded-sm flex justify-center items-center mr-4`}>
                                    "NULL"
                                </div>

                                <div className="bg-[#93590D] afacad-bold text-white px-2 text-center rounded-sm flex justify-center items-center mr-4">
                                    <img src={ach} className='w-[24px] h-[24px]' />
                                    N/A
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="flex timeoutbox text-white/80 afacad-semi-bold ml-4 mb-1.5 justify-between">
                        <div className="flex">
                            Wrong UID perchance..?
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 vertical-text barcode-font mb-2 text-white/42">000000000</div>

        </div>
        
    </div>
  )
}

export default FailedUserCard