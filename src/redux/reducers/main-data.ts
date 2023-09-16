import {
  GET_MAIN_DATA_REQUEST,
  GET_MAIN_DATA_SUCCESS,
  GET_MAIN_DATA_FAILED,
  SET_MODAL_STATE,
} from "../constants/main-data";
import { TApiMainDataActions } from "../actions/main-data";

type TMainDataState = {
  allData: any;
  allDataRequest: boolean;
  allDataFailed: boolean;
  modalIsOpen: boolean;
};

export interface ISetMainData {
  readonly type: any;
  payload: any;
}

const initialState: TMainDataState = {
  allData: {
    Header: {
      seo: {
        title: "ClickToGuide - Dubai wery love",
        description: "Описание о дубае и все такое",
      },
      logo: "http://38.180.11.127/upload/logo/logow.svg",
      lication: {
        icon: "http://38.180.11.127/upload/icon/menu/white/location.svg",
        city: "OAE, Dubai",
      },
      language: {
        list: [
          {
            url: "/en/dubai/",
            icon: "http://38.180.11.127/upload/icon/flag/eng.svg",
            lang: "English",
          },
          {
            url: "/ru/dubai/",
            icon: "http://38.180.11.127/upload/icon/flag/rus.svg",
            lang: "Russian",
          },
        ],
        icon: {
          arrowicon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
        },
      },
      currency: {
        exchange: [
          {
            url: "/en/dubai/",
            currency: "$ USD",
          },
          {
            url: "/en/dubai/",
            currency: "₽ RUB",
          },
        ],
        iconArrow: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
      },
      menu: [
        {
          name: "Tour",
          url: "/en/dubai/tour",
        },
        {
          name: "Transfer",
          url: "/en/dubai/transfer",
        },
        {
          name: "Company",
          url: "/en/company",
          arrowicon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
          nesting: [
            {
              name: "About company",
              url: "/en/company",
            },
            {
              name: "Blog",
              url: "/en/blog",
            },
            {
              name: "Сontacts",
              url: "/en/dubai/contacts",
            },
            {
              name: "Partners",
              url: "/en/partners",
            },
            {
              name: "Requisites",
              url: "/en/requisites",
            },
            {
              name: "Privacy policy",
              url: "/en/privacypolicy",
            },
          ],
        },
        {
          name: "Client",
          url: "/en/FAQ",
          arrowicon: "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
          nesting: [
            {
              name: "Tours",
              url: "/en/dubai/tour",
            },
            {
              name: "Transfer",
              url: "/en/dubai/transfer",
            },
            {
              name: "Checkout",
              url: "/en/checkout",
            },
            {
              name: "FAQ",
              url: "/en/faq",
            },
          ],
        },
      ],
      wishlist: {
        icon: "http://38.180.11.127/upload/icon/menu/white/heart.svg",
        name: "Wishlist",
        url: "/en/wishlist",
      },
      registration: "Sign up",
      mobile: {
        icon: {
          iconWorld: "http://38.180.11.127/upload/icon/menu/black/mir.svg",
        },
        Contact: {
          textContact: "We will be happy to help you",
          textContactOr: "or",
          wh: {
            text: "WhatsApp",
            icon: "http://38.180.11.127/upload/icon/menu/contact/whatsapp.svg",
          },
          tl: {
            text: "Telegram",
            icon: "http://38.180.11.127/upload/icon/menu/contact/telegram.svg",
          },
        },
      },
    },
    Banner: {
      background: "http://38.180.11.127/upload/photo/photo1.jpg",
      title: "Dubai wery love",
      search: {
        text: "Where are you heading?",
        icon: "http://38.180.11.127/upload/menu/white/search2.svg",
      },
    },
    Categories: [
      {
        sorting: "200",
        name: "Tickets",
        icon: "http://38.180.11.127/upload/icon/categori/tickets.svg",
        nesting: [
          {
            name: "Theme Parks in Dubai1",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai2",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai3",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai4",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
      {
        sorting: "100",
        name: "Tour",
        icon: "http://38.180.11.127/upload/icon/categori/tour.svg",
        nesting: [
          {
            name: "Theme Parks in Dubai",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
      {
        sorting: "500",
        name: "Tickets",
        icon: "http://38.180.11.127/upload/icon/categori/tickets.svg",
        nesting: [
          {
            name: "Theme Parks in Dubai",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
      {
        sorting: "100",
        name: "Tour",
        icon: "http://38.180.11.127/upload/icon/categori/tour.svg",
        nesting: [
          {
            name: "Theme Parks in Dubai",
            url: "/en/dubai/catalog/Theme Parks in Dubai",
          },
          {
            name: "View all Tickets in Dubai",
            url: "/en/dubai/catalog/View all Tickets in Dubai",
          },
          {
            name: "Museums in Dubai",
            url: "/en/dubai/catalog/Museums in Dubai",
          },
          {
            name: "Landmarks in Dubai",
            url: "/en/dubai/catalog/Landmarks in Dubai",
          },
        ],
      },
    ],
    Recommend: {
      title: "We Recommend",
      button: {
        name: "View all",
        url: "/en/dubai/catalog/",
      },
      product: [
        {
          sorting: "200",
          id: "1",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo1.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "200",
          id: "2",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo2.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "200",
          id: "1",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo2.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "200",
          id: "2",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo2.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "200",
          id: "1",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo2.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "200",
          id: "2",
          url: "/en/dubai/category/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/photo3.jpg",
            },
            {
              url: "http://38.180.11.127/upload/photo/photo2.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari Park Abu Dhabi",
          description: "The largest in the world, area 200,000 m²",
          price: "$250",
          oldprice: "$350",
        },
      ],
    },
    Destination: {
      name: "Destination",
      cities: [
        {
          sorting: "200",
          url: "/en/dubai/",
          photo: "http://38.180.11.127/upload/photo/destination/001.jpg",
          name: "Dubai",
          description: "United Arab Emirates",
        },
        {
          sorting: "100",
          url: "/en/dubai/",
          photo: "http://38.180.11.127/upload/photo/destination/002.jpg",
          name: "Bangkok",
          description: "Tailand",
        },
        {
          sorting: "200",
          url: "/en/dubai/",
          photo: "http://38.180.11.127/upload/photo/destination/003.jpg",
          name: "Hoshimin",
          description: "Vetnam",
        },
        {
          sorting: "100",
          url: "/en/dubai/",
          photo: "http://38.180.11.127/upload/photo/destination/004.jpg",
          name: "Bali",
          description: "Indonesia",
        },
        {
          sorting: "200",
          url: "/en/dubai/",
          photo: "http://38.180.11.127/upload/photo/destination/005.jpg",
          name: "Mumbai",
          description: "India",
        },
        {
          sorting: "100",
          url: "/en/dubai/",
          photo: "http://38.180.11.127/upload/photo/destination/004.jpg",
          name: "Dubai",
          description: "United Arab Emirates",
        },
      ],
    },
    Combo: {
      name: "Combo Packages",
      button: "Make your own combo package",
      product: [
        {
          sorting: "200",
          id: "1",
          url: "/en/dubai/cateory/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/combo/001.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari World Abu Dhabi",
          description:
            "The largest indoor theme park in the world, located in Abu Dhabi",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "100",
          id: "2",
          url: "/en/dubai/cateory/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/combo/002.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari World Abu Dhabi",
          description:
            "The largest indoor theme park in the world, located in Abu Dhabi",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "200",
          id: "1",
          url: "/en/dubai/cateory/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/combo/001.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari World Abu Dhabi",
          description:
            "The largest indoor theme park in the world, located in Abu Dhabi",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "100",
          id: "2",
          url: "/en/dubai/cateory/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/combo/002.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari World Abu Dhabi",
          description:
            "The largest indoor theme park in the world, located in Abu Dhabi",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "200",
          id: "1",
          url: "/en/dubai/cateory/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/combo/001.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari World Abu Dhabi",
          description:
            "The largest indoor theme park in the world, located in Abu Dhabi",
          price: "$250",
          oldprice: "$350",
        },
        {
          sorting: "100",
          id: "2",
          url: "/en/dubai/cateory/ferraripark",
          photo: [
            {
              url: "http://38.180.11.127/upload/photo/combo/002.jpg",
            },
          ],
          mark: [
            {
              name: "New",
            },
            {
              name: "product",
            },
          ],
          hearticon: "http://38.180.11.127/upload/icon/categori/hearts.svg",
          staricon: "http://38.180.11.127/upload/icon/categori/star.svg",
          startext: "4.5 (200)",
          name: "Ferrari World Abu Dhabi",
          description:
            "The largest indoor theme park in the world, located in Abu Dhabi",
          price: "$250",
          oldprice: "$350",
        },
      ],
    },
    Step: {
      name: "3 steps to tour",
      step: [
        {
          icon: "http://38.180.11.127/upload/icon/pr/love.svg",
          text: "Choose your favorite tour on the site",
          subtitle: "Click book and follow the instructions",
        },
        {
          icon: "http://38.180.11.127/upload/icon/pr/doc.svg",
          text: "Choose your favorite tour on the site",
          subtitle: "Click book and follow the instructions",
        },
        {
          icon: "http://38.180.11.127/upload/icon/pr/loc.svg",
          text: "Choose your favorite tour on the site",
          subtitle: "Click book and follow the instructions",
        },
      ],
    },
    Guide: {
      name: "guide",
      description:
        "A useful and detailed guide to information about holidays in Dubai and the OAE",
      countries: [
        {
          type: "asia",
          name: "Asia",
          product: [
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/guide/001.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "Sight",
              desc: "Popular attractions in Dubai шт OAE",
              photo: "http://38.180.11.127/upload/photo/guide/002.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "Acquaintance",
              desc: "Get to know the UAE a lot better",
              photo: "http://38.180.11.127/upload/photo/guide/003.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "Entertainment",
              desc: "Popular things to do in Dubai",
              photo: "http://38.180.11.127/upload/photo/guide/004.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "Shopping",
              desc: "Dubai's best places to shop",
              photo: "http://38.180.11.127/upload/photo/guide/005.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "Route",
              desc: "Any itinerary in dubai",
              photo: "http://38.180.11.127/upload/photo/guide/006.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/guide/007.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "Sight",
              desc: "Popular attractions in Dubai шт OAE",
              photo: "http://38.180.11.127/upload/photo/guide/008.jpg",
              url: "/en/dubai/guide/",
            },
          ],
        },
        {
          type: "europa",
          name: "Europa",
          product: [
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/photo2.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/photo3.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/photo2.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/photo3.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/photo2.jpg",
              url: "/en/dubai/guide/",
            },
            {
              name: "New",
              desc: "New interesting places",
              photo: "http://38.180.11.127/upload/photo/photo3.jpg",
              url: "/en/dubai/guide/",
            },
          ],
        },
      ],
    },
    Description: [
      {
        sorting: "200",
        photo: "http://38.180.11.127/upload/photo/photo3.jpg",
        name: "Dubai - everything for rest in duba and UAE",
        desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country",
      },
      {
        sorting: "300",
        photo: "http://38.180.11.127/upload/photo/photo2.jpg",
        name: "Dubai - everything for rest in duba and UAE",
        desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country",
      },
      {
        sorting: "200",
        photo: "http://38.180.11.127/upload/photo/photo1.jpg",
        name: "Dubai - everything for rest in duba and UAE",
        desc: "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country",
      },
    ],
    Footer: {
      logo: "http://38.180.11.127/upload/logo/logow.svg",
      desc: "Unforgettable experience in one click",
      city: "ОАЭ, Дубай",
      developerIcon: {
        logo: "http://38.180.11.127/upload/logo/logo_dev.svg",
        url: "site.com",
      },
      menu: [
        {
          name: "Company",
          url: "site.com",
          nesting: [
            {
              name: "About company",
              url: "site.com",
            },
            {
              name: "Blog",
              url: "site.com/",
            },
            {
              name: "Сontacts",
              url: "site.com",
            },
            {
              name: "Partners",
              url: "site.com",
            },
            {
              name: "Requisites",
              url: "site.com",
            },
            {
              name: "Privacy policy",
              url: "site.com",
            },
          ],
        },
        {
          name: "Client",
          url: "site.com",
          nesting: [
            {
              name: "Tours",
              url: "site.com",
            },
            {
              name: "Transfer",
              url: "site.com",
            },
            {
              name: "Checkout",
              url: "site.com",
            },
            {
              name: "FAQ",
              url: "site.com",
            },
          ],
        },
        {
          name: "Excursions Dubai",
          url: "site.com/tour",
          nesting: [
            {
              name: "New",
              url: "site.com",
            },
            {
              name: "Sight",
              url: "site.com",
            },
            {
              name: "Acquaintance",
              url: "site.com",
            },
            {
              name: "Entertainment",
              url: "site.com",
            },
            {
              name: "Shopping",
              url: "site.com",
            },
            {
              name: "Route",
              url: "site.com",
            },
            {
              name: "Musems",
              url: "site.com",
            },
            {
              name: "Water Parks",
              url: "site.com",
            },
            {
              name: "Theme Parks",
              url: "site.com",
            },
            {
              name: "Musems",
              url: "site.com",
            },
            {
              name: "Water Parks",
              url: "site.com",
            },
            {
              name: "Theme Parks",
              url: "site.com",
            },
          ],
        },
      ],
    },
    Styles: {
      headerColor: [
        {
          colorHeader: "white",
        },
      ],
      marksColor: [
        {
          name: "New",
          textColor: "black",
          backgroundColor: "blackwhite",
        },
        {
          name: "product",
          textColor: "white",
          backgroundColor: "black",
        },
      ],
    },
    Оther: {
      heartall: "http://38.180.11.127/upload/icon/pr/heartall.svg",
    },
    window: {
      comboWindow: {
        CBone: {
          name: "Make your program",
          desc: "Select the tours you are interested in by name and enter the phone number",
          inputone: "Choose tour 1",
          inputtwo: "Choose tour 2",
          btnadd: "+ Add more",
          btnText: "Next",
        },
        CBtwo: {
          name: "Enter phone number",
          desc: "We will contact you and send you a unique price especially for you",
          inputPhone: "You phone",
          cpntactText: "How to contact you",
          contacttab: {
            CTtext1: "All",
            CTtext2: "Phone",
            CTtext3: "Whatsapp",
            CTtext4: "Telegram",
          },
          btnText: "Send",
        },
        CBthre: {
          name: "Your application is accepted",
          desc: "We will contact you during business hours 10:00-20:00 London time",
          btnText: "Close a window",
        },
      },
      locationWondow: {
        name: "You location: ОАЭ, Дубай",
        city: [
          {
            cityloc: "Dubai",
          },
          {
            cityloc: "Turkiye",
          },
          {
            cityloc: "London",
          },
          {
            cityloc: "Amsterdam",
          },
          {
            cityloc: "Berlin",
          },
          {
            cityloc: "Doha",
          },
          {
            cityloc: "London",
          },
          {
            cityloc: "Amsterdam",
          },
          {
            cityloc: "Berlin",
          },
          {
            cityloc: "Doha",
          },
        ],
      },
      Authorization: {
        Registration: {
          name: "Registration",
          nameInput: "You name*",
          emailInput: "Email*",
          passInput: "Password*",
          btnText: "Registration",
          btnTextSmall: "Restore password",
        },
        Entrance: {
          name: "Entrance",
          emailInput: "Email*",
          passInput: "Password*",
          btnText: "Entrance",
          btnTextSmall: "Restore password",
        },
      },
      Restore: {
        RestoreOne: {
          name: "Restore password",
          desc: "You will receive an email with a link to reset your password",
          emailInput: "Email*",
          btnText: "Send",
        },
        RestoreTwo: {
          name: "Link sent to email",
          desc: "A link to reset your password has been sent to your email, check your spam",
          btnText: "Close a window",
        },
      },
    },
  },
  allDataRequest: false,
  allDataFailed: false,
  modalIsOpen: false,
};

export const mainData = (
  state = initialState,
  action: TApiMainDataActions
): TMainDataState => {
  switch (action.type) {
    case SET_MODAL_STATE:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };

    case GET_MAIN_DATA_REQUEST:
      return { ...state, allDataRequest: true };

    case GET_MAIN_DATA_SUCCESS:
      return {
        ...state,
        allData: action.payload,
        allDataRequest: false,
        allDataFailed: false,
      };

    case GET_MAIN_DATA_FAILED:
      return { ...state, allDataFailed: true };

    default:
      return state;
  }
};
