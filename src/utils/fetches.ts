import { IReservationFormState } from "@/redux/types";
import { baseUrl, checkResponse } from "./constants";
import {
  IGetTourData,
  IReservationFormData,
  ISendFeedbackParams,
  IStringObj,
} from "./types";

type TRequestOptions = {
  method: "POST" | "GET" | "PATCH";
  mode: RequestMode | undefined;
  cache: RequestCache | undefined;
  credentials: RequestCredentials | undefined;
  redirect: RequestRedirect | undefined;
  referrerPolicy: ReferrerPolicy | undefined;
  headers?: {
    "Content-Type":
      | "application/json"
      | "multipart/form-data"
      | "application/x-www-form-urlencoded;charset=UTF-8"
      | "text/html; charset=utf-8";
    "Accept-Encoding"?: "gzip, deflate, br";
    Authorization?: string;
  };
  body?: any;
};

export type TLoginForm = {
  readonly email: string;
  readonly password: string;
};

export type TRegisterForm = {
  readonly email: string;
  readonly name: string;
  readonly password: string;
};

// боевой
// export const getHomeData = () => {
//   const requestOptions: TRequestOptions = {
//     method: "POST",
//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify({
//       main: {
//         url: "/en/dubai/",
//         city: "dubai",
//         lang: "english",
//         currency: "usd",
//       },
//     }),
//   };

//   return fetch(`${baseUrl}/api/home2/`, requestOptions).then(checkResponse);
// };

export const getHomeData = (requestData:any) => {
  requestData = {
    url: requestData.url == '/en' ? '/en' : '/ru',
    city: "dubai",
    lang: requestData.url == '/en' ? "english" : "russian",
    currency: requestData?.currency?.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
    }),
  };

  return fetch(`${baseUrl}/api/home2`, requestOptions).then(checkResponse);
};

export const getCatalogueData = () => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: "/en/dubai/catalog/",
        city: "dubai",
        lang: "english",
        currency: "USD",
      },
    }),
  };

  // return fetch(`${baseUrl}:8080/frontapi/catalog/`, requestOptions).then(
  //   checkResponse
  // );
  return fetch(`${baseUrl}:8080/frontapi/catalog/`, requestOptions).then(
    checkResponse
  );
};

export const getCatalogueCards = (pageNumber: number) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: "/en/dubai/",
        city: "dubai",
        lang: "english",
        currency: "USD",
      },
      page: pageNumber,
    }),
  };
  return fetch(`${baseUrl}/frontapi/catalog/page/`, requestOptions).then(
    checkResponse
  );
};

export async function getTourData( requestData:any, {language,country,type,city,attraction,pageNumber}: IGetTourData) {
  console.log(requestData,"---tourApi1")
  // const url = attraction
  //   ? `/${language}/${country}/${type}/${city}/${attraction}/`
  //   : city
  //   ? `/${language}/${country}/${type}/${city}/`
  //   : `/${language}/${country}/${type}/`;
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
          url: requestData.url,
          city: "dubai",
          lang: requestData.lang == 'english' ? "english" : "russian",
          currency: requestData?.currency?.toUpperCase(),
      },
      page: pageNumber,
    }),
  };

  return fetch(`${baseUrl}/api/tour2`, requestOptions).then(checkResponse);
}

// export const getTourDetails = () => {
//   const requestOptions: TRequestOptions = {
//     method: "POST",
//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify({
//       main: {
//         url: url,
//         city: "dubai",
//         lang: "russian",
//         currency: "RUB",
//       },
//       page: pageNumber,
//     }),
//   };

//   return fetch(`${baseUrl}/api/tour2`, requestOptions).then(checkResponse);
// }

export const getTourDetails = (requestData: any | null) => {
  console.log(requestData,"---tourApi2")
  requestData = {
    url: requestData.url,
    city: "dubai",
    lang: requestData.lang == 'english' ? "english" : "russian",
    currency: requestData?.currency?.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
      page: 1,
    }),
  };

  return fetch(`${baseUrl}/api/tour2`, requestOptions).then(checkResponse);
};

export const getProfile = (user_id: any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: "/en/dubai/personal/",
        city: "dubai",
        lang: "english",
        currency: "USD",
      },
      people: {
        key: user_id,
      },
    }),
  };
  return fetch(`${baseUrl}/api/personal`, requestOptions).then(
    checkResponse
  );
};
export const getUserData = (token: string) => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ?? null}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    };
  return fetch(`${baseUrl}/api/getUser`, requestOptions).then(
    checkResponse
  );
};

// export const getProfile = () => {
//   const requestOptions: TRequestOptions = {
//     method: "POST",
//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify({
//       main: {
//         url: "/en/dubai/personal/",
//         city: "dubai",
//         lang: "english",
//         currency: "usd",
//       },
//       People: {
//         key: "mail@mail.ru",
//       },
//     }),
//   };
//   return fetch(`${baseUrl}:8080/frontapi/personal/`, requestOptions).then(
//     checkResponse
//   );
// };

// getReservationDataByTourId
// 38.180.11.127/api/createReview2
// export const getReservationDataByTourId = (tourId: string) => {
//   const requestOptions: TRequestOptions = {
//     method: "GET",
//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   };

//   return fetch(
//     `${baseUrl}:8080/frontapi/checkout/reserve` +
//       "?" +
//       new URLSearchParams({ calc: "false", type: "tour", id: tourId }),
//     requestOptions
//   ).then(checkResponse);
// };

export const getReservationDataByTourId = (tourId: string) => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(
    `${baseUrl}:8080/frontapi/checkout/reserve` +
      "?" +
      new URLSearchParams({
        calc: "1",
        type: "tour",
        id: tourId,
        date: "19 July",
        time: "13:48",
        adults: "2",
        children: "3",
        currency: "AED",
      }),
    requestOptions
  ).then(checkResponse);
};

export const getBooking = (args: any, id:any) => {
  const requestOptions: any = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };
  return fetch(
    `${baseUrl}/api/checkout/reserve` +
      "?" +
      new URLSearchParams({
        calc: "0",
        type: args.options.Transfer ? "transfer" : "tour",
        id: id,
        date: args.returnDate,
        time: args.returnTime,
        adults: args.people.adults,
        children: args.people.kids,
        currency: "USD"
      }),
    requestOptions
  ).then(checkResponse);
};

export function sendFeedback(formData: FormData) {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    body: formData,
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/api/createReview2`, requestOptions).then(
    checkResponse
  );
}

export const loginRequest = async (form: TLoginForm) => {
  return await fetch(`${baseUrl}/api/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  }).then(checkResponse);
};

// export function sendFeedback(args: ISendFeedbackParams) {
//   // console.log(args, images)
//   const requestOptions: TRequestOptions = {
//     method: "POST",
//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       // "Content-Type": "multipart/form-data",
//        "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       transport: args.transport,
//       price_quality: args.price_quality,
//       service: args.service,
//       organization: args.organization,
//       text: args.text,
//       // images: images,
//       tour_id: args.tour_id,
//       user_id: args.user_id,
//     }),
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   };

//   return fetch(`${baseUrl}/api/createReview2`, requestOptions).then(
//     checkResponse
//   );
// }

export const getBlog = (variant: string, page: number) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: "/en/dubai/",
        city: "dubai",
        lang: "english",
        currency: "USD",
      },
      page: page,
      tab: variant,
    }),
  };
  return fetch(`${baseUrl}/api/blog2`, requestOptions).then(checkResponse);
};

export const registernRequest = async (form: TRegisterForm) => {
  return await fetch(`${baseUrl}/api/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  }).then(checkResponse);
};

// export const getGuidCity = (city: any) => {
//   const requestOptions: TRequestOptions = {
//     method: "POST",

//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify({
//       main: {
//         url: `/en/guide/${city}`,
//         city: "dubai",
//         lang: "russian",
//         currency: "usd",
//       },
//     }),
//   };

//   return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
//     checkResponse
//   );
// };

export const getGuidCity = (requestData:any) => {
  requestData = {
    url: requestData?.url,
    city: "dubai",
    lang: requestData?.lang == 'english' ? "english" : "russian",
    currency: requestData?.currency?.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};

export const getReservationUpdatedData = (form: IReservationFormData) => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  const params = new URLSearchParams({
    calc: form.calc,
    type: form.type,
    id: form.id,
    date: `${form.date.arrivalDate}%20${form.date.returnDate}`,
    time: form.time,
    adults: form.adults,
    children: form.children,
    options: form.options,
  }).toString();

  return fetch(
    `${baseUrl}:8080/frontapi/checkout/reserve` + "?" + params,
    requestOptions
  ).then(checkResponse);
};

export const getGuidDetal = (city: any, shopp: any, detal: any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: `/en/guide/${city}/${shopp}/${detal}`, //здесь адрес раздела
        city: "dubai",
        lang: "english",
        currency: "USD",
      },
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};

export const getGuidShopping = (city: any, shopp: any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: `/en/guide/${city}/${shopp}`,
        // url: `/en/guide/dubai/attractions`,
        city: "dubai",
        lang: "english",
        currency: "USD",
      },
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};

export const getGuidMain = () => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: "/en/guide",
        city: "dubai",
        lang: "english",
        currency: "USD",
      },
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};

// TODO: убрать переопределение requestData, когда бэк будет возвращать кореектный ответ
export const getCompany = (requestData:any) => {
  requestData = {
    url: "/en/guide",
    city: "dubai",
    lang: requestData.lang == 'english' ? "english" : "russian",
    currency: requestData?.currency?.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
    }),
  };

  return fetch(`${baseUrl}/api/remain/company`, requestOptions).then(
    checkResponse
  );
};

export const getContacts = (requestData:any) => {
  requestData = {
    url: "/en/guide",
    city: "dubai",
    lang: requestData.lang == 'english' ? "english" : "russian",
    currency: requestData?.currency?.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
    }),
  };

  return fetch(`${baseUrl}/api/remain/contact`, requestOptions).then(
    checkResponse
  );
};

export const getFaq = (requestData:any) => {
  requestData = {
    url: "/en/guide",
    city: "dubai",
    lang: requestData.lang == 'english' ? "english" : "russian",
    currency: requestData?.currency?.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
    }),
  };

  return fetch(`${baseUrl}/api/remain/faq`, requestOptions).then(checkResponse);
};

export const getPolicy = (requestData:any) => {
  requestData = {
    url: "/en/guide",
    city: "dubai",
    lang: requestData.lang == 'english' ? "english" : "russian",
    currency: requestData.currency.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
    }),
  };

  return fetch(`${baseUrl}/api/remain/privacyPolicies`, requestOptions).then(
    checkResponse
  );
};

export const getBlogDetails = (requestData:any) => {
  requestData = {
    url: requestData.url,
    city: "dubai",
    lang: requestData.lang == 'english' ? "english" : "russian",
    currency: requestData?.currency?.toUpperCase(),
  };
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: requestData,
    }),
  };

  return fetch(`${baseUrl}/api/blog/detal2`, requestOptions).then(
    checkResponse
  );
};
export const getSearchData = (value: any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
        q: `${value}`,
        lang: "english",
    }),
  };

  return fetch(`${baseUrl}/api/search`, requestOptions).then(checkResponse);
};

// export const TourSelectData = async () => {
//   return await fetch(`${baseUrl}/api/allTours`, {
//     method: "GET",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify({
//         main: {
//             lang: 'russian',
//         },
//       }),
//   }).then(checkResponse);
// };
export const getTourSelectData = () => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/api/allTours?lang=en`,requestOptions).then(checkResponse);
};

export const createTourOrder = (postData: any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(postData),
  };

  return fetch(`${baseUrl}/api/createOrder2`, requestOptions).then(checkResponse);
};

export const getCheckoutAllOrder = (token:any) => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ?? null}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/api/checkout/getAll`,requestOptions).then(checkResponse);
};

export const updateProfileData = (form: any, token:any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ?? null}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  };

  return fetch(`${baseUrl}/api/updateUser`, requestOptions).then(checkResponse);
};

export const getBookingModalData = (id:any) => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/api/findTour?id=${id}`,requestOptions).then(checkResponse);
};

export const tourBooking = (form: any, token:any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ?? null}`,

    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  };

  return fetch(`${baseUrl}/api/checkout/createCheckout`, requestOptions).then(checkResponse);
};

export const tourPay = (form: any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  };

  return fetch(`${baseUrl}/api/createOrder2`, requestOptions).then(checkResponse);
};