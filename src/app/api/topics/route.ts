import connectMongoDB from "@/app/libs/mongodb"
import { Topic } from "@/app/models/topic"
import { NextResponse,NextRequest} from "next/server"


/**
 * @swagger
 * tags:
 *   - name: Topics
 *     description: API for managing topics
 */

/**
 * @swagger
 * /api/topics:
 *   post:
 *     summary: Create a new topic
 *     tags: [Topics]
 *     description: Create a new topic with a title and description
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Topic created
 */
export async function POST(request:NextRequest):Promise<NextResponse>{
    const{title,description}=await request.json()
    await connectMongoDB()
    await Topic.create({title,description})
    return NextResponse.json({message:"Topic created"},{status:201})
}

/**
 * @swagger
 * /api/topics:
 *   get:
 *     summary: Get all topics
 *     tags: [Topics]
 *     description: Retrieve a list of all topics
 *     responses:
 *       200:
 *         description: A list of topics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topics:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 */
export async function GET() {
    await connectMongoDB()
    const topics= await Topic.find()
    return NextResponse.json({topics})
}


/**
 * @swagger
 * /api/topics:
 *   delete:
 *     summary: Delete a topic
 *     tags: [Topics]
 *     description: Delete a topic by its ID
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the topic to delete
 *     responses:
 *       200:
 *         description: Topic deleted
 */
export async function DELETE(request:NextRequest){
    const id=request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"Topic Deleted"},{status:200})
}

