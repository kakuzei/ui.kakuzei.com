import { IPicture } from './picture.interface';

export interface IExtendedPicture {
  displayable: boolean;
  displayed: boolean;
  loaded: boolean;
  picture: IPicture;
  visible: boolean;
}
