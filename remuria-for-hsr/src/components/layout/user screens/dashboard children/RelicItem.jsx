import React, { useEffect, useState } from 'react'

function RelicItem({info}) {
    //meta info has [ rarity+1, setId, position/type ] (this is basically segmenting the tid into 3 parts)
    const [relicMetaInfo, setRelicMetaInfo] = useState(null)

    function imageGetter(){
        if(relicMetaInfo){
            return `https://enka.network/ui/hsr/SpriteOutput/ItemIcon/RelicIcons/IconRelic_${relicMetaInfo[1]}_${relicMetaInfo[2]}.png`
        }
    }

    useEffect(()=>{
        if(info){
            let metaString = info.relic.tid;
            let metaArray = [ metaString.substring(0,1), metaString.substring(1, metaString.length-1), metaString.substring(metaString.length-1) ]
            setRelicMetaInfo(metaArray);
        }
    }, [info])

    useEffect(()=>{console.log("meta array: ", relicMetaInfo)}, [relicMetaInfo])

    function rarityColourGetter(){
        if(relicMetaInfo){
            switch(relicMetaInfo[0]){
                case "6": return `border-amber-400`;
                case "5": return "border-purple-400";
                case "4": return "border-blue-400";
                case "3": return "border-gray-400";
            }
        }
    }

  return (
    <>{relicMetaInfo && <>
        <div className={`rounded-full bg-gray-400 border-2 ${rarityColourGetter()} min-w-[6vw] aspect-[1/3.8] shadow-xl shadow-black/70 overflow-hidden flex flex-col `}
        onClick={()=>{console.log("relic info:", info.relic.tid)}}>
            <img src={imageGetter()} alt="" className="  aspect-square h-[20%] bg-amber-400" />
        </div>
    </>}</>
  )
}

export default RelicItem