import { BlogPostPreviewDetails } from "@/app/blog/page";
import FlashyLink from "@/app/(components)/flashy_link";

export const BlogTitle = ({ meta }: { meta: BlogPostPreviewDetails }) => {
    return (
        <div className="not-prose ">
            <h1 className="text-6xl font-bold">{meta.title}</h1>
            <p className="text-sm italic text-stone-600 dark:text-stone-300">
                {meta.publishedDate}
            </p>
        </div>
    );
};
