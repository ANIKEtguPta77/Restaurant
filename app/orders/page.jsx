import OrderMain from "@components/OrderMain";
import { connectToDb } from "@utils/database";
import Ordermodel from "@models/order";
import OrderPage from "@components/OrderPage";
export const dynamic = "force-dynamic";
async function getOrder() {
    try{
        await connectToDb();
        const items=await Ordermodel.find({})
        // console.log(items,"or")
        return items;
    }catch(error)
    {
        console.log(error);
    }
}

const page = async() => {

    const orderitems=await getOrder();

    // console.log(orderitems,"up")
      
  return (
    <OrderMain orderitems={orderitems}/>
    // <OrderPage />
    // <><p>hfsd</p></>
    
  );
};

export default page
