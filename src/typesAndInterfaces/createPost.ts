export interface CreatePost {
  name: string;
  sub_heading: string;
  year: string;
  picture: FileList | string;
  tag: "winners";
  [key: string]: string | number | FileList | undefined;
}

export interface AncestriesCreatePost {
  post_heading: string;
  post_sub_heading: string;
  age: string;
  sex: string;
  email: string;
  address: string;
  state: string;
  nationality: string;
  date_year: string;
  ancestries_posts_imgs: FileList | string;
  [key: string]: string | number | FileList | undefined;
}
