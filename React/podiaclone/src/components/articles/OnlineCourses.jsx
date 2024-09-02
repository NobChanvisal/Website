
import React from "react";
import dot from "../image/dot.svg";
import arrowDown from "../image/arrowDown.svg";
import checkmark from "../image/checkmark.svg";

function OnlineCourses() {
  return (
    <article>
      <section className=" text-[#1a1715] mt-48">
        <div className="px-4 lg:container grid max-mobile:grid-cols-[25px_1fr_25px] grid-cols-[60px_1fr_60px] max-w-[1136px]">
          <div className=" setOnCol2">
            <div className="online-heading text-[18px] text-[#5c5856] bg-transparent">
              <a className=" py-1 pr-2" href="">
                Resources
              </a>
              /
              <a className=" py-1 px-2" href="">
                Blog
              </a>
              /
              <a className=" py-1 px-2" href="">
                Online Courses
              </a>
              /
              <a className=" py-1 pl-2" href="">
                Article
              </a>
            </div>
            <h2 className=" mb-4 text-[55px] font-DmSerif">
              13 best online course platforms for creators
            </h2>
            <div className=" mb-16 flex flex-row items-center text-[20px]">
              <p className="mr-3">Nicola Wynn</p>
              <img className=" w-2" src={dot} alt="" />
              <p className="date ml-3">September 22, 2022</p>
            </div>
          </div>
          <div className=" col-span-3 mb-16">
            <img
              className=" rounded-lg"
              src="https://images.ctfassets.net/19dvw6heztyg/4JFZlmyYGDGuD2kjMifOvl/e7dca1820058887544f25475896967e4/best-course-platforms.jpeg?w=1440&q=75"
              alt=""
            />
          </div>
          <div className=" setOnCol2 text-[30px] mb-16">
            Find the best online course platforms to build engaging e-learning
            products and grow your online business.
          </div>
          <div className=" p-10 max-mobile:p-6 setOnCol2 bg-[#f5efeb]">
            <p className=" heading-text mb-2">Jump Ahead</p>
            <h2 className=" text-[30px] font-DmSerif text-black">
              In this article
            </h2>
            <ul className=" py-6 pl-4 text-[18px]">
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#features">
                  Features to look for when choosing an online course platform
                </a>
              </div>
              <div className=" list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#13-best-online-course-platforms">
                  13 best online course platforms for creators and entrepreneurs
                </a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#podia">#1 Podia</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#kajabi">#2 Kajabi</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#thinkific">#3 Thinkific</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#teachable">#4 Teachable</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#learnworlds">#5 LearnWorlds</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#learndash">#6 LearnDash</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#uscreen">#7 Uscreen</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#mighty-networks">#8 Mighty Networks</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#academy-of-mine">#9 Academy of Mine</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#teachery">#10 Teachery</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#ruzuku">#11 Ruzuku</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#udemy">#12 Udemy</a>
              </div>
              <div className="list-chil">
                <div className="bg-[#fdfbf9] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={arrowDown} alt="" />
                </div>
                <a href="#skillshare">#13 Skillshare</a>
              </div>
            </ul>
          </div>
          <div className=" setOnCol2 text-[20px]">
            <p className=" mt-11">
              You’ve got an idea for a fabulous online course. Now you just need
              a place to build it.
            </p>
            <p className="mt-11">
              With an online course platform, you can design your course, add
              media like videos and images, and even include interactive
              elements like quizzes and course completion certificates. You can
              also create sales pages, accept payments, and manage your students
              all in one place.
            </p>
            <p className="mt-11">
              In this guide, we’ll cover what to look for when choosing course
              software and 13 of the best online course platforms for creators,
              small business owners, and entrepreneurs.
            </p>
            <p className="mt-11">
              All pricing is accurate at the time of writing but is subject to
              change over time.
            </p>
            <p className="mt-11 p-6 bg-[#f5efeb] rounded-md">
              No time to read?{" "}
              <a href="">
                Sign up for Podia and start building your online course today!
              </a>
            </p>
            <h2 className=" mt-16 mb-11 text-[36px] font-DmSerif" id="features">
              Features to look for when choosing an online course platform
            </h2>
            <p className=" mt-11">
              Before we dive in, here are some factors to consider when choosing
              an online course tool for your business.
            </p>
            <ul className=" py-6 pl-4">
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                  <span className=" text-black font-semibold">All-in-one:</span>{" "}
                  All-in-one platforms allow you to run your entire business in
                  one place. They include features like built-in
                  <a href=""> email marketing</a> ,{" "}
                  <a href="">affiliate management</a> , and{" "}
                  <a href="">online communities</a> , streamlining your business
                  and eliminating the need for pricey additional software.
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                  <span className=" text-black font-semibold">Unlimited:</span>{" "}
                  Businesses change over time, and that’s a good thing. Using
                  platforms that let you sell unlimited courses means you won’t
                  have to worry about outgrowing your e-learning software as
                  your products evolve.
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                  <span className=" text-black font-semibold">
                    Creator support:
                  </span>{" "}
                  Don’t go it alone. Prioritize online teaching platforms with
                  accessible customer support and resources like live chat,
                  discussion forums, knowledge bases, and video tutorials to
                  help you on your journey.
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                  <span className=" text-black font-semibold">Price:</span> Most
                  creators have a limited budget, so choosing an affordable
                  platform is key. You don’t need to pay for the most expensive
                  product available when budget-friendly options get the job
                  done.
                </div>
              </div>
            </ul>
            <div >
              <img
                src="https://images.ctfassets.net/19dvw6heztyg/rmZNX9zpVesh73WYsE0CU/3dd30f50146d96396b21c1613d513226/1.jpg?w=1440&q=75"
                alt=""
              />
            </div>
            <h2
              className=" mt-16 mb-11 font-DmSerif text-[36px]"
              id="13-best-online-course-platforms"
            >
              13 best online course platforms for creators and entrepreneurs
            </h2>
            <h2 className=" mb-4 font-DmSerif text-[30px]" id="podia">#1 Podia</h2>
            <div>
              <img
                src="https://images.ctfassets.net/19dvw6heztyg/79jDLcpOJw0tVqQrOfwZIn/77054df5f9984e828c23bfe0c4754f50/2.png?w=1440&q=75"
                alt=""
              />
            </div>
            <p className="my-11">
              Building a course on Podia is a breeze. You can add text, videos,
              audio files, quizzes, coaching sessions, and file downloads to
              your lessons and modules.
            </p>
            <div className="video-youtube-link">
              <div class="ratio ratio-16x9">
                <iframe className=" rounded-lg"
                  src="https://www.youtube.com/embed/cUg8kCgSMfA?si=pwfIffSmDAyBFzP8"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <p className="mt-11 font-medium">How much does Podia cost?</p>
            <p className="mt-11">Podia has a free forever plan and two paid plans .</p>
            <ul className=" py-6 pl-4">
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                  Free (8% transaction fee)
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Mover: $39/month
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Shaker: $89/month
                </div>
              </div>
            </ul>
            <h2 className="mt-11 font-DmSerif text-[30px]" id="kajabi">#2 Kajabi</h2>
            <div><img src="https://images.ctfassets.net/19dvw6heztyg/6sUL03QZzepjDGm84mD3L7/4c1439b9abde75b7bf182943f62f7cdb/6.png?w=1440&q=75" alt="" /></div>
            <p className="mt-11 font-medium">How much does Kajabi cost?</p>
            <ul className=" py-6 pl-4">
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Basic: $149/month
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Growth: $199/month
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Pro: $399/month
                </div>
              </div>
            </ul>
            <h2 className="mt-11 font-DmSerif text-[30px]" id="thinkific">#3 Thinkific</h2>
            <div><img src="https://images.ctfassets.net/19dvw6heztyg/1Rg9J9YL1rmLadfHkNiRRx/de85904c0d58ca3d8d7ac26936c0c63a/7.png?w=1440&q=75" alt="" /></div>
            <p className="mt-11 font-medium">How much does Thinkific cost?</p>
            <ul className=" py-6 pl-4">
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Free (No transaction fees)
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Basic: $49/month
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Start: $99/month
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Grow: $199/month
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Expand: $499/month
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
export default OnlineCourses;
