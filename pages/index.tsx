import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Clipboard } from 'react-feather'

const Home: NextPage = () => {
  function clientCopy(content: string) {
    navigator.clipboard.writeText(content);
  }
  return (
    <div className="grid place-items-center py-8 px-6 gap-8">
      <Head>
        <title>Ajuda aí | Isaac</title>
        <meta name="description" content="Ajude Isaac Lourenço" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="grid place-items-center">
        <header>
          <Image 
            src="/isaac.jpeg"
            width="80px"
            height="80px"
            className="rounded-full"
          />
        </header>
        <main className="grid place-items-center gap-2 text-center">
          <h2>Isaac Lourenço</h2>
          <h1 className="font-bold text-xl sm:text-2xl">
            Obrigado por me ajudar
          </h1>
        </main>
      </header>

      <main className="grid place-items-center gap-4 sm:gap-0">
        <Image
          src="/qrcode-pix.png"
          width="310px"
          height="310px"
        />
        <button
          onClick={() => clientCopy("7d4a6003-af72-49a7-a29f-412493859459")}
          className="flex flex-wrap items-center justify-center gap-2 bg-blue-800 p-4 rounded-md text-white"
        >
          <Clipboard />
          <span>Copiar chave pix</span>
        </button>
      </main>
    </div>
  )
}

export default Home
