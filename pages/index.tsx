import Image from "next/image"
import { useEffect, useState } from "react"

const logoSize = { width: 580, height: 809 }
const logoRatio = 0.75

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

      <main className="flex flex-wrap flex-col items-center py-8 px-8">
        <Image
          className="mb-4"
          src="/logo-v1-trimmed.png"
          alt="logo"
          width={logoSize.width * logoRatio}
          height={logoSize.height * logoRatio}
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
      </main>
    </>
  )
}
