import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import Image from 'next/image';
import lindsay from '../public/lindsay.png'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Lindsay Warr Portfolio</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white px-10 ">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between">
                    <h1 className="text-xl font-burtons">Hello</h1>
                    <ul className="flex items-center">
                        <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                        </li>
                        <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resumé</a></li>
                    </ul>
                    </nav>
                    <div className="text-center p-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium ">Lindsay Warr</h2>
                        <h3 className="text-2xl" py-2>Front End Developer</h3>
                        <p className="text-md py-5 leading-8 text-gray-800">Hello I'm Lindsay!</p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiFillInstagram />
                    </div>
                    <div className="bg-gradient-to-b from-teal-500 rounded-full flex max-w-xs mx-auto py-5 px-5 mt-20 overflow-hidden" layout="fill" objectfit="cover">
                        <Image src={lindsay} alt="Lindsay Warr" layout="auto" objectFit="cover"/>     
                    </div>                    
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py1">Blah blah blah</h3>
                        <p className="text-md py-2 leading-8 text-gray-800">
                            Pok pok wayfarers blue bottle gluten-free. Celiac before they sold out stumptown pork belly, chambray <span className="text-teal-500 text-md">literally</span> jean shorts fanny pack polaroid PBR&B ramps hashtag retro bruh cupping. Keffiyeh single-origin coffee wolf pickled. Post-ironic 90's normcore, meh +1 try-hard tumblr JOMO squid waistcoat grailed. Cray glossier quinoa wolf grailed celiac. Church-key cray plaid pop-up. Forage beard shaman seitan. humblebrag praxis sartorial, gochujang poke synth cardigan tattooed big mood snackwave meditation.
                        </p> 
                        <p className="text-md py-2 leading-8 text-gray-800">
                            Actually cold-pressed marxism artisan, ugh +1 pour-over raw denim. Distillery solarpunk af grailed disrupt hell of next level, hoodie yes plz blog unicorn artisan. Butcher keytar truffaut, street art cold-pressed mumblecore neutral milk hotel grailed celiac iPhone drinking vinegar ugh.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}