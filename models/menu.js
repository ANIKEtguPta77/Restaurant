import mongoose, {Schema,model,models} from "mongoose";


const MenuSchema=new Schema({

    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    prompt:{
        type:String,
        required:[true,'Prompt is required']
    },
    tag:{
        type:String,
        required:[true,'Tag is required']
    }
});

const Menu=models.Prompt || model('Menu',MenuSchema)

export default Menu