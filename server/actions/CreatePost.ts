'use server'

import {db} from '@/server'
import { posts } from '../schema';
import { revalidatePath } from 'next/cache';

export default async function CreatePost(FormData:FormData) {
    const title = FormData.get("title")?.toString();
	// console.log("TCL: CreatePost -> title", title)

    if(!title) return {error: 'Title not found'};

    revalidatePath('/');
    const post = await db.insert(posts).values({
        title
    });

    // console.log(post)

    return {data: post};
}

