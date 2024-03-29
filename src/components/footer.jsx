export default function Footer() {
  return (
    <footer className="bg-secondary w-full h-16 z-30 text-primary/80 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="font-semibold">
          &copy; {new Date().getFullYear()} My Portfolio
        </p>
      </div>
    </footer>
  );
}
