import Head from "next/head";

export default function Home() {
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>Martial Way Blog</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="bg-black">
                <h1 className="font-bold text-3xl text-red-400">Hello world</h1>
            </div>

        </div>
    )
}