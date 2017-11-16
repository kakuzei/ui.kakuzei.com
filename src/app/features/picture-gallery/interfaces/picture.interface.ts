import { IApi } from 'app/core';

interface IPictureAttributes {
  name: string;
}

interface IPictureLinks {
  src: string;
}

export interface IPicture extends IApi<IPictureAttributes, IPictureLinks> {}
