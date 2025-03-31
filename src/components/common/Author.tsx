import Link from 'next/link';

interface AuthorProps {
  id: string;
  name: string;
}

export function Author({ id, name }: AuthorProps) {
  return (
    <Link 
      href={`/author/${id}`}
      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
    >
      {name}
    </Link>
  );
}
