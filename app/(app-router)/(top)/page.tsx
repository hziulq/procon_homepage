import NewsList from "../../components/ui/top/NewsList";
import ImageMap from "../../components/ui/top/ImageMap";

export default function Home() {
    return (

        <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-8 w-full">
            <main className="flex-1 rounded-xl bg-black/5 p-6 dark:bg-white/5 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <NewsList title="最新の活動" newsList={["活動内容の詳細はこちら"]} />
                    <NewsList title="最新の更新" newsList={["サイトの更新情報はこちら"]} />
                </div>
            </main>
            <aside className="w-full md:w-80 rounded-xl bg-black/5 p-6 dark:bg-white/5 shadow-sm">
                <p>Side Content</p>
                <div className="flex flex-col gap-4">
                    <ImageMap title="最新の活動" image="/images/top/activity.png" link="/activity" />
                    <ImageMap title="最新の活動" image="/images/top/activity.png" link="/activity" />
                    <ImageMap title="最新の活動" image="/images/top/activity.png" link="/activity" />
                    <ImageMap title="最新の活動" image="/images/top/activity.png" link="/activity" />
                </div>
            </aside>



        </div>
    );
}