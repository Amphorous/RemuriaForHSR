import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router';
import UserCard from '../home screen/UserCard';
import PillSlidingSelectBar from './dashboard slider/PillSlidingSelectBar';

function Dashboard() {

  const focusedUser = useSelector( state => state.focusedUser );
  const uid = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();

  //0 = relics, 1 = builds
  const [rightDisplaySelector, setRightDisplaySelector] = useState("relics");

  useEffect(()=>{
    console.log("right display selector: ", rightDisplaySelector)
    navigate(`${rightDisplaySelector}`)
  }, [rightDisplaySelector])

  useEffect(()=>{console.log("provided uid in dashboard: ", uid)}, [uid])


  return (
    <div className='flex justify-around bg-ambder-400 w-full'>

      <div className="max- w-[30vw] min-w-[480px] flex items-center">
        <UserCard uid={uid} showButtons={false} />
      </div>

      <div className=" w-[60vw] min-w-[480] flex flex-col items-center">
        <PillSlidingSelectBar uid={uid} rightDisplaySelector={rightDisplaySelector} setRightDisplaySelector={setRightDisplaySelector}/>
        <div className="bg-gray-400 w-full h-full my-5">
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Dashboard