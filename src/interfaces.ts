export interface IPosts {
  title: string;
  body: string;
  id: string;
}

export interface IComments {
  postId: number;
  body: string;
  id: number;
}

export interface IData {
  title: string;
  body: string;
}

export interface IId {
  id: string;
}
