import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Battery75 = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path
        d="M13 2.75V3.5H8.25C7.65326 3.5 7.08096 3.73705 6.65901 4.15901C6.23705 4.58097 6 5.15326 6 5.75V27.75C6 28.3467 6.23705 28.919 6.65901 29.341C7.08096 29.7629 7.65326 30 8.25 30H23.75C24.3467 30 24.919 29.7629 25.341 29.341C25.7629 28.919 26 28.3467 26 27.75V5.75C26 5.15326 25.7629 4.58097 25.341 4.15901C24.919 3.73705 24.3467 3.5 23.75 3.5H19V2.75C19 2.55109 18.921 2.36032 18.7803 2.21967C18.6397 2.07902 18.4489 2 18.25 2H13.75C13.5511 2 13.3603 2.07902 13.2197 2.21967C13.079 2.36032 13 2.55109 13 2.75ZM23 27H9V6.5H23V27Z"
        fill="#4C4C4C"
      />
      <path d="M20 14.661H12V18.661H20V14.661Z" fill="#4C4C4C" />
      <path d="M20 20.511H12V24.511H20V20.511Z" fill="#4C4C4C" />
      <path opacity="0.3" d="M20 8.66H12V12.66H20V8.66Z" fill="#4C4C4C" />
    </SvgIcon>
  );
};
