interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function BlogImage({ src, caption, alt }: BlogImageProps) {
  return (
    <>
      <img src={src} alt={alt} className="not-prose mb-4" />
      {caption ? <span className="mt-2 text-gray-600">{caption}</span> : null}
    </>
  );
}
