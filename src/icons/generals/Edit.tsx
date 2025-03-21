import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Edit = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M5.00416 24.9276L5.55078 20.2428L17.4922 8.82873L22.9934 14.0847L11.0485 25.4987L6.14295 26.0243C6.10385 26.0264 6.06466 26.0264 6.02556 26.0243C5.88424 26.0274 5.74386 26.0006 5.61362 25.9456C5.48338 25.8907 5.36622 25.8088 5.26979 25.7055C5.17337 25.6021 5.09987 25.4795 5.05409 25.3458C5.00832 25.212 4.9913 25.0701 5.00416 24.9294V24.9276ZM18.4646 7.89844L20.8946 5.57707C21.2901 5.20632 21.8118 5 22.3539 5C22.8961 5 23.4178 5.20632 23.8133 5.57707L26.3957 8.0456C26.5865 8.22438 26.7385 8.44038 26.8424 8.68025C26.9464 8.92012 27 9.17876 27 9.44017C27 9.70159 26.9464 9.96023 26.8424 10.2001C26.7385 10.44 26.5865 10.656 26.3957 10.8347L23.9658 13.1579L18.4646 7.89844Z" />
    </SvgIcon>
  );
};
