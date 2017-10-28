import { IApi } from 'app/core';

interface ITagAttributes {
  name: string;
}

export interface ITag extends IApi<ITagAttributes> {}
