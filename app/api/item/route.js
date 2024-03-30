import { connectToDb } from "@utils/database";
import Menu from "@models/menu";
export const dynamic = "force-dynamic";
export const GET = async (request) => {
    try {
        await connectToDb();
        
        // Fetch items sorted by popularity in descending order
        const items = await Menu.find({}).populate('creator').sort({ popularity: 1 });
        
        return new Response(JSON.stringify(items), {
            status: 200
        });
    } catch (error) {
        return new Response("Failed to fetch Menu Items", { status: 500 });
    }
}
