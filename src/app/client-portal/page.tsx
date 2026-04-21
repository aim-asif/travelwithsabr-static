import Image from "next/image";
import Link from "next/link";

export default function ClientPortalPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary-900 px-5 py-12 text-foreground sm:px-8">
      <div className="w-full max-w-md rounded-2xl border border-primary-700/90 bg-primary-800/55 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <Image
            src="/sabr-pms.svg"
            alt="Sabr PMS logo"
            width={150}
            height={150}
            priority
          />
          <h1 className="mt-4 text-2xl font-bold text-primary-50">
            Welcome to Sabr client portal
          </h1>
          <p className="mt-2 text-sm text-primary-200">
            Login to continue. Signup or registration is currently unavailable.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-3">
            <label htmlFor="email" className="text-sm font-medium text-primary-100">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-primary-600 bg-primary-900/70 px-3 py-2.5 text-sm text-primary-50 outline-none transition focus:border-secondary-500"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="password" className="text-sm font-medium text-primary-100">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-primary-600 bg-primary-900/70 px-3 py-2.5 text-sm text-primary-50 outline-none transition focus:border-secondary-500"
            />
          </div>

          <button
            type="submit"
            className="mt-1 inline-flex w-full items-center justify-center rounded-full border border-secondary-400 bg-secondary-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-secondary-300 hover:bg-secondary-500"
          >
            Login
          </button>

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full border border-primary-600 bg-primary-900/70 px-5 py-2.5 text-sm font-semibold text-primary-100 transition hover:border-primary-500 hover:text-primary-50"
          >
            Back to homepage
          </Link>
        </form>
      </div>
    </main>
  );
}
