import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Organize Your <span className="text-primary">Tasks</span>{" "}
              Efficiently
            </h1>
            <p className="text-xl mx-auto  text-gray-600 dark:text-gray-400 max-w-2xl ">
              A powerful and simple task management application to keep track of
              your work, priorities, and deadlines all in one place.
            </p>
          </div>

          <div className="flex  flex-row gap-4 pt-8">
            <Link href="/tasks">
              <Button size="lg" className="text-base px-8">
                Get Started
              </Button>
            </Link>
            <Link
              href="https://github.com/V1talii23/todo-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-base px-8">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to boost your productivity?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Start managing your tasks with our intuitive task management system
            today.
          </p>
          <Link href="/tasks">
            <Button size="lg" className="text-base px-8">
              Create Your First Task
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
