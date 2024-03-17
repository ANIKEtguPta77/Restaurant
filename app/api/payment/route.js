const stripe = require("stripe")(process.env.STRIPE_SECRET);


export const POST = async (req, res) => {
    const { amount, name, email, phonenumber } = await req.json();

   try{
    const products=[{"dish":"panner",price:100,"qnty":2},{"dish":"Hanner",price:300,"qnty":2},{"dish":"curd",price:300,"qnty":2}]


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish,
                
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });

    return new Response("Success to fetch items",{
        status:200
    })
    }
    catch(error)
    {
        return new Response("Failed to fetch Menu Items",{status:500})
    }

}







