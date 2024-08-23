import React from "react";
import { Link } from "react-router-dom";
import shoppingLogo from "../image/Serviceimage/shoppingCart.svg";
import arrow from "../image/Serviceimage/arrow.svg";
import upload from "../image/Serviceimage/upload.svg";
import stars from "../image/stars.svg";
import SignUp from "../Category/SignUp";

function Home() {
  // const links = [
  //   { name: "OnlineCourses", Path: "/onlineCourse" },
  // ];
  return (
    <article>
      <section className="pt-[70px] w-full">
        <div className="container grid-layout-2 items-start">
          <div className="text-component">
            <p className="heading-text mb-1">Digital Products</p>
            <h2 className="home-title text-[50px] font-DmSerif">
              Sell online courses, coaching sessions, webinars, workshops,
              ebooks, and anything you can think of on Podia
            </h2>
            <div className="section-description">
              <p>
                Get everything you need in one place that you own. Podia takes
                care of hosting products, taking payments, and getting products
                to your customers. And you always control your own work.
              </p>
            </div>
            <button className="mt-4 px-6 py-2 text-[20px] font-bold text-white bg-[#4b2aad] rounded-3xl transition-all hover:bg-[#201445]">
              Get your free account
            </button>
          </div>
          <div className="section-img">
            <img
              className=" rounded-md"
              src="https://images.ctfassets.net/19dvw6heztyg/3xU9z3jUaXTRdC0ii7hXVb/2ac68a4e2bab8ea98b76e001daf345af/digital_products-hero.png?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className=" font-inter">
        <div className="container grid grid-cols-3 gap-x-7 gap-y-16">
          <div className="item1 center-card col-span-3 justify-self-center text-center max-w-[1024px]">
            <h2 className=" text-[34px] font-DmSerif">
              All you have to do is make the product. Podia takes care of the
              details for you.
            </h2>
            <div className="section-description">
              <p>
                Podia lets you make your sales page, take payments, and give
                your customers access all in one place. Host and sell your
                products without needing to figure out a handful of new tools.
              </p>
            </div>
          </div>
          <div className="item2 center-card">
            <div className="itemIcon w-[50px] h-[50px] bg-[#f5efeb] flex items-center justify-center rounded-full mb-4">
              <img src={shoppingLogo} alt="" />
            </div>
            <div className="itemInfo">
              <h2 className=" font-DmSerif text-[20px]">
                Checkout and sales are handled for you
              </h2>
              <div className="section-description text-[16px] mb-7">
                <p>
                  You don’t have to figure out a bunch of tools or website
                  embeds. Just connect a payment provider and your Podia site
                  takes care of payments for you.
                </p>
              </div>
            </div>
          </div>
          <div className="item3 center-card">
            <div className="itemIcon w-[50px] h-[50px] bg-[#f5efeb] flex items-center justify-center rounded-full mb-4">
              <img src={arrow} alt="" />
            </div>
            <div className="itemInfo">
              <h2 className=" font-DmSerif text-[20px]">
                Your customers log in, and your products are there for them
              </h2>
              <div className="section-description text-[16px] mb-7">
                <p>
                  Your Podia site handles access to products for you. Everything
                  is in one place. When your customers buy a product, they get a
                  log in. After that, they can see all the products they’ve
                  bought from you.
                </p>
              </div>
            </div>
          </div>
          <div className="item4 center-card">
            <div className="itemIcon w-[50px] h-[50px] bg-[#f5efeb] flex items-center justify-center rounded-full mb-4">
              <img src={upload} alt="" />
            </div>
            <div className="itemInfo">
              <h2 className=" font-DmSerif text-[20px]">
                Upload your product. Make your sales page. Done.
              </h2>
              <div className="section-description text-[16px] mb-7">
                <p>
                  You could sell a digital product by this afternoon. Podia
                  handles hosting, sales pages, checkout, and delivery. All you
                  need is something to sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="text-component">
            <p className="heading-text mb-1">Online Courses</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              Beautiful online courses you can build in moments
            </h2>
            <div className="section-description">
              <p>
                Make a beautiful online course for your customers. Podia hosts
                your course. That means all the lessons, files, and videos you
                want handled for you.
              </p>
            </div>
            <div className="mt-4 py-2 text-[20px] font-bold  text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              <Link to="/onlineCourse">Learn more about courses <span className="group-hover:ml-2">&#8594;</span> </Link>
              
            </div>
          </div>
          <div className="section-img">
            <img
              className=" rounded-md m-0"
              src="https://images.ctfassets.net/19dvw6heztyg/6Upd6xYyofNMlYawCQm7OA/1c2d7c3b665bb2dda455db43da72762a/digital_products-courses.png?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="center-card">
          <div className="center-card justify-center text-center max-w-[1024px]">
            <img className="stars" src={stars} alt="" />

            <div className="review-quote">
              <h2>
                I’ve wanted to offer e-courses for a while but always felt
                overwhelmed with how to set it up. Podia has made it super easy.
              </h2>
              <p>— Joy Cho, Oh Joy! Academy</p>
            </div>
          </div>
        </div>
      </section>
      {/* ebook add */}
      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="text-component">
            <p className="heading-text mb-1">Digital downloads</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              Ebooks, templates, and any file type you can think of
            </h2>
            <div className="section-description">
              <p>
                Have an ebook to sell? Templates you love? Podia makes it easy
                to spin up a sales page and sell ebooks, templates, audio files,
                video files, spreadsheets, and any other file type.
              </p>
            </div>
            <div className="mt-4 py-2 text-[20px] font-bold  text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              <Link to="/digitalDownload">Learn more about downloads <span className="group-hover:ml-2">&#8594;</span></Link>
              
            </div>
          </div>
          <div className="section-img">
            <img
              className=" rounded-md m-0"
              src="https://images.ctfassets.net/19dvw6heztyg/7p6JX5lRphfQnMNrsU1OuP/1c5e24ecb26ce3440fc87034242f0a27/digital_products-downloads.png?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="center-card">
          <div className="center-card justify-center text-center max-w-[1024px]">
            <img className="stars" src={stars} alt="" />

            <div className="review-quote">
              <h2>
                We didn’t have to stress about technical details or custom
                coding. Using Podia made selling our first eBook quick,
                efficient, and fun.
              </h2>
              <p>— Matt & Steph, Plant-based food bloggers</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="text-component">
            <p className="heading-text mb-1">Coaching</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              One-on-one coaching and consultations, with billing managed for
              you
            </h2>
            <div className="section-description">
              <p>
                Sometimes your students want one-on-one attention. Podia makes
                it easy for you to charge for coaching sessions and
                consultations.
              </p>
            </div>
            <div className="mt-4 py-2  text-[20px] font-bold  text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              <a>Learn more about coaching <span className="group-hover:ml-2">&#8594;</span></a>
              
            </div>
          </div>
          <div className="section-img">
            <img
              className=" rounded-md m-0"
              src="https://images.ctfassets.net/19dvw6heztyg/6MRIUMFs5dX9PKOjtzMXjf/9f5b01182904ffc6c4663dc2f442c3ba/digital_products-coaching.png?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="center-card">
          <div className="center-card justify-center text-center max-w-[1024px]">
            <img className="stars" src={stars} alt="" />

            <div className="review-quote">
              <h2>
                Podia just works. It’s easy to use and includes everything you
                need to sell digital products. I’ve tried all the alternatives,
                and Podia is hard to beat.
              </h2>
              <p>— Shawn Leamon, Divorce and Your Money</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid grid-cols-2 gap-16">
          <div className="text-component">
            <p className="heading-text mb-1">Webinars</p>
            <h2 className="home-title text-[30px] font-DmSerif">
              Webinars and workshops with registration and payment in one place
            </h2>
            <div className="section-description">
              <p>
                How can you charge for your webinars and workshops? Do it from
                your Podia site. Set up a paid webinar product and your
                customers can register straight from your website.
              </p>
            </div>
            <div className="mt-4 py-2 flex flex-row text-[20px] font-bold  text-[#4b2aad] cursor-pointer transition-all hover:text-[#201445] group">
              <a>Learn more about webinars <span className="group-hover:ml-2">&#8594;</span></a>
              
            </div>
          </div>
          <div className="section-img">
            <img
              className=" rounded-md m-0"
              src="https://images.ctfassets.net/19dvw6heztyg/5LepYwomTxpDT9PU2CoeHo/0aec7f94e534ac062df48c7e7f4c7f51/digital_products-webinars.png?w=1440&q=75"
              alt=""
            />
          </div>
        </div>
      </section>
      <SignUp/>
    </article>
  );
}
export default Home;
