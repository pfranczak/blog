export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 text-gray-600 dark:text-gray-400">
      All rights reserved © Przemek Franczak {currentYear}
    </footer>
  );
}
