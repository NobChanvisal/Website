import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function ProductPageFooter({ desc }) {
  const [activeTab, setActiveTab] = React.useState("description");
  const data = [
    {
      label: "Description",
      value: "description",
      desc: desc,
    },
    {
      label: "Shipping & Returns",
      value: "shipping",
      desc: `How Do I Get Free Shipping on product Orders?  Members get free standard shipping on orders of $50 or more. Every time. And guests get free standard shipping on orders of $75 or more. If you're not already a Member, join Nike today for free. Sign in to your Member profile when you shop and we'll automatically apply free standard shipping at checkout on every order $50 or more (no promo code required).`,
    },
  ];
  return (
    <div className=" max-w-screen-lg">
      <Tabs value={activeTab}>
        <TabsHeader
          className="ml-3.5 rounded-none border-b border-blue-gray-50 bg-transparent p-0 max-w-md"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
export default ProductPageFooter;
