
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import CloseModal from "@/images/logos/icons/closeModalForm.svg";
import LocationClip from "@/images/logos/icons/location-clip.svg";
import Modal from "react-modal";
import styles from "./CityModal.module.scss";
import { Dispatch, SetStateAction, useState } from "react";
import Link from 'next/link'
import Cookies from "js-cookie";

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      maxWidth: '100%',
      maxHeight: '100%'
    },
  };
  
  export {};

  declare global {
    interface Window {
      curCountry: string;
    }
  }
  export default function CityModal({isOpen, setOpen, cities, setCountryName}: any) {
    const [isLoaded, setLoaded] = useState(false);
    const [curCountry, setCurCountry] = useState<any>();
    const [countryList, setCountries] = useState<any>({});
    const countryDefault = 'AE';

    const getUrlCountry = (countriesByCityCode: any) => {
      var url = window.location.pathname.split('/');
      if (url[3]){
        if (countriesByCityCode[url[3]]) return countriesByCityCode[url[3]];
      }
      return false;
    }

    const locateCountry = async (countries: any) => {
      var countryCode = countryDefault;
      var res = await fetch('https://api.country.is');
      var data = await res.json();
      if (data['country'] && countries[data['country']]) countryCode = data['country'];
      setCountry(countryCode, countries);
    }

    const setCountry = (curCountryCode: string, countries=countryList) => {
        setCurCountry(countries[curCountryCode as keyof string]);
        window.curCountry = countries[curCountryCode];
        setCountryName(countries[curCountryCode]['name'])
        Cookies.set('country', curCountryCode, {expires: 7});
    }

    useEffect(() => {
      if (!isLoaded) {
        const countries : {[name: string]: any} = {};
        var countriesByCityCode : {[name: string]: any} = {}

        cities.forEach((cityObj: any) => {
          var countryCode = cityObj['countryCode'];
          if (typeof countries[countryCode] == 'undefined') {
            countries[countryCode] = {
              name: cityObj['countryName'],
              code: countryCode,
              cities: [],
            }
          }
          var cityArr = {
            name: cityObj['cityloc'],
            url: cityObj['url'],
            urlCode: cityObj['urlCode'],
          }
          countries[countryCode]['cities'].push(cityArr);
          countriesByCityCode[cityObj['urlCode']] = countryCode;
        });
        var curCountryCode = getUrlCountry(countriesByCityCode);
        if (!curCountryCode) {
          curCountryCode = Cookies.get('country');
          if (!curCountryCode) locateCountry(countries);
        }
        if (curCountryCode && countries[curCountryCode]) {
          setCountry(curCountryCode, countries);
        }
        setCountries(countries);
        setLoaded(true);
      }
    })

    return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
      className={styles.modal}
      ariaHideApp={false}
    >
    <div>
      <button className={styles.closeButton} onClick={() => setOpen(false)}>
        <CloseModal width={40} height={40} />
      </button>
      <div className={styles.contentContainer}>
          <div className={styles['city-modal-wrap']}>
            <div className={styles['city-modal-col']+' '+styles['left-col']}>
              <div className={styles['city-modal-location']}>
                <LocationClip className={styles['loc-icon']}/>
                <div className={styles['loc-name']}>{curCountry?.name}</div>
              </div>
              <div className={styles['countries-wrap']}>
                {countryList && Object.keys(countryList).map((countryCode) => {
                  var className = styles['city-modal-country'];
                  if (countryCode == curCountry['code']) className+= ' '+styles['active'];
                  return(
                      <div onClick={() => {setCountry(countryCode)}} className={className}>{countryList[countryCode]['name']}</div>
                  )
                })}
              </div>
            </div>

            <div className={styles['city-modal-col']+' '+styles['right-col']}>
              <div className={styles['city-modal-city-wrap']}>
                {curCountry && curCountry?.cities.map((city:any) => {
                  return(
                      <Link href={city.url} className={styles['city-modal-city']}>{city.name}</Link>
                  )
                })}
              </div>
            </div>
          </div>
      </div>
    </div>        
    </Modal>
    );
}

