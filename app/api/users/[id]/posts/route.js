import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const promts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(promts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
