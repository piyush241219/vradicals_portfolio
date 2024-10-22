// import React from 'react'
// import { BsInstagram, BsTwitterX } from 'react-icons/bs'
// import { FaFacebook } from 'react-icons/fa'
// import { LiaLinkedin, LiaLinkedinIn } from 'react-icons/lia'

// export default function Footer() {
//     return (
//         <div>
//             <div className='footer  md:px-10 flex flex-col justify-center relative px-5 '>
//                 <div className="mb-10 pb-10 md:mb-0 flex justify-between flex-col md:flex-row text-white !gap-5 !md:gap-0 ">
//                     <div className=' flex flex-col gap-2'>
//                         <h2>VRadicals India Pvt. Ltd.</h2>
//                         <p>203, Balaji Corporate, New Palasia, Indore .</p>
//                     </div>
//                     <div className=' flex flex-col gap-2 mt-5 md:mt-0'>
//                         <h2 className='font-bold'>Quick Links</h2>
//                         <a href='#'>Home</a>
//                         <a href='#work'>Our Works</a>
//                     </div>
//                     <div className=' flex flex-col gap-2 mt-5 md:mt-0'>
//                         <h2 className='font-bold'>Services</h2>
//                         <a href='#'>Product</a>
//                         <a href='#work'>Portfolio</a>
//                         <a href='#work'>Contact Us</a>
//                     </div>
//                     <div className=' flex flex-col gap-2 mt-5  md:mt-0'>
//                         <h2 className='font-bold'>Get In Touch</h2>
//                         <div className='flex gap-3'>
//                           <a href="https://www.instagram.com/vradicalsglobal/">  <BsInstagram className='text-lg' /></a>
//                            <a href="https://x.com/VradicalsLtd"> <BsTwitterX className='text-lg' /></a>
//                            <a href="https://www.facebook.com/vradicalsglobal/"> <FaFacebook className='text-lg' /></a>
//                             <a href="https://in.linkedin.com/company/vradicalsglobal"><LiaLinkedinIn className='text-lg' /></a>
//                         </div>
//                         <p>Subscribe</p>
//                         <div className='flex gap-2 '>
//                             <input type="text" name="" id="" placeholder='Enter Email Address' className='px-2 rounded-2xl w-[250px]' />
//                             <button className='bg-[#B366CF] py-1 px-2 rounded-md'>Subscribe</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='text-center text-white absolute left-0 right-0 bottom-0 border-t-2  '>Copyright@vradicals.io 2023</div>
//             </div>
//         </div>
//     )
// }
import React from "react";
import style from "../../assets/styles/main.module.css";
import { Link } from 'react-router-dom'
import fb from '../../assets/logo/fb.svg'
import insta from '../../assets/logo/insta.svg'
import twitter from '../../assets/logo/twitter.svg'
import linkedIn from '../../assets/logo/linkedIn.svg'
import footermapImg from '../../assets/logo/footerMap.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import footerVideo from '../../assets/videos/footer_video.mp4'
import logo from '../../assets/logo/V-Radicals.png'
const FooterPage = () => {
  return (
    <>
      <div className={style.footer_container} id="footer">
        <div className={style.footer_newsletter_container}>
          <div className={style.footer_newletter_form_wrapper}>
            <video
              src={footerVideo}
              autoPlay loop muted playsInline 
              className="object-cover"
              style={{
                height: '-webkit-fill-available',
                width: '-webkit-fill-available'
              }}
            ></video>
            <div className={style.newsLetter_form_wrapper}>
              <h1>Subscribe To Our Newsletter</h1>
              <div className={style.footer_newletter_form}>
                <div className={`${style.footer_newletter_input_wrapper} flex`} style={{ overflow: 'hidden', borderRadius: '10px', border: '1px solid #fff' }}>
                  <input type="email" placeholder="Enter email" />
                  <button
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="bg-bg-gray-900">
          <div class="mx-auto w-[85%] max-w-screen-xl p-0 py-6 lg:py-8">
            <div class={`${style.footer_info_wrapper} md:flex md:justify-between gap-[4rem]`}>
              <div class={`${style.footer_logo_container} w-[65%] mb-6 md:mb-0 text-center`}>
                <a href="#" class="flex flex-col items-center mb-4">
                  <img
                    src={logo}
                    class="h-16 mr-3"
                    alt="VRadical Logo"
                  />
                  <span class="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    VRadicals India Pvt . Ltd.
                  </span>
                </a>
                <span style={{ color: '#fff' }}> VRadicals India Pvt Ltd, where we're revolutionizing technology. We're more than just an IT firm; we're creators of immersive realities using VR, AR and MR.</span>
                <div class={`${style.footer_icons_wrapper} flex space-x-5  mt-6`}>
                  <a
                    href="https://www.facebook.com/vradicalsglobal/"
                    target="_blank"
                    class="text-gray-500 hover:text-gray-200 dark:hover:text-white"
                  >
                    <img src={fb} alt="" width={40} />
                    <span class="sr-only">Facebook page</span>
                  </a>

                  <a
                    href="https://twitter.com/VradicalsLtd"
                    target="_blank"
                    class="text-gray-500 hover:text-gray-200 dark:hover:text-white"
                  >
                    <img src={twitter} alt="" width={40} />
                    <span class="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="https://www.instagram.com/vradicalsglobal/"
                    target="_blank"
                    class="text-gray-500 hover:text-gray-200 dark:hover:text-white"
                  >
                    <img src={insta} alt="" width={40} />
                    <span class="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/vradicals-india-pvt-ltd/"
                    target="_blank"
                    class="text-gray-500 hover:text-gray-200 dark:hover:text-white"
                  >
                    <img src={linkedIn} alt="" width={40} />
                    <span class="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
              <div class={`${style.footer_links_container} flex flex-col md:flex-row gap-[5rem] `}>
                <div class={`${style.footer_links_container} flex gap-[8rem] `}>
                  <div className={style.footer_quickLinks}>
                    <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                      Quick Links
                    </h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">

                        <a href="#" class="hover:underline">
                          Home
                        </a>
                      </li>
                      <li class="mb-4">
                        <a href="https://vradicals.io/" className="hover:underline ">
                          About
                        </a>
                      </li>

                      <li class="mb-4">

                        <a href="https://vradicals.io/" class="hover:underline">
                          Product
                        </a>
                      </li>
                      <li class="mb-4">

                        <a href="https://vradicals.io/" class="hover:underline">
                          Media & Event
                        </a>
                      </li>
                      <li class="mb-4">

                        <a href="https://vradicals.io/" class="hover:underline">
                          Contribution
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={style.footer_service}>
                    <h2 class={`mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white`}>
                      Services
                    </h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                        <a href="https://vradicals.io/" className="hover:underline ">
                          Service
                        </a>
                      </li>

                      <li class="mb-4">
                        <a href="https://vradicals.io/" className="hover:underline ">
                          Blog
                        </a>
                      </li>
                      <li class="mb-4">
                        <a href="https://vradicals.io/" className="hover:underline ">
                          Contact
                        </a>
                      </li>
                      <li class="mb-4">

                        <a class="hover:underline ">
                          Press
                        </a>
                      </li>
                      <li class="mb-4">

                        <a href="https://vradicals.io/" class="hover:underline ">
                          NewsLetter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${style.footer_follow_links} flex items-center flex-col`}>
                  <div className={`${style.footer_location} flex flex-col items-center`}>
                    <img src={footermapImg} alt="" id="mobile-hidden" className="mobile-hidden" />
                    <ul class="text-gray-500 dark:text-gray-400 md:mt-4 font-medium flex flex-col items-center mt-[-2rem]">
                      <li class="md:mb-4 text-center">
                        <a href="https://maps.app.goo.gl/NiZnUci6wc6bgJcy7" target="_blank" class="hover:underline">
                          203, Balaji Corporate, New Palasia, Indore .
                        </a>
                      </li>

                      {/* <li class="mb-4">
                        <a href="#" class="hover:underline">
                          info@vradicals.io
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class={`${style.footer_copyrights} sm:flex sm:items-center sm:justify-around`}>
              {/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="#" class="hover:underline">
                  VRadical™
                </a>
                . All Rights Reserved.
              </span> */}
              <ul>
                <li class="">
                  <BsFillTelephoneFill />
                  <a href="tel:+917880131386">+91 78801 31386</a>
                </li>
                <li class="">
                  <HiMail />
                  <a href="mailto:Info@vradicals.io">Info@vradicals.io</a>
                </li>
              </ul>
              <ul>
                <li class="">
                  <a href="https://vradicals.io/term-condition" >Terms & Condition</a>

                </li>
                <li class="">
                  <a href="https://vradicals.io/privacy-policy" >Privacy Policy</a>

                </li>
                <li class="">
                  <a href="https://vradicals.io/faq" >FAQ</a>

                </li>
              </ul>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterPage;
