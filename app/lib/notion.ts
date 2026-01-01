import { Client } from "@notionhq/client";

export const notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
});

export async function getCurriculums() {
    const databaseId = process.env.NOTION_CURRICULUM_DB_ID!;
    const response = await notionClient.databases.query({
        database_id: databaseId,
        sorts: [{ property: "Order", direction: "ascending" }],
    });
    return response.results;
}

export async function getCases() {
    const databaseId = process.env.NOTION_CASES_DB_ID!;
    const response = await notionClient.databases.query({
        database_id: databaseId,
        sorts: [{ property: "Order", direction: "ascending" }],
    });
    return response.results;
}

export async function getReviews() {
    const databaseId = process.env.NOTION_REVIEWS_DB_ID!;
    const response = await notionClient.databases.query({
        database_id: databaseId,
        // sorts 제거
    });
    return response.results;
}