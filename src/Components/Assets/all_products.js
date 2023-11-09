import img_1 from './Products/cloth/women/outfits/balenciaga-1.jpg'
import img_2 from './Products/cloth/women/outfits/jacquemus-1.jpg'
import img_3 from './Products/cloth/women/outfits/mugler-1.jpg'
import img_4 from './Products/cloth/men/suits/zegna-1.jpg'
import img_5 from './Products/cloth/women/shoes/common-1.jpg'
import img_6 from './Products/cloth/women/shoes/balenciaga-1.jpg'
import img_7 from './Products/cloth/men/shoes/clarks-1.jpg'
import img_8 from './Products/cloth/men/shoes/versace-1.jpg'
import img_9 from './Products/cloth/men/shoes/nike/airforce-1.jpg'
import img_10 from './Products/cloth/men/shorts/les-1.jpg'
import img_11 from './Products/cloth/men/jeans/dolce-1.jpg'
import img_12 from './Products/cloth/men/jeans/versace-1.jpg'
import img_13 from './Products/cloth/men/shorts/18377801_40805544_1000.jpg'
import img_14 from './Products/cloth/men/tops/hoodie/kenzo-tiger-1.jpg'
import img_15 from './Products/cloth/men/tshirt/valentino-1.jpg'
import img_16 from './Products/cloth/men/tshirt/valentino-3.jpg'
import img_17 from './Products/cloth/men/watches/locman-1.jpg'
import img_18 from './Products/cloth/kids/bag/rodini-1.jpg'
import img_19 from './Products/cloth/kids/outfit/bobo-1.jpg'
import img_20 from './Products/cloth/kids/outfit/molo-1.jpg'
import img_21 from './Products/cloth/kids/outfit/stella-1.jpg'
import img_22 from './Products/cloth/kids/outfit/stellaMc-1.jpg'
import img_23 from './Products/cloth/kids/outfit/stellaMc-2.jpg'
import img_24 from './Products/cloth/kids/shoes/adidas-1.jpg'
import img_25 from './Products/cloth/kids/shoes/stellaMc1-1.jpg'
import img_26 from './Products/cloth/kids/shoes/veja-1.jpg'
import img_27 from './Products/cloth/women/outfits/off-white-1.jpg'
import img_28 from './Products/cloth/women/outfits/palm-angels-1.jpg'
import img_29 from './Products/cloth/women/outfits/valentino-1.jpg'
import img_30 from './Products/cloth/women/outfits/valentino-4.jpg'

const all_products = [
    {
        id :1,
        name : "Balenciaga Jacket",
        category : "women",
        img : img_1,
        new_price : 8000,
        old_price : 6000
    },
    {
        id :2,
        name : "Jacquemes outfit",
        category : "women",
        img : img_2,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :3,
        name : "Mugler pant",
        category : "women",
        img : img_3,
        new_price : 5000,
        old_price : 3000
    },
    {
        id :4,
        name : "Zegma suit",
        category : "men",
        img : img_4,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :5,
        name : "Common shoes",
        category : "women",
        img : img_5,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :6,
        name : "Balenciaga shoes",
        category : "women",
        img : img_6,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :7,
        name : "clarks shoes",
        category : "men",
        img : img_7,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :8,
        name : "versace shoes",
        category : "men",
        img : img_8,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :9,
        name : "nike shoes",
        category : "men",
        img : img_9,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :10,
        name : "les shoes",
        category : "men",
        img : img_10,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :11,
        name : "doalce shoes",
        category : "men",
        img : img_11,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :12,
        name : "varsace shoes",
        category : "men",
        img : img_12,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :13,
        name : "men shorts",
        category : "men",
        img : img_13,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :14,
        name : "kenzo hoodie",
        category : "men",
        img : img_14,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :15,
        name : "valentino t-shirt",
        category : "men",
        img : img_15,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :16,
        name : "valentino tshirt 2",
        category : "men",
        img : img_16,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :17,
        name : "locman watch",
        category : "men",
        img : img_17,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :18,
        name : "rodinin bag",
        category : "kids",
        img : img_18,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :19,
        name : "bobo outfit",
        category : "kids",
        img : img_19,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :20,
        name : "molo outfit",
        category : "kids",
        img : img_20,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :21,
        name : "stella outfit",
        category : "kids",
        img : img_21,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :22,
        name : "stella mc outfit",
        category : "kids",
        img : img_22,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :23,
        name : "stella mc outfit",
        category : "kids",
        img : img_23,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :24,
        name : "adidas shoes",
        category : "kids",
        img : img_24,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :25,
        name : "stella mc shoes",
        category : "kids",
        img : img_25,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :26,
        name : "veja shoes",
        category : "kids",
        img : img_26,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :27,
        name : "off white outfit",
        category : "women",
        img : img_27,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :28,
        name : "palm angel outfit",
        category : "women",
        img : img_28,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :29,
        name : "valentino outfit",
        category : "women",
        img : img_29,
        new_price : 101000,
        old_price : 6000
    },
    {
        id :30,
        name : "valentino outfit 2",
        category : "women",
        img : img_30,
        new_price : 101000,
        old_price : 6000
    },
]

export default all_products;