import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-900 text-foreground">
      <header className="border-b border-primary-700/80">
        <Container className="flex items-center justify-between py-5">
          <Image
            src="/sabr-logo.svg"
            alt="Sabr logo"
            width={140}
            height={44}
            priority
          />
          <ButtonLink href="/client-portal">
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M3.5 19a7.5 7.5 0 0 1 17 0" />
              </svg>

              Client Portal
            </span>
          </ButtonLink>

        </Container>
      </header>

      <main className="flex flex-1 items-center">
        <Container>
          <Section className="rounded-2xl border border-primary-700/90 bg-primary-800/55 p-8 mt-12 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:p-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Sabr Hajj & Umrah Services
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-primary-50 sm:text-5xl lg:text-5xl">
              We&apos;re building something special for you.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base text-primary-200 sm:text-xl">
              Stay connected.
            </p>

            <a
              href="#mid-content-placeholder"
              aria-label="Scroll to next section"
              className="down-attention mx-auto mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-600 bg-primary-800/70 text-primary-100 transition hover:border-secondary-500 hover:text-secondary-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Section>


          <Section
            id="mid-content-placeholder"
            className="mt-4 grid gap-4 md:grid-cols-3"
          >
            <article className="rounded-2xl border border-primary-700/90 bg-primary-800/45 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.28)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary-600/25 text-secondary-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M8 3.5h8A2.5 2.5 0 0 1 18.5 6v12A2.5 2.5 0 0 1 16 20.5H8A2.5 2.5 0 0 1 5.5 18V6A2.5 2.5 0 0 1 8 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 6.5h4M11 17.5h2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-primary-50">
                Connect with Phone
              </h2>
              <div className="mt-4 space-y-2 text-primary-200">
                <a
                  href="https://wa.me/8801805032201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 hover:text-secondary-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 12.06c0 4.45-3.63 8.07-8.1 8.07a8.2 8.2 0 0 1-4.1-1.1L4 20l1-3.64a8.01 8.01 0 0 1-1.2-4.2c0-4.45 3.63-8.06 8.1-8.06 4.47 0 8.1 3.61 8.1 8.06Z" />
                    <path d="M9.4 8.95c.2-.43.42-.44.61-.45h.52c.15 0 .4.06.52.36.13.3.4.98.43 1.04.03.06.05.23-.05.36-.1.13-.15.2-.3.34-.15.14-.32.31-.46.42-.15.12-.31.25-.13.5.18.25.8 1.3 1.73 2.1 1.19 1.02 2.2 1.34 2.52 1.49.31.15.49.12.67-.07.18-.19.77-.89.98-1.2.2-.31.4-.26.67-.15.27.11 1.73.81 2.03.95.3.14.5.21.57.33.07.12.07.69-.16 1.35-.23.66-1.36 1.26-1.9 1.34-.49.07-1.12.1-1.81-.13-.42-.14-.97-.32-1.67-.62-2.93-1.28-4.84-4.3-4.98-4.5-.13-.2-1.19-1.58-1.19-3.01 0-1.44.74-2.14 1-2.43Z" />
                  </svg>
                  +88 01805-032201
                </a>
                <a
                  href="https://wa.me/8801805032200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 hover:text-secondary-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 12.06c0 4.45-3.63 8.07-8.1 8.07a8.2 8.2 0 0 1-4.1-1.1L4 20l1-3.64a8.01 8.01 0 0 1-1.2-4.2c0-4.45 3.63-8.06 8.1-8.06 4.47 0 8.1 3.61 8.1 8.06Z" />
                    <path d="M9.4 8.95c.2-.43.42-.44.61-.45h.52c.15 0 .4.06.52.36.13.3.4.98.43 1.04.03.06.05.23-.05.36-.1.13-.15.2-.3.34-.15.14-.32.31-.46.42-.15.12-.31.25-.13.5.18.25.8 1.3 1.73 2.1 1.19 1.02 2.2 1.34 2.52 1.49.31.15.49.12.67-.07.18-.19.77-.89.98-1.2.2-.31.4-.26.67-.15.27.11 1.73.81 2.03.95.3.14.5.21.57.33.07.12.07.69-.16 1.35-.23.66-1.36 1.26-1.9 1.34-.49.07-1.12.1-1.81-.13-.42-.14-.97-.32-1.67-.62-2.93-1.28-4.84-4.3-4.98-4.5-.13-.2-1.19-1.58-1.19-3.01 0-1.44.74-2.14 1-2.43Z" />
                  </svg>
                  +88 01805-032200
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-primary-700/90 bg-primary-800/45 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.28)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary-600/25 text-secondary-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M13.5 8.8h2.1V6.03c-.36-.05-1.6-.15-3.04-.15-3 0-5.05 1.85-5.05 5.24V14H4.5v3.1h3v7.9h3.7v-7.9h2.96l.47-3.1H11.2v-2.57c0-.9.25-1.52 1.53-1.52Z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-primary-50">
                Follow us on Facebook
              </h2>
              <a
                href="https://www.facebook.com/sabrhajjumrahservices"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-secondary-300 hover:text-secondary-200"
              >
                Facebook page
                <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="rounded-2xl border border-primary-700/90 bg-primary-800/45 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.28)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary-600/25 text-secondary-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M21.58 7.2a2.97 2.97 0 0 0-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.47.6a2.97 2.97 0 0 0-2.1 2.1c-.6 1.87-.6 5.78-.6 5.78s0 3.92.6 5.78a2.97 2.97 0 0 0 2.1 2.1c1.87.6 7.47.6 7.47.6s5.6 0 7.48-.6a2.97 2.97 0 0 0 2.1-2.1c.6-1.86.6-5.78.6-5.78s0-3.91-.6-5.78ZM10.2 16.53V9.47l6.11 3.53-6.1 3.53Z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-primary-50">
                Watch us on YouTube
              </h2>
              <a
                href="https://www.youtube.com/@sabr_tn2024"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-secondary-300 hover:text-secondary-200"
              >
                YouTube channel
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          </Section>
        </Container>
      </main>

      <footer className="border-t border-primary-700/80 py-6">
        <Container>
          <div
            id="footer-content-placeholder"
            className="rounded-xl border border-primary-700/90 border-dashed bg-primary-800/40 px-4 py-5 text-sm text-primary-300 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
          >
            <p className="font-semibold text-primary-100">Address:</p>
            <p className="mt-1 leading-6">
              Miraz Tower, 1st Floor, 25 Adarsho Chayanir, <br /> Ring Road, Shaymoli
              (Opposite of Badshah Faisal Institute),<br />Dhaka, Bangladesh, 1207
            </p>
            <p className="mt-3 font-semibold text-primary-100">Mob:</p>
            <p className="mt-1">+8801805-032201, +880 1805-032200</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
