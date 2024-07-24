import { ReactElement } from "react";

export interface IUser {
  _id: string;
  role: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  password: string;
  status: number;
}

export interface IProperty {
  _id: string;
  ownerId: string;
  name: string;
  type: string;
  location: string;
  price: number;
  description: string;
  images: string[];
  checkin: Date | null;
  checkout: Date | null;
  additional: string;
  views: number;
  clicks: number;
  openingStatus?: string;
  openingAdditional?: string;
}

export interface ICurrency {
  _id: string;
  name: string;
  code: string;
  icon: React.ReactNode;
}

/// /////////////////////////////////////////////////////
export interface IPropertyCategory {
  _id: string;
  icon: React.ReactNode;
  name: string;
}

export interface IReviewOption {
  _id: string;
  icon: ReactElement;
  description: string;
}

export interface IPropertyItem {
  _id: string;
  thumbnail: string;
  price: number;
  rating: number;
  country: string;
  state: string;
  title: string;
  subtitle: string;
  content: string;
}

export interface ITourItem {
  _id: string;
  thumbnail: string;
  title: string;
  content: string;
  price: number;
  unit: string;
}

export interface IRoomItem {
  _id: string;
  image: string;
  title: string;
  item01: string;
  item02: string;
  item03: string;
}

export interface IGuideItem {
  _id: string;
  thumbnail: string;
  title: string;
  content: string;
}

export interface ITimeshareItem {
  _id: string;
  thumbnail: string;
  title: string;
  content: string;
}

export interface IReviewItem {
  _id: string;
  rating: number;
  content: string;
  reviewer: string;
}

export interface ILocation {
  _id: string;
  city: string;
  country: string;
}

export interface IFaq {
  _id: string;
  title: string;
  content: string;
}

export interface IVideo {
  _id: string;
  title: string;
  url: string;
  duration: string;
}
