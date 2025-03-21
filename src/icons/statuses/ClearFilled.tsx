import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const ClearFilled = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM17.4142 16.0201L21.8291 20.435L20.4149 21.8492L16 17.4343L11.5851 21.8492L10.1709 20.435L14.5858 16.0201L10.2728 11.7071L11.687 10.2929L16 14.6059L20.313 10.2929L21.7272 11.7071L17.4142 16.0201Z"
      />
    </SvgIcon>
  );
};
