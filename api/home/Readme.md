# Home

## Для получения главной страницы нужно сделать POST запрос на адрес site.com/api/home/
Временно токена нет, его опишем позже, пока посылаем запросы постом

```json
{
  "main": {
    "url": "/en/dubai/", //адрес страницы которую запрашиваешь
    "city": "dubai", //город  по которому идет запрос
    "lang": "english", //язык на котором нужно отдать старницу
    "currency": "usd" //валюта в которой нуно отображать товары
  }
}
```

## В ответ получите главную страницу с иконками и всем текстом

```json
{
  "Header": {
    "seo": {
      "title": "ClickToGuide - Dubai wery love",
      "description": "Описание о дубае и все такое"
    },
    "colorHeader": "white",
    "logo": "http://38.180.11.127/upload/logo/logow.svg",
    "lication": {
      "icon": "http://38.180.11.127/upload/icon/menu/white/location.svg",
      "city": "OAE, Dubai"
    },
    "language": {
      "list": [{
        "url": "/en/dubai/",
        "icon": "http://38.180.11.127/upload/icon/flag/eng.svg",
        "lang": "English"
      },
        {
          "url": "/ru/dubai/",
          "icon": "http://38.180.11.127/upload/icon/flag/eng.svg",
          "lang": "Russian"
        }
      ],
      "icon": {
        "arrowicon": "http://38.180.11.127/upload/icon/menu/white/arroww.svg"
      }
    },
    "currency": {
      "exchange": [{
        "url": "/en/dubai/",
        "currency": "$ USD"
      },
        {
          "url": "/en/dubai/",
          "currency": "₽ RUB"
        }
      ],
      "iconArrow": "http://38.180.11.127/upload/icon/menu/white/arroww.svg"
    },
    "menu": [{
      "name": "Tour",
      "url": "/en/dubai/tour"
    },
      {
        "name": "Transfer",
        "url": "/en/dubai/transfer"
      },
      {
        "name": "Company",
        "url": "/en/company",
        "arrowicon": "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
        "nesting": [{
          "name": "About company",
          "url": "/en/company"
        },
          {
            "name": "Blog",
            "url": "/en/blog"
          },
          {
            "name": "Сontacts",
            "url": "/en/dubai/contacts"
          },
          {
            "name": "Partners",
            "url": "/en/partners"
          },
          {
            "name": "Requisites",
            "url": "/en/requisites"
          },
          {
            "name": "Privacy policy",
            "url": "/en/privacypolicy"
          }
        ]
      },
      {
        "name": "Client",
        "url": "/en/FAQ",
        "arrowicon": "http://38.180.11.127/upload/icon/menu/white/arroww.svg",
        "nesting": [{
          "name": "Tours",
          "url": "/en/dubai/tour"
        },
          {
            "name": "Transfer",
            "url": "/en/dubai/transfer"
          },
          {
            "name": "Checkout",
            "url": "/en/checkout"
          },
          {
            "name": "FAQ",
            "url": "/en/faq"
          }
        ]
      }
    ],
    "wishlist": {
      "icon": "http://38.180.11.127/upload/icon/menu/white/heart.svg",
      "name": "Wishlist",
      "url": "/en/wishlist"
    },
    "registration": "Sign up",
    "mobile": {
      "icon": {
        "iconWorld": "http://38.180.11.127/upload/icon/menu/black/mir.svg"
      },
      "Contact": {
        "textContact": "We will be happy to help you",
        "textContactOr": "or",
        "wh": {
          "text": "WhatsApp",
          "icon": "http://38.180.11.127/upload/icon/menu/contact/whatsapp.svg"
        },
        "tl": {
          "text": "Telegram",
          "icon": "http://38.180.11.127/upload/icon/menu/contact/telegram.svg"
        }
      }
    }
  },
  "Banner": {
    "background": "http://38.180.11.127/upload/photo/photo1.jpg",
    "title": "Dubai very love",
    "search": {
      "text": "Where are you heading?",
      "icon": "http://38.180.11.127/upload/menu/white/search2.svg"
    }
  },
  "Categories": [{
    "sorting": "200",
    "name": "Tickets",
    "icon": "http://38.180.11.127/upload/icon/categories/tickets.svg",
    "nesting": [{
      "name": "Theme Parks in Dubai",
      "url": "/en/dubai/catalog/Theme Parks in Dubai"
    },
      {
        "name": "View all Tickets in Dubai",
        "url": "/en/dubai/catalog/View all Tickets in Dubai"
      },
      {
        "name": "Museums in Dubai",
        "url": "/en/dubai/catalog/Museums in Dubai"
      },
      {
        "name": "Landmarks in Dubai",
        "url": "/en/dubai/catalog/Landmarks in Dubai"
      }
    ]
  },
    {
      "sorting": "100",
      "name": "Tour",
      "icon": "http://38.180.11.127/upload/icon/categories/tour.svg",
      "nesting": [{
        "name": "Theme Parks in Dubai",
        "url": "/en/dubai/catalog/Theme Parks in Dubai"
      },
        {
          "name": "View all Tickets in Dubai",
          "url": "/en/dubai/catalog/View all Tickets in Dubai"
        },
        {
          "name": "Museums in Dubai",
          "url": "/en/dubai/catalog/Museums in Dubai"
        },
        {
          "name": "Landmarks in Dubai",
          "url": "/en/dubai/catalog/Landmarks in Dubai"
        }
      ]
    },
    {
      "sorting": "500",
      "name": "Tickets",
      "icon": "http://38.180.11.127/upload/icon/categories/tickets.svg",
      "nesting": [{
        "name": "Theme Parks in Dubai",
        "url": "/en/dubai/catalog/Theme Parks in Dubai"
      },
        {
          "name": "View all Tickets in Dubai",
          "url": "/en/dubai/catalog/View all Tickets in Dubai"
        },
        {
          "name": "Museums in Dubai",
          "url": "/en/dubai/catalog/Museums in Dubai"
        },
        {
          "name": "Landmarks in Dubai",
          "url": "/en/dubai/catalog/Landmarks in Dubai"
        }
      ]
    },
    {
      "sorting": "100",
      "name": "Tour",
      "icon": "http://38.180.11.127/upload/icon/categories/tour.svg",
      "nesting": [{
        "name": "Theme Parks in Dubai",
        "url": "/en/dubai/catalog/Theme Parks in Dubai"
      },
        {
          "name": "View all Tickets in Dubai",
          "url": "/en/dubai/catalog/View all Tickets in Dubai"
        },
        {
          "name": "Museums in Dubai",
          "url": "/en/dubai/catalog/Museums in Dubai"
        },
        {
          "name": "Landmarks in Dubai",
          "url": "/en/dubai/catalog/Landmarks in Dubai"
        }
      ]
    }
  ],
  "Recommend": {
    "title": "We Recommend",
    "button": {
      "name": "View all",
      "url": "/en/dubai/catalog/"
    },
    "products": [{
      "sorting": "200",
      "id": "1",
      "url": "/en/dubai/category/ferraripark",
      "photos": [{
        "url": "http://38.180.11.127/upload/photo/photo2.jpg"
      },
        {
          "url": "http://38.180.11.127/upload/photo/photo3.jpg"
        }
      ],
      "marks": [{
        "name": "New",
        "color": "#ffffff"
      },
        {
          "name": "product",
          "color": "#333333"
        }
      ],
      "hearticon": "http://38.180.11.127/upload/icon/categories/heart.jpg",
      "staricon": "http://38.180.11.127/upload/icon/categories/star.jpg",
      "startext": "4.5 (200)",
      "name": "Ferrari Park Abu Dhabi",
      "description": ,
      "price": "$250",
      "oldprice": "$350"
    },
      {
        "sorting": "200",
        "id": "2",
        "url": "/en/dubai/category/ferraripark",
        "photos": [{
          "url": "http://38.180.11.127/upload/photo/photo2.jpg"
        },
          {
            "url": "http://38.180.11.127/upload/photo/photo3.jpg"
          }
        ],
        "marks": [{
          "name": "New",
          "color": "#ffffff"
        },
          {
            "name": "product",
            "color": "#333333"
          }
        ],
        "hearticon": "http://38.180.11.127/upload/icon/categories/heart.jpg",
        "staricon": "http://38.180.11.127/upload/icon/categories/star.jpg",
        "startext": "4.5 (200)",
        "name": "Ferrari Park Abu Dhabi",
        "description": ,
        "price": "$250",
        "oldprice": "$350"
      }
    ]
  },
  "Destination": {
    "name": "Destinations",
    "cities": [{
      "sorting": "200",
      "url": "/en/dubai/",
      "photo": "http://38.180.11.127/upload/photo/photo1.jpg",
      "name": "Dubai",
      "description": "United Arab Emirates"
    },
      {
        "sorting": "100",
        "url": "/en/dubai/",
        "photo": "http://38.180.11.127/upload/photo/photo1.jpg",
        "name": "Dubai",
        "description": "United Arab Emirates"
      }
    ]
  },
  "Combo": {
    "name": "Combo Packages",
    "button": "Make your own combo package",
    "product": [{
      "sorting": "200",
      "id": "1",
      "url": "/en/dubai/cateory/ferraripark",
      "photo": [{
        "url": "http://38.180.11.127/upload/photo/photo2.jpg"
      },
        {
          "url": "http://38.180.11.127/upload/photo/photo3.jpg"
        }
      ],
      "mark": [{
        "name": "New",
        "color": "#ffffff"
      },
        {
          "name": "product",
          "color": "#333333"
        }
      ],
      "hearticon": "http://38.180.11.127/upload/icon/category/heart.svg",
      "staricon": "http://38.180.11.127/upload/icon/category/star.svg",
      "startext": "4.5 (200)",
      "name": "Ferrari World Abu Dhabi",
      "description": "The largest indoor theme park in the world, located in Abu Dhabi",
      "price": "$250",
      "oldprice": "$350"
    },
      {
        "sorting": "100",
        "id": "2",
        "url": "/en/dubai/cateory/ferraripark",
        "photo": [{
          "url": "http://38.180.11.127/upload/photo/photo2.jpg"
        },
          {
            "url": "http://38.180.11.127/upload/photo/photo3.jpg"
          }
        ],
        "mark": [{
          "name": "New",
          "color": "#ffffff"
        },
          {
            "name": "product",
            "color": "#333333"
          }
        ],
        "hearticon": "http://38.180.11.127/upload/icon/category/heart.svg",
        "staricon": "http://38.180.11.127/upload/icon/category/star.svg",
        "startext": "4.5 (200)",
        "name": "Ferrari World Abu Dhabi",
        "description": "The largest indoor theme park in the world, located in Abu Dhabi",
        "price": "$250",
        "oldprice": "$350"
      }
    ]
  },
  "Step": {
    "name": "3 steps to tour",
    "step": [{
      "icon": "http://38.180.11.127/upload/icon/pr/love.svg",
      "text": "<b>Choose your favorite tour on the site </b><br>Click book and follow the instructions"
    },
      {
        "icon": "http://38.180.11.127/upload/icon/pr/doc.svg",
        "text": "<b>Choose your favorite tour on the site </b><br>Click book and follow the instructions"
      },
      {
        "icon": "http://38.180.11.127/upload/icon/pr/loc.svg",
        "text": "<b>Choose your favorite tour on the site </b><br>Click book and follow the instructions"
      }
    ]
  },
  "Guide": {
    "name": "guide",
    "description": "A useful and detailed guide to information about holidays in Dubai and the OAE",
    "countries": [{
      "asia": {
        "name": "Asia",
        "product": [{
          "name": "New",
          "desc": "New interesting places",
          "photo": "http://38.180.11.127/upload/photo/photo3.jpg",
          "url": "/en/dubai/guide/"
        },
          {
            "name": "New",
            "desc": "New interesting places",
            "photo": "http://38.180.11.127/upload/photo/photo3.jpg",
            "url": "/en/dubai/guide/"
          }
        ]
      },
      "europa": {
        "name": "Asia",
        "product": [{
          "name": "New",
          "desc": "New interesting places",
          "photo": "http://38.180.11.127/upload/photo/photo3.jpg",
          "url": "/en/dubai/guide/"
        },
          {
            "name": "New",
            "desc": "New interesting places",
            "photo": "http://38.180.11.127/upload/photo/photo3.jpg",
            "url": "/en/dubai/guide/"
          }
        ]
      }
    }]
  },
  "Description": [{
    "sorting": "200",
    "photo": "http://38.180.11.127/upload/photo/photo3.jpg",
    "name": "Dubai - everything for rest in duba and UAE",
    "desc": "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country"
  },
    {
      "sorting": "300",
      "photo": "http://38.180.11.127/upload/photo/photo2.jpg",
      "name": "Dubai - everything for rest in duba and UAE",
      "desc": "the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country the largest city of the United Arab Emirates, the capital of the principality of the same name, which is the second largest in the country"
    }
  ],
  "Footer": {
    "logo": "site.com",
    "desc": "Unforgettable experience in one click",
    "city": "ОАЭ, Дубай",
    "developerIcon": {
      "logo": "site.com",
      "url": "site.com"
    },
    "menu": [{
      "name": "Company",
      "url": "site.com",
      "nesting": [{
        "name": "About company",
        "url": "site.com"
      },
        {
          "name": "Blog",
          "url": "site.com/"
        },
        {
          "name": "Сontacts",
          "url": "site.com"
        },
        {
          "name": "Partners",
          "url": "site.com"
        },
        {
          "name": "Requisites",
          "url": "site.com"
        },
        {
          "name": "Privacy policy",
          "url": "site.com"
        }
      ]
    },
      {
        "name": "Client",
        "url": "site.com",
        "nesting": [{
          "name": "Tours",
          "url": "site.com"
        },
          {
            "name": "Transfer",
            "url": "site.com"
          },
          {
            "name": "Checkout",
            "url": "site.com"
          },
          {
            "name": "FAQ",
            "url": "site.com"
          }
        ]
      },
      {
        "name": "Excursions Dubai",
        "url": "site.com/tour",
        "nesting": [{
          "name": "New",
          "url": "site.com"
        },
          {
            "name": "Sight",
            "url": "site.com"
          },
          {
            "name": "Acquaintance",
            "url": "site.com"
          },
          {
            "name": "Entertainment",
            "url": "site.com"
          },
          {
            "name": "Shopping",
            "url": "site.com"
          },
          {
            "name": "Route",
            "url": "site.com"
          },
          {
            "name": "Musems",
            "url": "site.com"
          },
          {
            "name": "Water Parks",
            "url": "site.com"
          },
          {
            "name": "Theme Parks",
            "url": "site.com"
          },
          {
            "name": "Musems",
            "url": "site.com"
          },
          {
            "name": "Water Parks",
            "url": "site.com"
          },
          {
            "name": "Theme Parks",
            "url": "site.com"
          }

        ]
      }
    ]

  }
}
```

## если ответ был некорректный то получите ответ
```json
{
not found
}
```