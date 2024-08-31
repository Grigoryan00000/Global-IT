import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";

import blogItemSimilarTopic from "../src/assets/blog/blog-item/blog-item-similarTopic.png"

import sliderImg1 from "../src/assets/home/home-slider/home-slider-img1.png"
import sliderImg2 from "../src/assets/home/home-slider/home-slider-img2.png"
import sliderImg3 from "../src/assets/home/home-slider/home-slider-img3.png"

export const CONFIG = {
  
  //Header 

    headerConfig: [
        {
            id: 1,
            title: "Գլխավոր",
          },
          {
            id: 2,
            title: "Ծառայություններ",
          },
          {
            id: 3,
            title: "Դասընթացներ",
          },
          {
            id: 4,
            title: "Աշխատանք",
          },
          {
            id: 5,
            title: "Կապ",
          },
    ],


   //Home

    home_slider_title_data : [
      {
        id: 1,
        title: "Global IT-ին Հասանելի բոլորին",
        btn1: "Դասընթացներ",
        btn2: "Ծառայություններ",
        icon: <FiPhoneCall />,
        img: null,
      },
      {
        id: 2,
        title:" ԾՐԱԳՐԱՎՈՐՈՒՄ Սովորի՛ր Փոխի՛ր Աշխարհը ",
        btn1: "Դասընթացներ",
        btn2: "Ծառայություններ",
        icon: <FiPhoneCall />,
        img: null,
      },
      {
        id: 3,
        title: "Սովորի՛ր ԴԻԶԱՅՆ Ստեղծի՛ր Նորը",
        btn1: "Դասընթացներ",
        btn2: "Ծառայություններ",
        icon: <FiPhoneCall />,
        img: null,
      },
    ],

    home_slider_img_data : [
      {
        id: 1,
        img: sliderImg1
      },
      {
        id: 2,
        img: sliderImg2
      },
      {
        id: 3,
        img: sliderImg3
      },
    ],

    
    //Footer

    footerFirstListConfig:[
      {
        id: 1,
        title: "Ֆակուլետներ",
        title_ru: "Факультеты",
        title_en: "Faculties",
        text: null,
      },
      {
        id: 2,
        title:null,
        text_ru: "Веб-программирование",
        text_en: "Web programming",
        text: "Վեբ ծրագրավորում"
      },
      {
        id: 3,
        title:null,
        text_ru: "Программирование",
        text_en: "Programming",
        text: "Ծրագրավորում"
      },
      {
        id: 4,
        title:null,
        text: "Մուլտիմեդիա",
        text_ru: "Мультимедиа",
        text_en: "Multimedia",
      },
    ],

    footerSecondListConfig:[
      {
        id: 1,
        text: "Նախագծեր",
        text_ru: "Проекты",
        text_en: "Projects",
      },
      {
        id: 2,
        text: "Աշխատանք",
        text_ru: "Работа",
        text_en: "Work",
      },
      {
        id: 3,
        text: "Մեր մասին",
        text_ru: "О нас",
        text_en: "About us",
      },
    ],

    footerThirdListConfig:[
      {
        id: 1,
        text1: "  ք. Երևան Հովսեփ Էմին 123",
        text1_ru: "  в. Ереван Овсепа Эмина 123:",
        text1_en: "  c. Yerevan Hovsep Emin 123:",
        text2: "  +374 98 960 959",
        text3: "  gitedu@bk.ru",
      }
    ],


    //Blog
    blog_Title_Icons_Data:[
      {
        id: 1,
        icon: <FaTwitter />
      },
      {
        id: 2,
        icon: <FaFacebookSquare />

      },
      {
        id: 3,
        icon: <TiSocialInstagram />
      },
      {
        id: 4,
        icon: <FaLinkedinIn />
      },
    ],

    blog_item_bottom_similarTopic:[
      {
        id:1,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
      {
        id:2,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
      {
        id:3,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
      {
        id:4,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
      {
        id:5,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
      {
        id:6,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
      {
        id:7,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
      {
        id:8,
        text: "Նմանատիպ փոստի վերնագիր",
        img: blogItemSimilarTopic
      },
    ]
}


