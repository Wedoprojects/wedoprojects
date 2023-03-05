import React, { useRef } from 'react'
import work from "./img/work.png"
import Typical from 'react-typical'
import emailjs from '@emailjs/browser';

function Home() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mv0abbf', 'template_17uls68', form.current, 'Oyq0m6S_qFpgaMEzk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (< div className='bg-white'>
    <div className='mx-auto max-w-[320px] sm:max-w-[600px] md:max-w-[950px] lg:max-w-[1150px] grid md:grid-cols-2 h-[40vh] sm:h-[50vh] md:h-[80vh] justify-between overflow-hidden items-center '>
      <div className=''>
          <div className=''>
            <h1 className='text-[30px] sm:text-[50px] font-bold'>We write <span className='text-purple-600'>

            <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              'Projects',
              6000,
              'Assignments',
              6000,
              'Data Analysis',
              6000,
              'Proposals',
              6000]}
            />
            </span>
            </h1>
          <h3 className='text-[14px] sm:text-[18px] md:text-[20px] sm:mt-0 mx-auto text-black'>
            Having problem with your Projects, Assignments, Data analysis?
            we are here for you
          </h3>
          <div className='py-4 sm:py-8'>
          <button className='text-[10px] p-2 sm:text-[15px]  font-semibold rounded-md text-white bg-purple-600 px-2 sm:h-14 sm:w-32'><a href='#contact'>Get started</a></button>
          <button className='text-[10px] p-2 sm:text-[15px]  font-semibold text-white rounded-md bg-yellow-300 mx-2 px-2 sm:h-14 sm:w-40'><a href='https://tolulope55.github.io/learn/' target="_blank">Expore</a></button>
        </div>
       <div id='contact'></div>
      </div>
    </div>

      <div className=' hidden md:block'>
          <img src={work} alt="" className=' mx-auto scale-125 mt-20' />
      </div>
       </div>

       <div  className='bg-[#fdfdfd] bg-blend-lighten md:bg-blend-darken'>
         <div className='overflow-hidden max-w-[320px] sm:max-w-[600px] md:max-w-[950px] lg:max-w-[1150px] mx-auto'>
         <img src={work} alt="" className='md:hidden  mt-10 h-[225px] sm:h-[250px] mx-auto md:h-[350px]' />
          <div className='grid md:grid-cols-2'>
            <div>
                <h2 id='contact' className='py-6 mt-5 sm:mt-20 sm:py-10 font-semibold text-[25px] sm:text-[40px]'>Lets Discuss your <span className='text-purple-600'>project</span></h2>

                <div className='flex py-5'>
                  <button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-5 sm:w-6 text-[#9a38ad]' >1</button>
                  <div>
                  <h3 className='font-bold'>Send us a message</h3>
                  <p className='text-[13px] sm:text-[15px]'>Send us a message via Whatsapp or our email address</p>
                  </div>
                </div>
                <div className='flex py-5'>
                <button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-7 sm:w-8 text-[#9a38ad]' >2</button>
                  <div>
                  <h3 className='font-bold'>Descibe your Project</h3>
                  <p className='text-[13px] sm:text-[15px]'>Describe the type of project you will like us to help you with (i.e Assignment, Proposal etc.)</p>
                  </div>
                </div>
                <div className='flex py-5'>
                  <button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-7 sm:w-8  text-[#9a38ad]' >3</button>
                  <div>
                  <h3 className='font-bold '>Discuss payment</h3>
                  <p className='text-[13px] sm:text-[15px] pb-20'>Discuss the mode of payment... Expect your work as soon as Possible</p>
                  </div>
                </div>
            </div>
          <div className='py-5 md:py-0 mt-5 sm:mt-60 sm:mx-20'>
            <h2 className='text-[20px] sm:text-[25px] py-2 font-semibold'>Get In Touch</h2>
            <h3 className='text-[15px] sm:text-[18px] font-semibold'>Kindly send a message via:<br/></h3>
            <button className='text-[13px] sm:text-[14px] font-semibold w-24 sm:w-32 border text-white bg-green-500 rounded-md p-[6px] mt-1'><a href='http://wa.me/2348149249926' target="_blank">Whatapp</a></button>
            <button className='text-[13px] sm:text-[14px] font-semibold w-24 sm:w-32 border-2 text-white bg-yellow-400 rounded-md p-[6px] my-2 sm:my-0 px-2 sm:mx-2'><a href='mailto:wedoproject2@gmail.com' target="_blank">Email</a></button>
          </div>
          
          </div>
          </div>


          <div className='bg-[white] pb-20' id='about'>
          <div className='py-20 max-w-[320px] sm:max-w-[600px] md:max-w-[950px] lg:max-w-[1150px] mx-auto'>
          <h2 className='py-10 sm:py-20 pb-10 font-semibold bold text-[25px] sm:text-[40px] max-w-[500px]'>Get your <span className='text-black'>project</span> done by <span className='text-purple-700'>Professionals</span></h2>
             <div className=' grid md:grid-cols-3 justify-between items-center'>
             
            <div>
            <div  className='a bgg border-4 border-y-purple-400 my-3 md:my-0'> 
             </div>
             <h2 className='text-[18px] font-medium sm:text-[20px] my-5 sm:my-0'>Projects</h2>
              {/* <h2>we will help you write yours project with th intend of sucess</h2> */}
            </div>

            <div>
            <div className='b bgg border-4 border-y-purple-400 my-3 md:my-0'> 
             </div>
             <h2 className='text-[18px] font-medium sm:text-[20px] my-5 sm:my-0'>Research writing</h2>
              {/* <h2>we will help you write yours project with th intend of sucess</h2> */}
            </div>

            <div>
            <div className='c bgg border-4 border-y-purple-400 my-3 md:my-0'> 
             </div>
             <h2 id='offer' className='text-[18px] font-medium sm:text-[20px] my-5 sm:my-0'>Data analysis</h2>
              {/* <h2>we will help you write yours project with th intend of sucess</h2> */}
            </div>

          </div >
          </div>

         </div>

         <div className='bg-black text-white z-10' id='offer'>
          <div className='mx-auto max-w-[320px] sm:max-w-[600px] md:max-w-[950px] lg:max-w-[1150px]'>
            <div>
              <h2 className='text-[25px] sm:text-[30px] pt-20 sm:pt-16'>What we offer</h2>
              <p className='text-[12px] sm:text-[17px]'>We provide you with all the general research services</p>
              <button className='border text-[10px] sm:text-[15px] font-semibold text-black px-4 h-7 sm:h-10 rounded-md mt-4 bg-[#eeeff5]'><a href='#contact'>Get started</a></button>
            </div>
            <div className='text-[13px] mt-10 pb-16 sm:text-[18px] font-semibold'>
              <ul>
                <li className='py-1 sm:py-2'><button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-6 sm:w-6 text-[#9a38ad]' ></button>
                 Assignment and Projects writing</li>
                <li className='py-1 sm:py-2'><button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-6 sm:w-6 text-[#9a38ad]' ></button>
                 Professionals writing</li>
                <li className='py-1 sm:py-2'><button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-6 sm:w-6 text-[#9a38ad]' ></button>
                 Proposal development</li>
                <li className='py-1 sm:py-2'><button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-6 sm:w-6 text-[#9a38ad]' ></button>
                 Data analysis and management</li>
                <li className='py-1 sm:py-2'><button className='text-[11px] sm:text-[15px] text-center mx-3 rounded-full h-4 sm:h-6 bg-gradient-to-r from-purple-600 w-6 sm:w-6 text-[#9a38ad]' ></button>
                 Profile Development(Cv & Resume)</li>
              </ul>
            </div>
            
           </div>
           <div className='bg-purple-600'>
            <h2 className='text-purple-600'>tegrg</h2>

            <form ref={form} onSubmit={sendEmail} className='grid w-[70%] sm:w-[40%] mx-auto text-black'>
            <label className="pt-3 text-[12px] sm:text-[19px]">Name:</label>
              <input
              name="user_name"
              className='p-2 border rounded-sm text-black'
              placeholder='Full name'
              type='text'/>
              <label className="pt-3 text-[12px] sm:text-[19px]">Email:</label>
              <input
              name="user_email"
              className='p-2 border rounded-sm'
              placeholder='Your mail'
              type='text'/>
              <label className="pt-3 text-[12px] sm:text-[19px]">Project type:</label>
              <select name="project_type" classname='p-2 bg-purple-600 rounded-sm' id="cars">
              <option className='p-2' value="Project writing">Project writing</option>
              <option className='p-2' value="Assignment">Assignment</option>
              <option className='p-2' value="Proposal">Proposal</option>
              <option className='p-2' value="Data Analysis">Data Analysis</option>
              <option className='p-2' value="Professionals writing">Professionals writing</option>
              </select>
              <label className='pt-3 text-[12px] sm:text-[19px]'> Message</label>
              <textarea
              name="message"
              placeholder='message'
              className='h-[100px] sm:h-[120px] p-1 px-2 rounded-sm'
              type='text'/>
               <button 
               type='submit'
               className='text-[10px] sm:text-[15px] font-semibold text-white bg-black px-4 h-7 sm:h-10 rounded-md mt-4 w-28 sm:w-28 mx-auto'>Send</button>

            </form>
            {/* <div className='mt-20 box-content h-[50vh] w-[70%] items-center sm:w-[50%] drop-shadow-xl mx-auto p-4 bg-black pt-5 rounded-3xl'>
            <div className='mx-auto items-center sm:max-w-[500px] mt-[80px] md:mt-16 my-auto'>
                <h2 className='text-[25px] sm:text-[40px] font-semibold'>Ready to start a project?</h2>
                <p className='text-[13px] sm:text-[15px]'>Click on the button below, let's discuss how to deliver an excellent job you desire today!</p>
                <button className='rounded-md my-3 bg-white text-black text-[14px] font-semibold w-28 sm:w-32 h-8 sm:h-10'><a href='http://wa.me/2348149249926' target="_blank">Get started</a></button>
                </div>
            </div> */}
            <h2 className='text-purple-600 py-10'>tegrg</h2>

            </div>
            <div className='mt-5 py-3 p text-white mx-auto max-w-[320px] bg-[#0f050f55] sm:max-w-[600px] md:max-w-[950px] lg:max-w-[1150px]'>
                <p className='text-[13px] pb-2 mx-auto font-bold items-center text-center'>Wedoprojects 2023</p>
              </div>
          </div>
         </div>
    </ div>
  )
}

export default Home
