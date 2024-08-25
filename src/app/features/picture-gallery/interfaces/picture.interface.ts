import { IApi } from 'src/app/core';

interface IPictureAttributes {
  name: string;
}

interface IPictureLinks {
  src: string;
}

export interface IPicture extends IApi<IPictureAttributes, IPictureLinks> {} // eslint-disable-line @typescript-eslint/no-empty-object-type
