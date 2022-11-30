export interface ICollection {
  _id: string;
  imageDesk: string;
  imageMobile: string;
  title?: string;
  link?: string;
  tag?: Category;
  description?: string;
  listButtons?: IButtonLink[];
}

export interface IButtonLink {
  _id: string;
  title: string;
  link?: string;
}
