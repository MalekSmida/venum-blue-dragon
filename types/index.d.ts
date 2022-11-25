export interface Collection {
  _id: string;
  image: string;
  title: string;
  link: string;
}

export interface ButtonLink {
  title: string;
  link: string;
}

export interface Gender {
  _id: string;
  image: string;
  title: string;
  listButtons: ButtonLink[];
}
