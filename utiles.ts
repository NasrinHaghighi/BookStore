
interface Props{
    title:string
}
export const fetchData =async ({title}:Props)=>{
    //console.log(title)
    //const {difficulty, category, number}=start
    const url=`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDIvkAJdlocEzN72lwKjgR0tF76FGRpp98`
    const data= await fetch(url)
    const res=await data.json()
   
     return res
     
     } 