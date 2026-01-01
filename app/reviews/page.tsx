import { getReviews } from "../lib/notion";

function getTitleFromRow(row: any) {
    const props = row?.properties ?? {};
    const titleKey = Object.keys(props).find((k) => props[k]?.type === "title");
    if (!titleKey) return "(이름 없음)";
    const t = props[titleKey]?.title;
    return t?.[0]?.plain_text ?? "(이름 없음)";
}
function getSelect(row: any, key: string) {
    return row?.properties?.[key]?.select?.name ?? "-";
}
function getRichText(row: any, key: string) {
    return row?.properties?.[key]?.rich_text?.[0]?.plain_text ?? "";
}
function getCheckbox(row: any, key: string) {
    return row?.properties?.[key]?.checkbox ?? false;
}

export default async function ReviewsPage() {
    const rows = await getReviews();

    // Display 체크된 것만 보여주기 (원하면 제거 가능)
    const visible = rows.filter((r: any) => getCheckbox(r, "Display"));

    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            <h1 className="text-3xl font-bold">Reviews</h1>
            <p className="mt-2 text-gray-600">노션 DB에서 불러온 후기입니다.</p>

            <ul className="mt-8 grid gap-4">
                {visible.map((row: any) => {
                    const name = getTitleFromRow(row);
                    const type = getSelect(row, "Type");
                    const comment = getRichText(row, "Comment");

                    return (
                        <li key={row.id} className="rounded-xl border p-5">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-lg font-semibold">{name}</h2>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">{type}</span>
                            </div>
                            {comment && <p className="mt-3 text-gray-700">{comment}</p>}
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}