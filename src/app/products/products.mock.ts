export const productsList:Product[]=[
   {id: 1,name:'Laptop',price:1000 ,description:'good product'},
   {id: 2,name:'Phone',price:200,description:'bad product'},
   {id: 3,name:'Tablet',price:300,description:'ok product'},
   {id: 4,name:'Watch',price:400,description:'very good product'},
   {id: 5,name:'TV',price:500},
   {id: 6,name:'Mouse',price:600,description:'very ok product'},

]

export interface Product{
    id:number | string,
    name:string,
    price:number,
    description?:string

}