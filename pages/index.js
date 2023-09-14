import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import Image from 'next/image';
import lindsay from '../public/lindsay.png'
import design from '../public/design.png'
import consulting from '../public/consulting.png'
import code from '../public/code.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Lindsay Warr Portfolio</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="text-md font-burtons">iamalion</h1>
                        <ul className="flex items-center">
                            <li><BsFillMoonStarsFill onClick={() => setDarkMode (!darkMode)} className="cursor-pointer text-2xl"/>
                            </li>
                            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resumé</a></li>
                        </ul>
                    </nav>
                    <div className="text-center p-10">
                        <h2 className="dark:text-teal-400 text-5xl py-2 text-teal-600 font-medium md:text-6xl">Lindsay Warr</h2>
                        <h3 className="dark:text-white text-2xl md:text-3xl" py-2>Front End Developer</h3>
                        <p className="dark:text-gray-200 text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-lg">Hello I'm Lindsay!</p>
                    </div>
                    <div className="dark:text-gray-400 text-5xl flex justify-center gap-16  text-gray-600">
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiFillInstagram />
                    </div>
                    <div className="bg-gradient-to-b from-teal-500 rounded-full flex max-w-xs mx-auto py-5 px-5 mt-20 overflow-hidden md-h:96 md-w:96" layout="fill" objectfit="cover">
                        <Image src={lindsay} alt="Lindsay Warr" layout="auto" objectFit="cover"/>     
                    </div>                    
                </section>
                <section>
                    <div>
                        <h3 className="dark:text-white text-3xl py1">Blah blah blah</h3>
                        <p className="dark:text-gray-200 text-md py-2 leading-8 text-gray-800">
                            Pok pok wayfarers blue bottle gluten-free. Celiac before they sold out stumptown pork belly, chambray <span className="text-teal-500 text-md">literally</span> jean shorts fanny pack polaroid PBR&B ramps hashtag retro bruh cupping. Keffiyeh single-origin coffee wolf pickled. Post-ironic 90's normcore, meh +1 try-hard tumblr JOMO squid waistcoat grailed. Cray glossier quinoa wolf grailed celiac. Church-key cray plaid pop-up. Forage beard shaman seitan. humblebrag praxis sartorial, gochujang poke synth cardigan tattooed big mood snackwave meditation.
                        </p> 
                        <p className="dark:text-gray-200 text-md py-2 leading-8 text-gray-800">
                            Actually cold-pressed marxism artisan, ugh +1 pour-over raw denim. Distillery solarpunk af grailed disrupt hell of next level, hoodie yes plz blog unicorn artisan. Butcher keytar truffaut, street art cold-pressed mumblecore neutral milk hotel grailed celiac iPhone drinking vinegar ugh.
                        </p>
                    </div>
                    <div>
                        <div className="lg:flex gap-10">
                            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10 flex items-center flex-col">
                                <Image src={design} width={100} height={100} />
                                <h3 className ="text-lg font-medium pt-8 pb-2">Designs</h3>
                                <p className="py-2">
                                    Coloring book jianbing truffaut polaroid distillery kombucha put a bird on it squid vice adaptogen forage.
                                </p>
                                <h4 className="py-4 text-teal-600">Tools I use</h4>
                                <p className="text-gray-800 py-1">Thing</p>
                                <p className="text-gray-800 py-1">Thing</p>
                                <p className="text-gray-800 py-1">Thing</p>
                            </div>
                                
                            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10 flex items-center flex-col">
                                <Image src={code} width={100} height={100} />
                                <h3 className ="text-lg font-medium pt-8 pb-2">Code</h3>
                                <p className="py-2">
                                    Coloring book jianbing truffaut polaroid distillery kombucha put a bird on it squid vice adaptogen forage.
                                </p>
                                <h4 className="py-4 text-teal-600">Tools I use</h4>
                                <p className="text-gray-800 py-1">Thing</p>
                                <p className="text-gray-800 py-1">Thing</p>
                                <p className="text-gray-800 py-1">Thing</p>
                            </div>
                                
                            <div className="dark:bg-white text-center shadow-lg p-10 rounded-xl my-10 flex items-center flex-col">
                                <Image src={consulting} width={100} height={100} />
                                <h3 className ="text-lg font-medium pt-8 pb-2">Consulting</h3>
                                <p className="py-2">
                                    Coloring book jianbing truffaut polaroid distillery kombucha put a bird on it squid vice adaptogen forage.
                                </p>
                                <h4 className="py-4 text-teal-600">Tools I use</h4>
                                <p className="text-gray-800 py-1">Thing</p>
                                <p className="text-gray-800 py-1">Thing</p>
                                <p className="text-gray-800 py-1">Thing</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="dark:text-white text-3xl py-1">Portfolio</h3>
                        <p className="dark:text-gray-200 text-md py-2 leading-8 text-gray-800">
                            Pok pok wayfarers blue bottle gluten-free. Celiac before they sold out stumptown pork belly, chambray <span className="text-teal-500 text-md">literally</span> jean shorts fanny pack polaroid PBR&B ramps hashtag retro bruh cupping. Keffiyeh single-origin coffee wolf pickled. Post-ironic 90's normcore, meh +1 try-hard tumblr JOMO squid waistcoat grailed. Cray glossier quinoa wolf grailed celiac. Church-key cray plaid pop-up. Forage beard shaman seitan. humblebrag praxis sartorial, gochujang poke synth cardigan tattooed big mood snackwave meditation.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height="{100%}" layout="responsive" src={web1} /></div>
                        <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height="{100%}" layout="responsive" src={web3} /></div>
                        <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height="{100%}" layout="responsive" src={web3} /></div>
                        <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height="{100%}" layout="responsive" src={web4} /></div>
                        <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height="{100%}" layout="responsive" src={web5} /></div>
                        <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover" width={"100%"} height="{100%}" layout="responsive" src={web6} /></div>
                    </div>
                </section>

            </main>
        </div>
    )
}