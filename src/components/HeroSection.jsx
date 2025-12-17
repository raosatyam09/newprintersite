
import HeroImage from '../assets/Images/hero-section.png';
import Icons01 from '../assets/Icons/hero-icon01.svg';
import Icons02 from '../assets/Icons/hero-icon02.svg';
import Icons03 from '../assets/Icons/hero-icon03.svg';

import Icon04 from '../assets/Icons/hero-icon-04.svg';
import Icon05 from '../assets/Icons/hero-icon-05.svg';

export default function HeroSection() {
    return(
       <section className='relative w-full min-h-screen'>
        <img
         src={HeroImage}
        alt="Hero Image"
         
        />
        <div className=' w-full absolute top-[10%]  text-white flex items-center flex-col justify-around gap-8'>
            <h1 className='text-5xl font-semibold text-center leading-relaxed md:max-w-xl'>Printer Installation & Software Setup Services</h1>
            <p className='text-2xl leading-relaxed md:max-w-4xl text-center'>Get Support from certified printer specialists for installation, configuration, print-quality restoration, connectivity fixes, and network printing.</p>
            <div className='flex items-center justify-center gap-16 py-4'>

                <div className='flex items-center jusify-center flex-col gap-4'> 
                    <img src={Icons01}
                    className=''
                    alt="Certified Image"
                    />
                    <p className='text-xl'>Certified Technicians</p>
                </div>

                 <div className='flex items-center jusify-center flex-col gap-4'>
                    <img src={Icons02}
                    alt="Same-Day Assistance"
                    />
                    <p className='text-xl'>Certified Technicians</p>
                </div>

                 <div className='flex items-center jusify-center flex-col gap-4'>
                    <img src={Icons03}
                    alt="Transparent Pricing"
                    />
                    <p className='text-xl'>Certified Technicians</p>
                </div>
            </div>

        <div className='w-full  flex items-center justify-center gap-8'>
             <button className='px-4 py-2 outline-none rounded-md cursor-pointer text-xl flex items-center justify-center gap-2 bg-[#3866B3] hover:bg-white border border-[#3866B3] hover:text-[#3866B3]'> 
                Book Installation
            <img 
            src={Icon04}
            className='md:w-8 md:h-8 hover:text-[#3866B3]'
            />    
            </button>
            
            <button className='px-4 py-2 outline-none rounded-md cursor-pointer text-xl flex items-center justify-center gap-2 border border-[#3866B3] bg-white text-[#3866B3] hover:border-white hover:bg-[#3866B3] hover:text-white'>
                 Call a Technician 
              <img 
              src={Icon05}
              className='md:w-8 md:h-8'
              />   
            </button>
        </div>   

        </div>

        
       </section>
    )
}