import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../components/context/Theme/ThemeContext'
import { useContext } from 'react'
import { LanguageContext } from '../components/context/Language/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {language, toogleLanguage} = useContext(LanguageContext);
  return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta name='description' content='Portfolio' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<main
				className={`${theme} ${
					theme === 'dark'
						? 'bg-gradient-to-r from-gray-700 to-gray-900'
						: 'bg-gradient-to-r from-blue-400 to-blue-500'
				} h-screen flex justify-center items-center`}
			>
				<nav className='absolute top-0 left-0 w-full'>
					<Navbar />
				</nav>
				<div className='bg-white rounded-lg shadow-2xl p-10 dark:bg-gray-600'>
					<div className='flex justify-center'>
						<Image
							src='/profile.jpg'
							alt='profile'
							width={150}
							height={150}
							className='rounded-full'
						/>
					</div>
					<div className='mt-5'>
						<h1 className='text-3xl font-bold text-center'>
							{language === 'en' ? `Hi, I'm ` : `Hola, soy `}
							<span className='text-blue-400 dark:text-green-600'>
								Sergio Javier Mancuello
							</span>
						</h1>
						<p className='text-center text-gray-500 mb-6 dark:text-white'>
						{
              language === 'es' ? `Gusto en conocerte, soy un desarrollador web de Paraguay, tengo 23 años y me apasiona la tecnología y la programación.` : 
              `Nice to meet you, I'm a web developer from Paraguay, I'm 23 years old and I'm passionate about technology and programming.`
              }
						</p>
						<p className='text-center text-gray-500 dark:text-white'>
							{language === 'en' ? 'Web Developer' : 'Desarrollador Web'} | Frontend | JavaScript | React & Redux | Next.js |
							Backend
						</p>
					</div>
					<div className='flex justify-center mt-5 space-x-3'>
						<Link
							className='bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-500 dark:bg-green-800 dark:hover:bg-green-900'
							href='https://github.com/sergioeucnam'
							passHref
						>
							GitHub
						</Link>
						<Link
							className='bg-blue-400 text-white px-3 py-2 rounded-md hover:bg-blue-500 dark:bg-green-800 dark:hover:bg-green-900'
							href='https://www.linkedin.com/in/sergio-mancuello'
							passHref
						>
							LinkedIn
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
