import React, { useState } from "react";
import minusIcon from "../image/minusIcon.svg";
import plusIcon from "../image/plusIcon.svg";
import plusWhite from "../image/plusWhite.svg";
import minusWhite from "../image/minusWhites.svg";
import Collapse from "./Collapse";

// Destructure sections from the props object
function Faqs() {
  const sections = [
    {
      title: "What features does Podia have?",
      content:
        "Podia is an all-in-one platform for running your online business. You get a full website, your own online community, and the ability to sell digital products like courses, downloads, webinars, and any other type of file you like. Podia also includes your checkout cart and email marketing so you don’t have to connect tons of other tools.",
    },
    {
      title: "Does Podia have a free plan?",
      content:
        "Yes! Podia has a free forever plan that includes your full website, blogging, one digital download, one coaching product, customer chat messaging, and your online community. Sign up for free today to see for yourself!",
    },
    {
      title: "What kinds of things can I sell with Podia?",
      content:
        "You can sell digital downloads, online courses, coaching offers, community plans, webinars, and pretty much any type of file you can think of. Podia handles product hosting and delivery so you can focus on what you do.",
    },
    {
      title: "Does Podia take a percentage of sales?",
      content:
        "Podia doesn’t charge any fees on paid plans, though the payment processor (Stripe or PayPal) will charge a standard transaction fee of 2.9% + 30¢, which may vary based on your location. The fees are charged by the processor and not associated with our plans. On our free plan, we charge an 8% fee on all transactions.",
    },
    {
      title: "Does Podia integrate with my existing tools?",
      content:
        "Most likely, yes. You can use Podia’s embed feature to display content from over 1,900 sources like YouTube, SoundCloud, Spotify, and Typeform. Podia also has native integrations with tools like Zapier, ConvertKit, MailChimp, Google Analytics, Zoom, Calendly, Sumo, and Deadline Funnel. For payment processing, Podia integrates with Paypal and Stripe.",
    },
    {
      title: "I still have questions, HELP!",
      content:
        "We’d love to. Podia’s customer support is here for you, seven days a week. Just reach out to us on chat and a real, friendly person will be delighted to help you out.",
    },
  ];
  return (
    <>
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10">
        <div className="text-component pt-1">
            <h2 className="heading-text">FAQs</h2>
            <h2 className="title-section">Quick Answers</h2>
            <div className="section-description">
              <p>
                Don’t see your answer?{" "}
                <a className="underline" href="">
                  Reach out to us, we’d love to help!
                </a>
              </p>
            </div>
          </div>
          <div className=" text-[30px] font-DmSerif">
          <Collapse sections={sections} />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Faqs;
