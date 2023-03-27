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

      <main className="flex flex-wrap flex-col items-center p-8 pb-16">
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

        <p className="text-eosc-blue text-center text-3xl md:text-5xl font-bold mb-4 max-w-screen-md">
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
        </p>
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
