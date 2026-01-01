import { getCases } from "../lib/notion";

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
function getMulti(row: any, key: string) {
    return (row?.properties?.[key]?.multi_select ?? []).map((x: any) => x.name);
}
function getRichText(row: any, key: string) {
    return row?.properties?.[key]?.rich_text?.[0]?.plain_text ?? "";
}
function getUrl(row: any, key: string) {
    return row?.properties?.[key]?.url ?? "";
}
function getCheckbox(row: any, key: string) {
    return row?.properties?.[key]?.checkbox ?? false;
}

export default async function CasesPage() {
    const rows = await getCases();

    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="text-3xl font-bold">Cases</h1>
            <p className="mt-2 text-gray-600">노션 DB에서 불러온 사례 목록입니다.</p>

            <ul className="mt-8 grid gap-4">
                {rows.map((row: any) => {
                    const title = getTitleFromRow(row);
                    const category = getSelect(row, "Category");
                    const summary = getRichText(row, "Summary");
                    const tracks = getMulti(row, "Related Track");
                    const blogUrl = getUrl(row, "Blog URL");
                    const featured = getCheckbox(row, "Featured");

                    return (
                        <li key={row.id} className="rounded-xl border p-5">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-lg font-semibold">{title}</h2>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">{category}</span>
                                {featured && (
                                    <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {tracks.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {tracks.map((t: string) => (
                                        <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {summary && <p className="mt-3 text-gray-700">{summary}</p>}

                            {blogUrl && (
                                <a className="mt-3 inline-block text-blue-600 underline" href={blogUrl} target="_blank" rel="noreferrer">
                                    블로그 보기
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}