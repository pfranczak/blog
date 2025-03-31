import Link from 'next/link';

interface TagProps {
  children: React.ReactNode;
  slug: string;
}

export function Tag({ children, slug }: TagProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="px-3 py-1 rounded lowercase tag shadow"
    >
      {children}
    </Link>
  );
}