import axios from 'axios';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import RelicItem from './RelicItem';

function DashboardsRelics() {

  const [relicPageNumber, setRelicPageNumber] = useState(1);
  const [relicsInfo, setRelicsInfo] = useState(null);
  const uid = useLocation().pathname.split("/")[2];

  useEffect(()=>{
    axios.get(`http://localhost:8080/user/relics/${uid}/${relicPageNumber}`)
    .then((res)=>{
      console.log("relic response: ", res.data)
      setRelicsInfo([...res.data, "lastItem"])
    })
    .catch((err)=>{
      console.log(err)
      setRelicsInfo("error")
    })
  }, [])

  return (
    <OverlayScrollbarsComponent
      // options={{
      //   scrollbars: { autoHide: 'scroll' },
      // }}
      className="w-full h-full bg-grafy-800 p-2 max-h-[75vh] overflow-hidden"
    >
      <div className="flex flex-wrap w-full p-5 gap-1.5 justify-center">
        {
          relicsInfo !== null &&
          relicsInfo.map((record, index) => (
            <div
              key={index}
              className="bg-whidte m-1 "
            >

              {(relicsInfo[index] === "error")?<>
                <div className="rounded-full bg-red-400 p-2"></div>
              </>:<>
                {(relicsInfo[index] === "lastItem")?<>
                  <div className="rounded-full bg-blue-400 p-2"></div>
                </>:<>
                  <RelicItem info={relicsInfo[index]}/>
                </>}
              </>}
              
            </div>
            
          ))
          
        }
      </div>
    </OverlayScrollbarsComponent>


  )
}

export default DashboardsRelics