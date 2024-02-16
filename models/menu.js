import mongoose, {Schema,model,models} from "mongoose";


const MenuSchema=new Schema({

    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    itemname:{
        type:String,
        required:[true,'Item Name is required']
    },
    itemprice:{
        type:String,
        required:[true,'Price is required']
    },
    available:{
        type:Boolean
    }
});

const Menu=models.Menu || model('Menu',MenuSchema)

export default Menu