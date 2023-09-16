// export const baseUrl = 'http://38.180.11.127/api/home/';


export function checkResponse(res: Response) {
  // console.log(res,"----check")
  if (res.ok) {
    return res.json();
  } else {
    window.location.href='/en/error404'
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

export const baseUrl = "http://38.180.11.127";
