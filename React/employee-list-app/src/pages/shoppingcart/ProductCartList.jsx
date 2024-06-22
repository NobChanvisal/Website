import React, { useState } from 'react';
import ProductCart from '../../components/shoppingCart/ProductCart';

function ProductCartList() {
  const [productCarts, setProductCarts] = useState([
    {
      proId: 1,
      proImg: "https://nb.scene7.com/is/image/NB/u9060blk_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
      proName: "New Balance",
      proInfo: "9060 Black with castlerock",
      proPrice: "$149.99",
      proSize: ["38", "40", "41", "42"]
    },
    {
      proId: 2,
      proImg: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/676f3abceb30456c950e859984cee710_9366/CAMPUS_00s_CF_EL_I_Black_JI4335_01_standard.jpg",
      proName: "Adidas",
      proInfo: "CAMPUS 00S CF EL I Black",
      proPrice: "$55",
      proSize: ["38", "40", "41", "42"]
    },
    {
      proId: 3,
      proImg: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ad01ea98-46b8-4c1d-a98c-90c4b15a91be/air-force-1-lv8-big-kids-shoes-3V7D0N.png",
      proName: "Nike",
      proInfo: "Nike Air Force 1 LV8",
      proPrice: "$105",
      proSize: ["38", "40", "41", "42"]
    },
    {
      proId: 4,
      proImg: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380017/02/fnd/PNA/fmt/png/ForeverRun-NITRO%E2%84%A2-Men's-Running-Shoes",
      proName: "Puma",
      proInfo: "ForeverRun NITRO Men's Running Shoes",
      proPrice: "$75",
      proSize: ["38", "40", "41", "42"]
    },
    {
      proId: 5,
      proImg: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dd0764d4-9055-4893-ab0a-f0562ceacc0e/air-force-1-07-mens-shoes-hK5NzM.png",
      proName: "Nike",
      proInfo: "Nike Air Force 1 '07",
      proPrice: "$135",
      proSize: ["38", "40", "41", "42"]
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center pt-[65px]">
      {productCarts.map((productCart, index) => (
        <ProductCart
          key={productCart.proId}
          proId={productCart.proId}
          proName={productCart.proName}
          proInfo={productCart.proInfo}
          proImg={productCart.proImg}
          proPrice={productCart.proPrice}
          proSize={productCart.proSize}
          delays={index * 0.3} // Pass delays as a prop
        />
      ))}
    </div>
  );
}

export default ProductCartList;
