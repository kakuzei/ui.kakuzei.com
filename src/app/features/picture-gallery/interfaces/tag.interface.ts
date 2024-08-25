import { IApi } from 'src/app/core';

interface ITagAttributes {
  name: string;
}

export interface ITag extends IApi<ITagAttributes> {} // eslint-disable-line @typescript-eslint/no-empty-object-type
