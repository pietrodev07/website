import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="h-svh flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-bold">404 - Not Found</h1>
      <Link className="underline underline-offset-4" href="/">
        Back to the homepage
      </Link>
    </main>
  );
}
