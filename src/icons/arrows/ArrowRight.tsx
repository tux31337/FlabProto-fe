import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const ArrowRight = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M22.0607 15.454C22.6464 16.0398 22.6464 16.9896 22.0607 17.5754L13.5754 26.0606C12.9896 26.6464 12.0398 26.6464 11.4541 26.0606C10.8683 25.4748 10.8683 24.5251 11.4541 23.9393L19.9393 15.454C20.5251 14.8682 21.4749 14.8682 22.0607 15.454Z" />
      <path d="M22.0607 17.5604C21.4749 18.1461 20.5251 18.1461 19.9394 17.5604L11.4541 9.07507C10.8683 8.48929 10.8683 7.53954 11.4541 6.95375C12.0399 6.36797 12.9896 6.36797 13.5754 6.95375L22.0607 15.439C22.6465 16.0248 22.6465 16.9746 22.0607 17.5604Z" />
    </SvgIcon>
  );
};
