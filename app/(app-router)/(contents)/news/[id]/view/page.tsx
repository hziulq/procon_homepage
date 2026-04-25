import { fetchInternalEndpoint } from "@/app/lib/fetch-internal-endpoint";

export default async function NewsViewPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const response = await fetchInternalEndpoint(`POST`, `/news/${id}`);
    const newsData = await response.json();

    return (
        <div>
            <h1>{newsData.title || "News View Page"}</h1>
            <p>{newsData.content || "News View Page"}</p>
            <p>{newsData.created_at || "News View Page"}</p>
        </div>
    );
}