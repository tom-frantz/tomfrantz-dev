import { BlogPostPreviewDetails } from "@/app/blog/page";
import FlashyLink from "@/app/(components)/flashy_link";

interface BlogPostPreviewProps {
    link: string;
    post: BlogPostPreviewDetails;
}

export const BlogPostPreview = ({
    link,
    post: { title, description, publishedDate, image },
}: BlogPostPreviewProps) => {
    return (
        <div className="my-6 flex flex-row">
            <div className=" flex-grow ">
                <FlashyLink href={`blog/${link}`} className="no-underline">
                    <h1 className="text-4xl font-bold">{title}</h1>
                </FlashyLink>
                <p className="text-sm italic text-stone-600 dark:text-stone-300">
                    {publishedDate}
                </p>
                <p>{description}</p>
            </div>
        </div>
    );
};
