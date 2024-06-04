import connectMongoDB from "@/app/libs/mongodb";
import { Topic } from "@/app/models/topic";
import { NextRequest, NextResponse } from "next/server";


interface Params {
    id: string;
}
/**
 * @swagger
 * /api/topics/{id}:
 *   put:
 *     summary: Update a topic
 *     tags: [Topics]
 *     description: Update the title and description of a topic by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the topic to update
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
 *       200:
 *         description: Topic updated
 */
export async function PUT(request:NextRequest,{params}:{params:Params}){
    const {id}=params
    const {newTitle:title, newDescription:description}=await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({message:"Topic updated"},{status:200})
}


/**
 * @swagger
 * /api/topics/{id}:
 *   get:
 *     summary: Get a topic by ID
 *     tags: [Topics]
 *     description: Retrieve a single topic by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the topic
 *     responses:
 *       200:
 *         description: A topic
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topic:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 */
export async function GET(request:NextRequest,{params}:{params:Params}) {
    const {id}=params
    await connectMongoDB()
    const topic=await Topic.findOne({_id:id})
    return NextResponse.json({topic},{status:200})
    
}