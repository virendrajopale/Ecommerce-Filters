import { motion, useMotionValue, useTransform } from 'framer-motion'
import React from 'react'

const Pagination = ({page,setPage,products,totalPages,maxVisible=5}) => {
    totalPages=Math.ceil(products.length / 12)
    const handleSelectedPage=(pageNo)=>{
        if(pageNo>=1 && pageNo<=totalPages && pageNo!==page)
         setPage(pageNo)
    }


      const renderPageKey=(currPage,key)=>{
         return         <motion.span whileTap={{scale:1.1}} 
          onClick={()=>handleSelectedPage(currPage)} className={`py-3 px-4 border border-gray-400 cursor-pointer rounded-full border-none ${page===currPage?'bg-yellow-300':""}`} 
         key={key}>{currPage}</motion.span>

      }
    const renderPagesNumbers=()=>{
        const pageNumbers=[];
        if( totalPages<=maxVisible){
            for (let i = 1; i < totalPages; i++) {
                pageNumbers.push(renderPageKey(i))
                
            }
        }
        else{
            const startPage=Math.max(1,page-Math.floor(maxVisible/2));
            const endPage=Math.min(totalPages,startPage+maxVisible-1);
            if(startPage>1){
                if(startPage>=2) pageNumbers.push(renderPageKey(1))
                pageNumbers.push(renderPageKey("...","elipse-start"))
            }
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(renderPageKey(i))
                
            }
            if(endPage<totalPages){
                pageNumbers.push(renderPageKey("...","elipse-end"))
                if(endPage<totalPages-1){
                    pageNumbers.push(renderPageKey(totalPages))

                }
            }
          
        }
        return pageNumbers;
        
    }


   
  return (

    <motion.div className='p-2 my-3 mx-0 flex justify-center gap-3'>
    <motion.span whileTap={{scale:1.1,backgroundColor:'yellow'}}     onClick={()=>handleSelectedPage(page-1)} className={`${page>1?`py-3 px-4 border border-gray-400 cursor-pointer rounded-full border-none`:"hidden"} `}>◀</motion.span>
    {renderPagesNumbers()}
    <motion.span whileTap={{scale:1.1,backgroundColor:'yellow'}}  onClick={()=>handleSelectedPage(page+1)} className={`${page<totalPages?"py-3 px-4 border border-gray-400 cursor-pointer rounded-full border-none":"hidden"}`}>▶</motion.span>
    </motion.div>
  )
}

export default Pagination