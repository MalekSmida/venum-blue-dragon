export interface ICollection {
  _id: string;
  image: string;
  title: string;
  link: string;
  tag?: Category;
}

export interface IButtonLink {
  title: string;
  link: string;
}

export interface IGender {
  _id: string;
  image: string;
  title: string;
  listButtons: IButtonLink[];
}

export interface IButtonMenu {
  title: string;
  link?: string;
}
