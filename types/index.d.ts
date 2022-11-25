export interface ICollection {
  _id: string;
  image: string;
  title?: string;
  link?: string;
  tag?: Category;
  description?: string;
  listButtons?: IButtonLink[];
}

export interface IButtonLink {
  title: string;
  link?: string;
}
