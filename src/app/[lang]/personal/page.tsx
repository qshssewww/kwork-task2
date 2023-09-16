"use client"
import { montserrat } from "../../fonts";
import styles from "./page.module.scss";
import React from "react";
import Profile from "@/components/pages/profile-page/profile-page";
import { getProfile } from "@/utils/fetches";
import DatePicker from "@/components/ui/date-picker/date-picker";

export default async function Home() {
  return (
    <div>
      <Profile />
    </div>
  );
}
