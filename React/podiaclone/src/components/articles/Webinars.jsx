import React from "react";
import Homes from "../Category/Homes";
import ArticleDescrip from "../Category/ArticlesDescrip";
import ArticlesChildImgRight from "../Category/ArticlesChildImgRight";
import VideoTours from "../Category/VideoTours";
import Collapse from "../Category/Collapse";
import SignUp from "../Category/SignUp";
import Faqs from "../Category/Faqs";
function Webinars() {
    const sections = [
    {
        title: "Offer free and paid webinars",
        content:
          "Charge for your webinars, or give them away for free to grow your email list.",
      },
      {
        title: "Earn passive income from replays",
        content:
          "Podia automatically stores your replays. Customers who paid for your webinar will be able to access recordings, and you can let new customers purchase the replay to earn ongoing income.",
      },
      {
        title: "Bundle webinars with other products",
        content:
          "Sell webinars on their own or bundle them with your other digital products like online courses and digital downloads.",
      },
    ];
  return (
    <>
      <Homes
        heading="Sell webinars online"
        title="Sell your webinars, workshops, and live classes through Podia"
        description="Podia lets you sell access to the live and replay webinars you already host on Zoom or YouTube Live — so you can manage your products, payments, and customers under one roof."
        img="https://images.ctfassets.net/19dvw6heztyg/1d5AyEEUzmyY5LUE86zoCc/a1738e30b06a284c770054e729275406/Email_Forms___Analytics__Sell_Ebooks_and_Templates.jpg?w=1440&q=75"
      />
      <ArticleDescrip
        title="Host free or paid workshops, webinars, classes, live streams, office hours, or anything else you want"
        description="Creators use Podia to sell all kinds of live products. Whether you bring in experts to teach your audience or want to run interactive workshops, you can sell your sessions on Podia."
      />
      <div className="container pt-16">
        <div className=" grid grid-cols-3 gap-x-5">
            <div className=" shadow-md rounded-lg">< img className=" rounded-lg" src="https://images.ctfassets.net/19dvw6heztyg/2MSFNhUEAA5QPEsNFqzHqX/f0ab70fd2cad25f8b245b1af2083d629/7.jpg?w=1440&q=75" alt="" /></div>
            <div className=" shadow-md rounded-lg"><img className=" rounded-lg" src="https://images.ctfassets.net/19dvw6heztyg/NKjgGI2RMLBcuknxtAbEg/7f9d087c3337cccf2322462e6ffa2a45/Copy_of_Copy_of_Email_Examples_Tall.jpg?w=1440&q=75" alt="" /></div>
            <div className=" shadow-md rounded-lg"><img className=" rounded-lg" src="https://images.ctfassets.net/19dvw6heztyg/5Jg7C8ADEucmiqdUr5QrQD/6b13d41f1f453f749d334ebbfb785f91/8.jpg?w=1440&q=75" alt="" /></div>
        </div>
      </div>
      <ArticlesChildImgRight
        heading="Use tools you already know"
        title="Integrate with Zoom or YouTube Live — no need to learn new tech"
        description="Podia handles the tricky logistics like taking payments and sending reminder emails. Zoom and YouTube Live have great tools for online workshops, and you can use Podia to cover the gaps."
        img="https://images.ctfassets.net/19dvw6heztyg/qWq6O7UsmPOZqpZPI8Qek/ab41fa7da058f6dbea3c60202da67b5d/175.jpg?w=1440&q=75"
      />
      <ArticlesChildImgRight
        heading="BRANDING AND CUSTOMIZATION"
        title="Make beautiful webinar sales pages (and a full website) that looks like you"
        description="Podia lets you register people for your webinars (and take payments) from a customizable page on your Podia website. Change your colors and fonts, and add testimonials, FAQ sections, and other website sections in just a few clicks."
        img="https://images.ctfassets.net/19dvw6heztyg/2Viq3WgI4hFKUduGqYzh8p/38f85cd94c1e4b2055489a65ede2fcca/Beautiful_website.jpg?w=1440&q=75"
      />
      <section>
        <div className="container">
          <div className="grid-layout-2">
            <div className="text-component text-[18px]">
              <p className="heading-text mb-1">Online webinar features</p>
              <h2 className=" title-section">
              Run your webinars in the same place you do everything else
              </h2>
              <div className="section-description">
                <p>
                Set up waitlists, limit webinar attendance, or add upsell products that your customers will see at checkout. Selling your webinars in Podia means offering a better (and better-looking) product exactly the way you want.
                </p>
              </div>
              <Collapse sections={sections} />
              <button className="mt-4 px-6 py-2 text-[20px] font-bold text-white bg-[#4b2aad] rounded-3xl transition-all hover:bg-[#201445]">
                Get your free Podia account
              </button>
            </div>
            <div className="section-img">
              <img
                className=" rounded-md"
                src="https://images.ctfassets.net/19dvw6heztyg/1uxZ4VdFd46nbxJd5IjXIX/e2cc59e41e4e775a70b55c54ef094ad0/163.jpg?w=1440&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <VideoTours
        VDOlink="https://www.youtube.com/embed/AFRfv1V9yPk?si=extgtQwlwFGGZDHA"
        title="Take a video tour of Podia’s webinar features"
      />
      <SignUp/>
      <Faqs/>   
      </>
  );
}
export default Webinars;
