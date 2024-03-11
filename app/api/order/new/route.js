import { connectToDb } from "@utils/database";
import Order from "@models/order";

export const POST = async (req, res) => {
  const { customerId, name, itemDetails, comment, finish } = await req.json();

  try {
    await connectToDb();

    const orderItems = itemDetails.map((item) => ({
      itemName: item.itemName,
      quantity: item.quantity,
      price: item.price,
    }));

    const newOrder = new Order({
      customerInfo: customerId,
      name: name,
      itemDetails: orderItems,
      comment: comment,
      finish: finish,
    });

    await newOrder.save();
    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new Response("Failed to take a new Order", { status: 500 });
  }
};