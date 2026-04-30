export default function Loading() {
    return (
        <>
            <div className="animate-pulse">
                {/* Title Skeleton */}
                <div className="h-8 bg-black/10 dark:bg-white/10 rounded-md w-3/4 mb-10 mt-3"></div>

                {/* Date Skeleton */}
                <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-32 mb-8"></div>

                {/* Content Skeleton */}
                <div className="space-y-4">
                    <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-full"></div>
                    <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-full"></div>
                    <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-11/12"></div>
                    <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-full"></div>
                    <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-4/5"></div>

                    <div className="pt-8">
                        <div className="h-48 bg-black/10 dark:bg-white/10 rounded-md w-full mb-4"></div>
                        <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-full"></div>
                        <div className="h-4 bg-black/10 dark:bg-white/10 rounded-md w-5/6"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
