"use client";

import React from "react";
import styles from "./map.module.scss";
import GoogleMapReact from "google-map-react";

interface Props {
  children?: React.ReactNode;
  centerCoordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

export default function GoogleMap({
  children,
  centerCoordinates,
  zoom,
}: Props) {

  return (
    // Important! Always set the container height explicitly
    <div className={styles.container}>
      <GoogleMapReact
        options={{
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
        }}
        bootstrapURLKeys={{
          key: "AIzaSyCZkF-pHsEbukg_IMkltpSPG7T7m_gkp-I",
        }}
        defaultCenter={centerCoordinates}
        defaultZoom={zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
}
