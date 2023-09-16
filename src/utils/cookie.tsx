export function setCookie(name: any, value: any, props: any) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  let updatedCookie = name + "=" + JSON.stringify(value);
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  if (typeof document != "undefined") {
    document.cookie = updatedCookie;
  } 
  // document.cookie = updatedCookie;
}

export function setCookieToken(name: any, value: any, props: any) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  if (typeof document != "undefined") {
    document.cookie = updatedCookie;
  } 
  // document.cookie = updatedCookie;
}

export function getCookie(name: any, noDecode = false) {
  
  const matches = 
  typeof document != "undefined" ?
  document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  ): null

  if (!matches) return undefined;
  else if (noDecode) return matches[1];
  else return JSON.parse(matches[1]);
}

export function pushCookie(name: any, value: any) {
  const matches = typeof document != "undefined" ? document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  ) : null;
  const parsArray = matches ? JSON.parse(matches[1]) : undefined;
  if (parsArray.find((el: any) => el.id == value.id)) {
    let index = parsArray.findIndex((item: any) => item.id === value.id);
    parsArray.splice(index, 1);
  } else {
    parsArray.push(value);
  }
  if (typeof document != "undefined") {
    // document.cookie = updatedCookie;
    return (document.cookie = name + "=" + JSON.stringify(parsArray));
  } 
}

export function deleteCookie(name: any) {
  setCookie(name, null, { expires: -1 });
}
