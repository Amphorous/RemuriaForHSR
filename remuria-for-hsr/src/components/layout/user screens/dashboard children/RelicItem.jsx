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
                case "6": return `bg-amber-400`;
                case "5": return "bg-purple-400";
                case "4": return "bg-blue-400";
                case "3": return "bg-gray-400";
            }
        }
    }

  return (
    <>{relicMetaInfo && <>
        <div className={`rounded-full ${rarityColourGetter()} min-w-[6vw] aspect-[1/3.8] shadow-xl shadow-black/70 relative overflow-hidden bg-gradient-to-b from-black to-transparent`}
        onClick={()=>{console.log("relic info:", info.relic.tid)}}>
            <img src={imageGetter()} alt="" className=" absolute aspect-[1/1] h-[60%] object-cover -translate-y-1/2 top-1/2 object-[35%_center] z-10" />
        </div>
    </>}</>
  )
}

export default RelicItem