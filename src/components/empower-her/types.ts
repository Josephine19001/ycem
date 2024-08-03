import { StaticImageData } from 'next/image';

export interface Student {
  picture: StaticImageData;
  name: string;
  university: string;
  study: string;
}

export interface StudentDetails extends Student {
  id: number;
  raised: number;
  goal: number;
  situation: string;
  grade: string;
  wassce: string;
}
