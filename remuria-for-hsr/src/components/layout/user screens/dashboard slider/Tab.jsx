import React, { useEffect, useRef } from 'react'

function Tab({children, setPosition, selectedTab, setSelectedTab}) {

    const ref = useRef(null);

    useEffect(()=>{
        if (!ref.current) return;
        if((children !== selectedTab) && (selectedTab !== "")) return;
        if(selectedTab === ""){
            setPosition((prev)=>({
                ...prev,
                opacity: 0,
            }))
            return;
        }

        const {width} = ref.current.getBoundingClientRect();
        setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
        })
    }, [selectedTab])

  return (
    <div 
    ref={ref}
    onMouseEnter={()=>{
        if (!ref.current) return;
        if((children !== selectedTab) && (selectedTab !== "")) return;

        const {width} = ref.current.getBoundingClientRect();
        setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
        })
        //console.log(children)
    }}
    onClick={()=>{
        if(children === selectedTab){
            setSelectedTab("");
            return;
        }
        setSelectedTab(String(children)) //this one
    }}
    className="relative z-10 cursor-pointer px-4 py-3 text-white mix-blend-difference flex
     items-center justify-center gap-1 afacad-light uppercase">{children}</div>
  )
}

export default Tab