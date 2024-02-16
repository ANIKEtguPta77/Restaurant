import { connectToDb } from "@utils/database";
import Menu from "@models/menu";


export const GET=async(request)=>{

    try{
        await connectToDb();
        const items=await Menu.find({}).populate('creator');
        
        return new Response(JSON.stringify(items),{
            status:200
        })
    }catch(error)
    {
        return new Response("Failed to fetch Menu Items",{status:500})
    }
}