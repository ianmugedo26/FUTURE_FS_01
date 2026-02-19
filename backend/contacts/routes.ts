import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import { contacts } from "@/models/contact";

export async function POST (req: Request) {
    try {
        await connectDB();

        const body = await req.json();

        const contact = await  Contact.create(body);

        return NextResponse.json({ success: true, data: contact }, {status: 201});
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Server Error" },
            { status: 500}
        );
    }
}
