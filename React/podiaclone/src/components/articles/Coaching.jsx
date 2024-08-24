import React from "react";
import Collapse from "../Category/Collapse";
import Faqs from "../Category/Faqs";
import checkmark from "../image/checkmark.svg";
import SignUp from "../Category/SignUp";
import OnlineBusiness from "../Category/OnlineBusiness";

function Coaching() {
  const sections = [
    {
      title: "Payment processing",
      content:
        "Your customers can pay with Stripe, Paypal, Google Pay, Apple Pay, iDeal, SEPA Debit, Stripe Link, and other popular payment processors.",
    },
    {
      title: "Coupons and seat limits",
      content:
        "Drive sales with discounts and coupons, or limit the number of seats available for more control over your program.",
    },
    {
      title: "Presales and waitlists",
      content:
        "Gauge interest before launching your coaching offer with pre-selling. You can also build a waitlist and notify members when you’re open for bookings.",
    },
  ];
  return (
    <article>
      <section className=" mt-48">
        <div className="container">
          <div className="grid-layout-2">
            <div className="text-component">
              <p className="heading-text mb-1">Sell online coaching</p>
              <h2 className=" title-section">
                When people ask, “do you do coaching?” say yes and send them to
                your Podia site
              </h2>
              <div className="section-description">
                <p>
                  Coaching sessions and consultations make it easy to sell your
                  expertise — and it’s even easier when you can manage your
                  website, clients, payments, and email in one platform.
                </p>
              </div>
              <button className="mt-4 px-6 py-2 text-[20px] font-bold text-white bg-[#4b2aad] rounded-3xl transition-all hover:bg-[#201445]">
                Get your free Podia account
              </button>
            </div>
            <div className="section-img">
              <img
                className=" rounded-md"
                src="https://images.ctfassets.net/19dvw6heztyg/6fgrZGJHhodYCJOU6EG58l/a64bc0cbc00d4a28bd687d3c35176877/Beautiful_website.jpg?w=1440&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container center-card">
          <div className="max-w-[1024px]">
            <h2 className=" title-section">
              You can offer coaching on Podia’s free plan
            </h2>
            <div className="section-description">
              <p>
                There are no upfront costs to get started, and the free plan
                also includes a full website, unlimited landing pages, a digital
                download, and your own online community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid-layout-2">
            <div className="text-component">
              <p className="heading-text mb-1">All in one</p>
              <h2 className=" title-section">
                Sell coaching & consulting in the same place as everything else
              </h2>
              <div className="section-description">
                <p>
                  Just connect your favorite scheduling platform (Calendly,
                  Acuity, YouCanBookMe, SavvyCal, or a custom link), and
                  customers will be able to book and pay for their session.
                </p>
              </div>
            </div>
            <div className="section-img">
              <img
                className=" rounded-md"
                src="https://images.ctfassets.net/19dvw6heztyg/4Hip3HdOKGyIEmWiQ8qpNW/d6ac3e18d374f282b741917b69770c03/164.jpg?w=1440&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid-layout-2">
            <div className="text-component">
              <p className="heading-text mb-1">Easy set up</p>
              <h2 className=" title-section">
                One-to-one, one-to-many, or both
              </h2>
              <div className="section-description">
                <p>
                  Run 1-to-1 coaching sessions, or reach larger groups with
                  courses, webinars, and community memberships. It only takes a
                  few clicks to set up your coaching business however you like.
                </p>
              </div>
            </div>
            <div className="section-img">
              <img
                className=" rounded-md"
                src="https://images.ctfassets.net/19dvw6heztyg/48HvNy06TGlDyRxw2547ts/b05130bbe2c20d0597c2e24310931af3/165.jpg?w=1440&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-layout-2">
            <div className="text-component text-[18px]">
              <p className="heading-text mb-1">One-page checkout</p>
              <h2 className=" title-section">
                Podia handles payments and checkout so you can focus on your
                coaching clients
              </h2>
              <div className="section-description">
                <p>
                  Podia lets you take payments upfront and instantly access your
                  funds.
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
      <section>
        <div className="container">
          <div className=" grid-layout-2">
            <div className="video-youtube-link w-full">
              <div class="ratio ratio-16x9">
                <iframe
                  className=" rounded-lg"
                  src="https://www.youtube.com/embed/pxRtqZvw4-8?si=rcdW5TIYgPe9hXyh"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="text-component text-[18px]">
              <p className="heading-text mb-1">Video Tour</p>
              <h2 className=" title-section">
                Take a video tour of Podia’s coaching features
              </h2>
              <ul className=" py-6 pl-4">
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Learn what makes Podia different
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                See how easy it is to start selling
                </div>
              </div>
              <div className="list-chil">
                <div className="bg-[#f5efeb] w-8 h-8 rounded-full center-card justify-center mr-4">
                  <img src={checkmark} alt="" />
                </div>
                <div>
                Go behind-the-scenes of the coaching feature
                </div>
              </div>
            </ul>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
      <SignUp/>
      <OnlineBusiness/>
    </article>
  );
}
export default Coaching;
