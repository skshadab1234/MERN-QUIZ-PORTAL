import React from 'react'
import Header from './components/Header/Header'
const Results = ({ token }) => {

  const styles =
  {
    heading: "font-bold md:text-[64px] md:leading-[70px] text-[34px] leading-[46px] tracking-[-0.5%] text-center mt-3",
  }


  return (
    <>
      <div className='md:container md:mx-auto mb-10'>
        <Header token={token} />
        <div className='flex justify-center mt-8'>
          {/* Rules Section  */}
          <h1 className={styles.heading + " bg-clip-text text-transparent bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"}>Results</h1>
        </div>

        <div className='	'>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-1  p-4 mt-10'>
            

            <figure class="md:flex dark_theme rounded-xl p-8 md:p-0  relative transform  translate-y-28  scale-75">
              <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" width="384" height="512" />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4 ">
                  <img src="https://www.pngmart.com/files/21/2nd-Award-PNG-Clipart.png"  className='w-16 md:w-32 absolute -bottom-10 right-2  md:right-8' />
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">
                    Khan Shadab Alam
                  </div>
                  <div class="text-slate-700 dark:text-slate-500">
                    7 Sem/B.E
                  </div>
                </figcaption>
              </div>
            </figure>

            <figure class="md:flex dark_theme rounded-xl p-8 md:p-0  relative scale-125">
              <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" width="384" height="512" />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4 ">
                  <img src="https://www.picng.com/upload/gold_medal/png_gold_medal_82717.png"  className='w-16 md:w-24 absolute -bottom-16 right-2  md:right-8' />
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">
                    Khan Shadab Alam
                  </div>
                  <div class="text-slate-700 dark:text-slate-500">
                    7 Sem/B.E
                  </div>
                </figcaption>
              </div>
            </figure>

              <figure class="md:flex dark_theme rounded-xl p-8 md:p-0  relative transform  translate-y-28 scale-75">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full md:mx-0 mx-auto" src="https://pbs.twimg.com/profile_images/932986247642939392/CDq_0Vcw_400x400.jpg" alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4 ">
                    <img src="https://www.pngplay.com/wp-content/uploads/8/3rd-Place-Medal-Background-PNG-Image.png"  className='w-16 md:w-24 absolute -bottom-10 right-2  md:right-8' />
                  <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                      Khan Shadab Alam
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                      7 Sem/B.E
                    </div>
                  </figcaption>
                </div>
              </figure>

        </div>
        {/* View All Users Results  */}
        <div className='mt-10 flex justify-center w-full'>
          <button className="relative text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark_theme pointer-events-auto">All Results</button>
        </div>
          
        </div>
        
      </div>
    </>
  )
}

export default Results


export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.jwtoken || '' } }
}