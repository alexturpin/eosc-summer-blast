import Image from "next/image"
import { useEffect, useState } from "react"

const logoSize = { width: 580, height: 809, ratio: 0.75 }
const dtsLogoSize = { width: 868, height: 291, ratio: 0.6 }

const registrationDate = new Date("2023-04-02T20:00:00-04:00")

export default function Home() {
  const [localDateTime, setLocalDateTime] = useState("Sunday, April 2 at 8 p.m. EDT")

  useEffect(() => {
    setLocalDateTime(
      registrationDate.toLocaleString("en-CA", {
        day: "numeric",
        weekday: "long",
        month: "long",
        hour: "numeric",
        hourCycle: "h12",
        timeZoneName: "short",
      })
    )
  }, [])

  return (
    <>
      <header>
        <h1 className="sr-only">EOSC 2023 Summer Blast</h1>
        <h2 className="sr-only">IPSC Level III</h2>
      </header>

      <main className="flex flex-wrap flex-col items-center p-8">
        <Image
          className="mb-4"
          src="/logo-v1-trimmed.png"
          alt="logo"
          width={logoSize.width * logoSize.ratio}
          height={logoSize.height * logoSize.ratio}
          priority
        />
        <h3 className="text-eosc-blue text-center text-4xl md:text-6xl font-bold mb-8">
          July 26-30, 2023
        </h3>

        {/*<p className="text-eosc-blue text-center text-3xl md:text-5xl font-bold mb-4 max-w-screen-md">
          Registration opens{" "}
          <a
            className="underline hover:no-underline"
            href="https://practiscore.com/eosc-summer-blast-2023/register"
          >
            on PractiScore
          </a>{" "}
          {localDateTime}
        </p>

        <p className="text-eosc-blue text-center text-2xl md:text-4xl font-bold mb-4 max-w-screen-md">
          More info coming soon...
        </p>*/}

        <a
          className="text-eosc-blue text-center text-2xl md:text-4xl font-bold max-w-screen-md underline hover:no-underline flex flex-row items-baseline gap-2 mb-4 "
          href="https://s3.amazonaws.com/ps-meta/198388/documents/1688667249Matchbook-YOW.pdf"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span>Matchbook</span>
        </a>

        <a
          className="text-eosc-blue text-center text-2xl md:text-4xl font-bold max-w-screen-md underline hover:no-underline flex flex-row items-baseline gap-2 mb-4 "
          href="https://s3.amazonaws.com/ps-meta/198388/documents/1688667282Matchbook-YOW_organized.pdf"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span>Stages</span>
        </a>
      </main>

      <section className="p-8">
        <div className="flex flex-wrap flex-col justify-center items-center gap-4">
          <h4 className="text-eosc-blue text-center text-2xl md:text-4xl font-bold max-w-screen-md">
            Match sponsor
          </h4>
          <a href="https://www.doubletapsports.com/">
            <Image
              src="/dts.png"
              alt="DoubleTap Sports logo"
              width={dtsLogoSize.width * dtsLogoSize.ratio}
              height={dtsLogoSize.height * dtsLogoSize.ratio}
            />
          </a>
        </div>
        {/*
        Range sponsor

        Stage sponsor
        */}
      </section>
    </>
  )
}
