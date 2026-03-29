export default function NewsList(props: { title: string, newsList: string[] }) {
    return (
        <div className="flex flex-col bg-white dark:bg-black/20 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                {props.title}
            </h2>
            <ul className="flex-1 space-y-2">
                {props.newsList.map((news, index) => (
                    <li key={index}>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">{news}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}