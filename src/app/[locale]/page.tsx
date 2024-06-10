import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
    const t = useTranslations('Home');
    return (
        <main className='w-full h-auto'>

            <section className='w-full min-h-[100svh] flex justify-center items-center pt-28 xl:pt-0'> {/* Navbar: h-16 */}

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>

                    <div className='sm:max-w-[640px] max-h-[480px] flex flex-col justify-center gap-8 mx-8 sm:ml-24'>
                        <h1 className='text-4xl/tight sm:text-6xl/tight font-semibold text-left'>The best way <br className='max-sm:hidden' />to learn UX design.</h1>
                        <p className='text-base sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea necessitatibus sequi soluta earum quae.</p>
                        <button className='btn rounded-md text-white bg-amber-800/75'>
                            <div>Get started</div>
                        </button>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='max-w-[480px] max-h-[360px] mx-4
                                        sm:max-w-[640px] sm:max-h-[480px] 
                                        overflow-hidden shadow-xl rounded-2xl 
                                        flex justify-center items-center'>
                            <div className='relative w-[480px] h-[360px] sm:w-[640px] sm:h-[640px]'>
                                <Image src="/images/1.jpg" alt='hero' fill className='object-cover object-center rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <h1 className=''>{t('title')}</h1>
        </main>
    )
}

