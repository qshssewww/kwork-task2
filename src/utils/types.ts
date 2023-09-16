export interface IStringObj {
  [key: string]: string;
}

export interface ISendFeedbackParams {
  transport: string | null;
  price_quality: string | null;
  service: string | null;
  organization: string | null;
  text: string | null;
  // images: FormData;
  tour_id: string | null;
  user_id: string | null;
}

export interface IReservationFormData {
  calc: string;
  type: string;
  id: string;
  date: IStringObj
  time: string;
  adults: string;
  children: string;
  options: string;
}

export interface IGetTourData {
  language: string;
  country: string;
  type: string;
  city?: string;
  attraction?: string;
  // currency: string;
  pageNumber: number;
}