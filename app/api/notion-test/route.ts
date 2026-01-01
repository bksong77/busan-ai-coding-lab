import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
        const dbId = process.env.NOTION_CURRICULUM_DB_ID;

        if (!process.env.NOTION_API_KEY) {
            return NextResponse.json({ ok: false, error: "NOTION_API_KEY is missing" }, { status: 500 });
        }
        if (!dbId) {
            return NextResponse.json({ ok: false, error: "NOTION_CURRICULUM_DB_ID is missing" }, { status: 500 });
        }

        const r = await notion.databases.retrieve({ database_id: dbId });
        return NextResponse.json({
            ok: true,
            title: r.title?.[0]?.plain_text ?? "(no title)",
            dbId,
        });
    } catch (e: any) {
        return NextResponse.json(
            { ok: false, status: e?.status, code: e?.code, message: e?.message },
            { status: 500 }
        );
    }
}