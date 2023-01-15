


export const fetchData =async (title:string, page?:number)=>{
//console.log(title)
    //const {difficulty, category, number}=start
    const url=`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDIvkAJdlocEzN72lwKjgR0tF76FGRpp98&maxResults=16&startIndex=${page}`
    const data= await fetch(url)
    const res=await data.json()
   //console.log(res)
     return res
     
     } 
export const fetchitem =async (title:string)=>{
        //console.log(title)
            //const {difficulty, category, number}=start
            const url=`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDIvkAJdlocEzN72lwKjgR0tF76FGRpp98`
            const data= await fetch(url)
            const res=await data.json()
            //console.log(res)
             return res
             
             } 
             export const fetchFeatures =async (title:string)=>{
              //console.log(title)
                  //const {difficulty, category, number}=start
                  const url=`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDIvkAJdlocEzN72lwKjgR0tF76FGRpp98`
                  const data= await fetch(url)
                  const res=await data.json()
                 console.log(res)
                   return res
                   
                   } 