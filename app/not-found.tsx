export default function notFound() {
  return (
    <div className=" min-h-screen justify-center flex flex-col items-center gap-6 text-center  ">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        404 - Page not found
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
