import React from 'react'
import '../App.css';
import telegram from './Images/tele_logo.svg'
import insta from './Images/insta_logo.svg'
import youtube from './Images/yt_logo.svg'
import in_logo from './Images/in_logo.svg'
import c1 from './Images/c1.png'
import c2 from './Images/c2.webp'
import front from './Images/front.png'
import one_to_one from './Images/one_to_one.svg'
import eb from './Images/eb.webp'
import qb from './Images/qb.svg'
import gd from './Images/gd.jpeg'
import sn from './Images/sn.svg'
import wb from './Images/wb.svg'
import ta from './Images/ta.jpg'
import oe from './Images/oe.svg'
import fnq from './Images/fnq.svg'
import counselling from './Images/cn.svg'

const myFunction = () => {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const f1 = 'We believe that "if everyone receives proper guidance from an elder, then he/she will definitely succeed.". So your Saturday- Sunday one-on-one discussion with IITIAN will Boost in your IIT Preparation. Every student has a different mindset, so our mentors will plan accordingly. They will determine which topics you should cover, how much time you should allocate to each topic, and how to balance theory and practice with questions. And help you in every moment of your preparation.';
const f2 = 'A group of 10 students so you can discuss your subject queries with each other. We strongly believe that engaging in discussions with others enhances your knowledge and allows you to learn new tricks from your peers. Through this group of 10-10 students where you can exchange ideas, broaden your understanding, and strengthen your skills. Benefit from collaborative learning and unlock your full potential.'
const f3 = 'Complete short notes (including all important points) of each topic, also help you on how you should prepare concise notes.'
const f4 = 'Many students expressed their concern about affording expensive books for IIT-JAM preparation. To address this, we offer comprehensive question banks with topic-wise, level-specific questions. With our resources, you can avoid the need to purchase additional costly books while still accessing valuable practice material.'
const f5 = 'Our batchmates have experienced regrets after selecting colleges (IITs/NITs) as their choices did not align with their desired career paths, such as placements, research, or other aspirations. We understand this concern and offer assistance in selecting the right college that best fits your individual goals and aspirations.'
const f6 = 'Based on our experience, many students tend to lose confidence in the final 1-2 months before the examination. They often find themselves confused about where to practice, how to revise effectively, and managing the pressure of potentially losing marks. At IITian MScWale Mentors, we provide continuous guidance and support during these critical moments. Our experienced mentors understand that each student has a unique mindset, and they help you develop a personalized strategy to regain confidence and excel in your preparation.'
const f7 = 'If you are preparing for other competitive exams (like TIFR, GATE, NIMCET alongside IIT-JAM) then don’t worry, we will also help you.'
const f8 = 'Test paper analysis holds the key, not just giving lots of tests. With IITian MScWale mentors by your side, unravel the secrets of effective analysis. Experience unitwise tests every 15 days, ensuring progress tracking. Unleash your potential with us on the path to excellence.'
const f9 = 'Alongside your IIT-JAM preparation, we regularly organize webinars with current IIT/NIT students. That will inspire, motivate and enhance your preparation.'

const Middle = () => {
  return (
    <>
      <div><Social /></div>
      <div className=''>
        <div className=''>
          <Content1 />
          <MentorBox />
        </div>
      </div>
      <div className=' mantees_block'>
        <div className="testimonial-container ">
          <h2 className='fs-1 text-info fw-bolder'>Testimonials</h2>
          <p className='fs-6 text-black fw-bolder'>(What Our Mantee Says)</p>
          <Testimonial />
        </div>
      </div>

      <div id='#scrollspyHeading1' data-bs-spy="scroll" >
        <h1 className='text-warning pt-5 d-flex justify-content-center' >Our Top Features </h1>
        <p className='fs-3 fw-medium'>Unlock Your Potential : Comprehensive IIT-JAM Preparation</p>
        <div className=' pl-5'>

          <Our_features num={1} title={'One-One Interaction'} text={f1} img={one_to_one} />
          <Our_features num={2} title={'Group Discussion'} text={f2} img={gd} />
          <Our_features num={3} title={'Short Notes'} text={f3} img={sn} />
          <Our_features num={4} title={'Question Bank'} text={f4} img={qb} />
          <Our_features num={5} title={'Counselling Season'} text={f5} img={counselling} />
          <Our_features num={6} title={'Exam Boost '} text={f6} img={eb} />
          <Our_features num={7} title={'Other Exams'} text={f7} img={oe} />
          <Our_features num={8} title={'Test Analysis'} text={f8} img={ta} />
          <Our_features num={9} title={'Webinars'} text={f9} img={wb} />

        </div>
      </div>
      {/* <F_and_Q /> */}
      <About />
    </>
  )
}

const Content1 = () => {
  return (

    <div className="container tagline mt-5">
      <div className="row">
        <div className="col-md animate-left" >
          <h1 className="display-3.5 fw-bolder">Let's Start Your</h1>
        </div>
      </div>
      <h1 className="display-4 text-primary ml-5 fw-bolder" data-aos="flip-right">IIT</h1>
      <div className='row'>
        <div className="col-md animate-right">
          <h1 className="display-3.5 ml-5  fw-bolder">Preparation With IITians</h1>
        </div>
      </div>
    </div>


  )
}

const Social = () => {
  return (
    <div className="social">
      <div data-aos='flip-right'><a href=''><img className='social_logo' src={in_logo} alt="" /></a></div>
      <div data-aos='flip-right'><a href=''><img className='social_logo' src={telegram} alt="" /></a></div>
      <div data-aos='flip-right'><a href=''><img className='social_logo' src={youtube} alt="" /></a></div>
      <div data-aos='flip-right'><a href=''><img className='social_logo' src={insta} alt="" /></a></div>
    </div>
  )
}
const Testimonial = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide bg-secondary-subtle p-3" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <Mentee_says_3 className="d-block w-100" />
          </div>
          <div className="carousel-item ">
            <Mentee_says_4 className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <Mentee_says_5 className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <Mentee_says_2 className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <Mentee_says_1 className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <Mentee_says_31 />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

//  start illogical code ------>
const Mentee_says_1 = () => {

  return (
    <>
      <div className="testimonial-content">
        <div className="testimonial-details">
          <div className="student-info d-flex justify-content-center">
            <span className="name fs-3 mr-1">Vivek Kumar</span>
            <span className="rank fs-4">AIR-10</span>
          </div>
        </div>
        <div className="testimonial-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ne2697WxggI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
      </div>
    </>

  )
}
const Mentee_says_3 = () => {

  return (
    <>
      <div className="testimonial-content">
        <div className="testimonial-details">
          <div className="student-info  w-100 d-flex justify-content-around">
            <span className="name fs-3">Archana Prajapati</span>
            <span className="rank fs-4">AIR-178</span>
          </div>
        </div>
        <div className="testimonial-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oF38r5oTJzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     </div>
      </div>
    </>

  )
}


const Mentee_says_5 = () => {

  return (
    <>
      <div className="testimonial-content">
        <div className="student-info w-100">
          <div className="name fs-3" style={{ width: '20rem' }}>Pankaj Chauhan</div>
          <div className="rank fs-4">AIR-167</div>
        </div>
        <div className="testimonial-review p-3" >
          <p className='fs-7  pl-5 text-left'>
            Hi Mr. Ram Rajput bhaiya, this is Pankaj Chauhan. You are my mentor but I think you are like my elder brother also😁.......I want to say special thanks to you🙏 for such a wonderful mentorship program🤩..... I'm very happy to share with you my experience to joining your mentorship program.......sch batau toh aapke mentorship program se mera bahut hi fayda hua, aapse main short notes taiyar krna sikha aur mujhe lagta hai short notes ek important role play krta hai aapke preparation journey mein.......firse aapne mujhe vivekanand sir ke examination drive ko dekhne ko bola wo toh mere preparation me char chand hi laga diya❤️🤩......jb bhi meri aapse baat hoti thi toh mujhe ek strong motivation milta tha apne preparation level ko boost krne ke liye.....aapne time time pr mujhe bahut ache se guide kiya jiske wajh se meri preparation journey kafi smooth ho gyi thi...... finally mene JAM'23(MA) AIR-167 ke sath crack bhi kr liya😊.....Once again a lot of thanks Ram bhaiya🙏❤️ </p> <div onClick={myFunction} id="myBtn">Read more</div>
        </div>
      </div>
    </>

  )
}
const Mentee_says_2 = () => {

  return (
    <>
      <div className="testimonial-content">
        <div className="testimonial-details">
          <div className="student-info d-flex justify-content-center">
            <span className="name fs-3 mr-1">Vikas Rajpoot</span>
            <span className="rank fs-4">AIR-56</span>
          </div>
        </div>
        <div className="testimonial-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ubP0F7EQNsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      </div>
    </>

  )
}

const Mentee_says_4 = () => {

  return (
    <>
      <div className="testimonial-content ">
        <div className="testimonial-details">
          <div className="student-info d-flex justify-content-center">
            <span className="name fs-3 mr-1">Anu Yadav</span>
            <span className="rank fs-4">AIR-553</span>
          </div>
        </div>
        <div className="testimonial-review p-3" >
          <p className='fs-7  pl-5 text-left'>
            Mentorship program mujhe bhut helpful rha meri preparation k time . Coz bhot baar aisa hota h ki hmare paas proper study plan nhi hota ki konse topic ko kese pdhe , short notes kese bnae or short notes to mock k time bde useful hote h . Exam se phle bhi jb 2-3 din rhte h tb short notes hi revise krte h. So mentorship join krne k baad Ram bhaiya k short notes <span id="dots">...</span><span id="more"> ne kaafi help ki . Mene Unke notes ko observe Kiya ki short notes kese bnane chahiye then mene khud k short notes prepare kiye and it was really helpful. One more thing ki preparation k time bhut baar aisa hota h ki kisi perticular topic me prblm hoti h tb smjh nhi aata kya kre but mentorship me seedhe bhiya ko call kiya 🤭 or apni prblm btai then bhiya ne btaya ki kese or kitna pdhna h iss topic ko .also bhut baar demotivate bhi hui . actually last month me to m hr week hi demotivate ho jati thi so bhiya se baat ki and unhone really bhut motivate Kiya. Also mock k marks dekhne k baad bhi unke saath discussion hota tha and vo bolte ki paper ka proper analysis kro jaha bhi mistake ho rhi unko dekho so proper Analysis se kaafi mistake km hui .So mentorship ne proper guidance and motivation diya h mujhe. Thankyou so much Ram bhaiya.</span></p>
          <div onClick={myFunction} id="myBtn">Read more</div>
        </div>
      </div>
    </>

  )
}
const Mentee_says_31 = () => {

  return (
    <>
      <div className="testimonial-content ">
        <div className="testimonial-details">
          <div className="student-info w-100 d-flex justify-content-around">
            <span className="name fs-3 mr-1">Archana Prajapati  </span>
            <span className="rank fs-4">AIR-178</span>
          </div>
        </div>
        <div className="testimonial-review p-3" >
          <p className='fs-7  pl-5 text-left'>
            Mentorship program mujhe bhut helpful rha meri preparation k time . Coz bhot baar aisa hota h ki hmare paas proper study plan nhi hota ki konse topic ko kese pdhe , short notes kese bnae or short notes to mock k time bde useful hote h . Exam se phle bhi jb 2-3 din rhte h tb short notes hi revise krte h. So mentorship join krne k baad Ram bhaiya k short notes <span id="dots">...</span><span id="more"> ne kaafi help ki . Mene Unke notes ko observe Kiya ki short notes kese bnane chahiye then mene khud k short notes prepare kiye and it was really helpful. One more thing ki preparation k time bhut baar aisa hota h ki kisi perticular topic me prblm hoti h tb smjh nhi aata kya kre but mentorship me seedhe bhiya ko call kiya 🤭 or apni prblm btai then bhiya ne btaya ki kese or kitna pdhna h iss topic ko .also bhut baar demotivate bhi hui . actually last month me to m hr week hi demotivate ho jati thi so bhiya se baat ki and unhone really bhut motivate Kiya. Also mock k marks dekhne k baad bhi unke saath discussion hota tha and vo bolte ki paper ka proper analysis kro jaha bhi mistake ho rhi unko dekho so proper Analysis se kaafi mistake km hui .So mentorship ne proper guidance and motivation diya h mujhe. Thankyou so much Ram bhaiya.</span></p>
          <div onClick={myFunction} id="myBtn">Read more</div>
        </div>
      </div>
    </>

  )
}

// <-----End 
const MentorBox = () => {
  return (
    <div className="">
      <div className="card-body mentor_box ">
        <p className="font-weight-bold text-success fs-7">First time for IIT-JAM Aspirants</p>
        <a href="#" className="fw-bold btn btn-primary m-2 fs-4 " >Join Full Time Mentorship</a>
        <a href="#" className="fw-bold  btn btn-success btn-primary m-2 fs-4">Book One Time Session</a>
      </div>
    </div>
  )
}

const Our_features = (props) => {

  return (

    <div className='1 d-flex justify-content-around flex-wrap pt-5'>
      <div className='feature p-2 ' data-aos="slide-right">
        <div className='fs-2 d-flex '>
          <div className='num_our_feature fw-bolder  align-items-center justify-content-center d-flex  mr-1 bg-info'>{props.num}</div>
          <div className='text-info fw-bolder'>{props.title}</div>
        </div>
        <div className='fs-5 mt-3 fw-medium text-left'>
          {props.text}
        </div>
      </div>
      <div data-aos="slide-left">
        <img className='features_img' src={props.img} />
      </div>
    </div>

  )
}
const Que = (props) => {
  return (
    <div class="shadow p-3 mb-2 bg-body-tertiary rounded">
      <ul className="list-group ">
        <div className='text-black text-left'><span className='text-primary'>(Que-{props.num}:  )</span>How can we get enroll for this mentorship programme?</div>
        <div className='text-black'><span className='text-success'>Ans:</span> Just click on "Join our Mentorship programme" Button you will redirect to our telegram group </div>
      </ul>
    </div>


  )
}
const F_and_Q = () => {
  return (
    <>
      <div className='fs-1 fw-bolder text-info' data-aos="slide-up">Frequently Asked Questions? </div>
      <div className='1 d-flex justify-content-center flex-wrap pt-5'>
        <div className='' data-aos="slide-right">
          <img className='fnq_img' src={fnq} />
        </div>
        <div class="questions-block mt-3 mb-5" data-aos="slide-left">
          <Que num={1} />
          <Que num={2} />
          <Que num={3} />
          <Que num={4} />
          <Que num={5} />
          <Que num={6} />
          <Que num={7} />
        </div>
      </div>
    </>
  )
}
const Circle = (props) => {
  return (
    <>
      <div className="circle d-flex justify-content-center align-items-center fs-3 fw-bolder bg-warning">
        {props.num}
      </div>
    </>
  )
}
const About = () => {
  return (
    <>
      <div className='fs-1 fw-medium text-info'>Why MentorShip ?</div>
      <div className=' about_bg mt-5 d-flex flex-column align-items-center'>

        <div className=' w-50 d-flex justify-content-center'>
          <div className='mr-3'>
            <Circle num={1} />
          </div>
          <div className='fs-4 text-left'>Every year, numerous students aspire to secure admission in India's top colleges. However, only a small percentage manage to achieve this feat. When I successfully cracked four consecutive competitive exams in 2021, I was approached by many friends and aspiring candidates who either failed to succeed alongside me or were preparing for the following year. Through conversations with them, I realized that despite their hard work, many students struggle to achieve success. They expressed their frustrations, saying things like, "I didn't know which topics to prioritize or how to practice questions. We joined multiple test series, attended offline classes, and purchased study materials, but we still couldn't find success."</div>
        </div>

        <div className=' w-50 d-flex justify-content-center mt-4'>
          <div className='mr-3'>
            <Circle num={2} />
          </div>
          <div className='fs-4 text-left'>After conducting extensive research and speaking with numerous students and professionals in the field, I came to a significant realization. The problem lies not with the students' efforts, as they put in a tremendous amount of hard work, but rather in the lack of proper guidance and direction. Many students find it challenging to manage themselves effectively. According to a survey conducted by the National Council of Educational Research and Training, approximately 81% of students in India suffer from stress, depression, and a lack of confidence. These factors often lead to a loss of confidence and impulsive decision-making. Students end up joining multiple institutes, practicing numerous test series, and purchasing various study materials and books, but remain dissatisfied with the results.
          </div>
        </div>

        <div className=' w-50 d-flex justify-content-center mt-4'>
          <div className='mr-3'>
            <Circle num={3} />
          </div>
          <div className='fs-4 text-left'>The conclusion drawn from these observations is that everyone needs someone who can listen to their thoughts and provide guidance. Having a mentor or someone who can monitor their progress throughout the preparation process can significantly benefit students. At IITian MScWale, we strive to connect aspiring students with recently cracked IIT-JAM students (IITians) who can provide the necessary guidance. Our platform offers features that describe this concept in detail.</div>
        </div>

        <div className=' w-50 d-flex justify-content-center mt-4'>
          <div className='mr-3'>
            <Circle num={4} />
          </div>        <div className='fs-4 text-left'>In summary, it is evident that students require proper guidance and mentorship to succeed in their endeavors. Simply working hard is not enough without the right direction. By connecting with experienced individuals who have achieved success in similar exams, students can enhance their chances of performing better. At IITian MScWale, we aim to bridge this gap and provide students with the support they need to excel in their competitive exams.</div>
        </div>
      </div>
      <div className='fs-1 fw-bolder text-info'>About Us</div>
    </>

  )
}

export default Middle
