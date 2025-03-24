import {
  defaultIconColor,
  defaultIconSize,
  defaultIconViewbox,
  IconProps,
} from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Camera = ({
  size = defaultIconSize,
  color = defaultIconColor,
  viewBox = defaultIconViewbox,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className} viewBox={viewBox}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.75C11.1993 15.75 10.4454 15.438 9.87868 14.8713C9.31196 14.3046 9 13.5507 9 12.75C9 11.9493 9.31196 11.1954 9.87868 10.6287C10.4454 10.062 11.1993 9.75 12 9.75C12.8007 9.75 13.5546 10.062 14.1213 10.6287C14.688 11.1954 15 11.9493 15 12.75C15 13.5507 14.688 14.3046 14.1213 14.8713C13.5546 15.438 12.8007 15.75 12 15.75ZM12 14.25C11.5969 14.25 11.2246 14.0959 10.9393 13.8107C10.6541 13.5254 10.5 13.1531 10.5 12.75C10.5 12.3469 10.6541 11.9746 10.9393 11.6893C11.2246 11.4041 11.5969 11.25 12 11.25C12.4031 11.25 12.7754 11.4041 13.0607 11.6893C13.3459 11.9746 13.5 12.3469 13.5 12.75C13.5 13.1531 13.3459 13.5254 13.0607 13.8107C12.7754 14.0959 12.4031 14.25 12 14.25Z"
        fill="#3F3F48"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 8.41071C21 7.76464 20.7537 7.15714 20.3084 6.70393C19.8584 6.25071 19.2616 6 18.6316 6H15.9722L15.1161 4.38091C15.0145 4.18951 14.8734 4.02647 14.7097 3.92013C14.546 3.80671 14.3653 3.75 14.179 3.75H9.82097C9.63468 3.75 9.45403 3.80671 9.29032 3.92013C9.12661 4.03355 8.98548 4.18951 8.88387 4.38091L8.02782 6H5.36842C4.73368 6 4.13684 6.25071 3.69158 6.70393C3.24632 7.16196 3 7.76946 3 8.41071V17.0893C3 17.7257 3.25105 18.3477 3.69158 18.7961C4.14158 19.2493 4.73842 19.5 5.36842 19.5H18.6316C19.2663 19.5 19.8584 19.2493 20.3084 18.7961C20.7537 18.338 21 17.7354 21 17.0893V8.41071ZM8.9315 7.5L10.1211 5.25H13.8789L15.0685 7.5H18.6316C18.8541 7.5 19.0686 7.58558 19.2412 7.75796C19.4043 7.92542 19.5 8.15228 19.5 8.41071V17.0893C19.5 17.3419 19.4081 17.5674 19.2384 17.7448C19.0653 17.9164 18.8561 18 18.6316 18H5.36842C5.14588 18 4.93142 17.9144 4.75886 17.7421C4.60099 17.5798 4.5 17.339 4.5 17.0893V8.41071C4.5 8.16003 4.59391 7.92913 4.76434 7.75237C4.92778 7.58742 5.13825 7.5 5.36842 7.5H8.9315Z"
        fill="#3F3F48"
      />
    </SvgIcon>
  );
};
