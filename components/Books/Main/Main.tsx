import React,{useEffect, useState,useRef, useCallback} from 'react'
import { fetchData } from '../../../utiles';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectedcategory } from '../../../features/CategorySlice'
import BookItem from '../../BookItem/BookItem';
import {BooksConatiner, LoadMore, Top,Container, Grid, BooksConatiner2} from './styles'
import { Item } from '../../Features/Features';
import ToTop from '../../ToTop/ToTop';
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import BookItem2 from '../../BookItem2/BookItem2';



function Main() {
    const [loading, setLoading]=useState<boolean>(false)
    const [data, setData] =useState<Item[]>([])
    const [page, setPage] =useState<number>(1)
    const dispatch=useAppDispatch()
    const category = useAppSelector(state=>state.category?.category)
    const [grid, setGrid] =useState(true)






//category cahnged make new arr
   useEffect( () => {
    setLoading(true);
    setPage(0);
    setData([]);
    console.log(page);
    (fetchData(category, page*15+1).then(function(result){
               setData ([...result.items])
       }))
      setLoading(false);
    }, [category])


//just page cahnged add to the end of page
    useEffect( () => {
      setLoading(true);
        (fetchData(category, page*15+1).then(function(result){
                 setData ([...data,...result.items])
         }))
        setLoading(false);
      }, [page])

//if query changed//


   const handelPage=()=>{
    setPage(page+1)
   }
   
  return (
    <>
    <Container>
    <Top> 
    <div>sort</div>
   
      <Grid>
          <span className={grid ? '' : 'active'} onClick={()=>setGrid(!grid)}><TfiLayoutListThumbAlt/></span>
          <span className={grid ? 'active' : ''} onClick={()=>setGrid(!grid)}><TfiLayoutGrid3Alt /></span>
       
      </Grid>
    </Top>
    {grid ? 
    <BooksConatiner>
    {data && !loading ? data.map((item: Item, index:number)=>{
           return <BookItem item={item} key={item.etag}/>
           
        }) :<p>loading...</p>} 

       <ToTop />
    <LoadMore onClick={handelPage}>More</LoadMore>
    </BooksConatiner> :


    <BooksConatiner2>
       {data && !loading ? data.map((item: Item, index:number)=>{
           return <BookItem2 item={item} key={item.etag}/>
           
        }) :<p>loading...</p>} 
    <ToTop />
   
 <LoadMore onClick={handelPage}>More</LoadMore>
</BooksConatiner2>}
    </Container>
   
      </>
  )
}

export default Main




// const observer=useRef<IntersectionObserver>()
   
// const lastBookelementRef = useCallback((node: any)=>{
//        if(loading) return
//        if (observer.current) observer.current.disconnect()
//        observer.current = new IntersectionObserver(entries=>{
//         if(entries[0].isIntersecting){
//         setPage(5)
//           }
//        })
//      if(node) observer.current.observe(node)
//        },[loading])
