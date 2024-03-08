//first function
//dummy data
const postList=[
    { 
       title:"My first post",
       content:"A family picnic .enjoyed a lot .Fresh environment #tourTravel",
       author:"Tsering Wangchu",

    },
    { 
        title:"My first post",
        content:"A family picnic .enjoyed a lot .Fresh environment #tourTravel",
        author:"Tsering Wangchu",
        
     }
     , { 
        title:"My first post",
        content:"A family picnic .enjoyed a lot .Fresh environment #tourTravel",
        author:"Tsering Wangchu",
        
     }
     
]
export const print=(req,res)=>{
  //  return res.send("Hello me");
  return res.render('home',{
     
     postList
  })
}