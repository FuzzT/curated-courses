import { AdjustmentsVerticalIcon, Bars2Icon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Footer from "./component/Footer"; // Footer component

export default function FeatureCards() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(menuOpen => !menuOpen);
  }

  return (
    <>
      <section className="p-2 antialiased relative">
        <div className="bg-gradient-to-br from-amber-200 via-pink-300 to-fuchsia-600 rounded-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            {/* navbar */}
            <div className='pt-12 sm:pt-16'>
              <nav className='flex items-center justify-between'>

                <div className='flex items-center gap-x-2'>
                  <AdjustmentsVerticalIcon className='w-6 h-6'/>
                  <h1 className='text-xl font-medium'>Radiant</h1>
                  <div className='bg-gray-600/35 rounded-full px-3 py-1/2 ml-2 hidden lg:block'>
                    <p className='flex items-center justify-center gap-x-2 text-white text-base font-medium'>Radiant raises $100M Series A from Tailwind Ventures

                      <ChevronRightIcon className='w-4 h-4' />
                    </p>
                  </div>
                </div>


                <Bars2Icon className='w-6 h-6 lg:hidden' onClick={handleMenuClick} />    
                <div className='hidden lg:block'>
                  <ul className='flex gap-x-4 font-medium'>
                    <li>Pricing</li>
                    <li>Company</li>
                    <li>Blog</li>
                    <li>Login</li>
                  </ul>
                </div>            
              </nav>
              {/* mobile menu */}
              {menuOpen && (
                <div className='pt-10 lg:hidden'>
                  <ul className='space-y-4 text-base font-medium'>
                    <li>Pricing</li>
                    <li>Company</li>
                    <li>Blog</li>
                    <li>Login</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
              <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-gray-900 sm:text-8xl/[0.8] md:text-9xl/[0.8] text-balance">Close every deal.</h1>
              <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">Radiant helps you sell more by revealing sensitive information about your customers.</p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <button className="inline-flex items-center justify-center px-4 py-1 bg-gray-950 text-white rounded-full border border-transparent shadow-md text-base font-medium whitespace-nowrap ">Get started</button>
                <button className="inline-flex items-center justify-center px-4 py-1 bg-transparent border-transparent  rounded-full border shadow-md text-base font-medium whitespace-nowrap ">See pricing</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

    </>
  )
}