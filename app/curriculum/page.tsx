import { getCurriculums } from "../lib/notion";

function getTitleFromRow(row: any) {
    const props = row?.properties ?? {};
    const titleKey = Object.keys(props).find((k) => props[k]?.type === "title");
    if (!titleKey) return "(제목 없음)";
    const t = props[titleKey]?.title;
    return t?.[0]?.plain_text ?? "(제목 없음)";
}

function getSelect(row: any, key: string) {
    return row?.properties?.[key]?.select?.name ?? "-";
}

function getRichText(row: any, key: string) {
    return row?.properties?.[key]?.rich_text?.[0]?.plain_text ?? "";
}

export default async function CurriculumPage() {
    const rows = await getCurriculums();

    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="text-3xl font-bold">Curriculum</h1>
            <p className="mt-2 text-gray-600">노션 DB에서 불러온 커리큘럼 목록입니다.</p>

            <ul className="mt-8 grid gap-4">
                {rows.map((row: any) => {
                    const title = getTitleFromRow(row);
                    const track = getSelect(row, "Track");
                    const level = getSelect(row, "Level");
                    const desc = getRichText(row, "Description");

                    return (
                        <li key={row.id} className="rounded-xl border p-5">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">{track}</span>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">{level}</span>
                            </div>
                            {desc && <p className="mt-2 text-gray-700">{desc}</p>}
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}