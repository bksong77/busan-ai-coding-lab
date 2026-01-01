import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });

        // 내가 접근 가능한 "데이터베이스"만 검색
        const res = await notion.search({
            filter: { property: "object", value: "database" },
            page_size: 50,
        });

        const dbs = res.results.map((db: any) => ({
            id: db.id,
            title: db.title?.[0]?.plain_text ?? "(no title)",
        }));

        return NextResponse.json({ ok: true, count: dbs.length, dbs });
    } catch (e: any) {
        return NextResponse.json(
            { ok: false, status: e?.status, code: e?.code, message: e?.message },
            { status: 500 }
        );
    }
}