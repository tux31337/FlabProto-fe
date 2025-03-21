import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Setting = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M24.59 17.175C24.6427 16.7852 24.6708 16.3924 24.674 15.999C24.6712 15.6056 24.6432 15.2128 24.59 14.823L27.121 12.843C27.2318 12.7526 27.307 12.6259 27.3333 12.4853C27.3597 12.3448 27.3355 12.1994 27.265 12.075L24.862 7.923C24.7913 7.79942 24.6789 7.70501 24.545 7.65664C24.4111 7.60828 24.2644 7.60912 24.131 7.659L21.143 8.859C20.5228 8.3783 19.8411 7.98278 19.116 7.683L18.662 4.5C18.6412 4.35957 18.5701 4.23148 18.4619 4.13952C18.3538 4.04756 18.2159 3.99798 18.074 4H13.274C13.1321 3.99798 12.9942 4.04756 12.8861 4.13952C12.7779 4.23148 12.7068 4.35957 12.686 4.5L12.23 7.68C11.5069 7.9855 10.8257 8.38203 10.203 8.86L7.215 7.66C7.08196 7.60687 6.93406 7.6044 6.79932 7.65306C6.66459 7.70172 6.55239 7.79813 6.484 7.924L4.084 12.076C4.01021 12.1996 3.98412 12.3458 4.01064 12.4873C4.03716 12.6287 4.11446 12.7556 4.228 12.844L6.762 14.824C6.7084 15.2138 6.67901 15.6066 6.674 16C6.67853 16.3935 6.70792 16.7862 6.762 17.176L4.231 19.156C4.12024 19.2464 4.04504 19.3731 4.01869 19.5137C3.99234 19.6542 4.01653 19.7996 4.087 19.924L6.487 24.076C6.55771 24.1996 6.67006 24.294 6.80398 24.3424C6.93789 24.3907 7.08464 24.3899 7.218 24.34L10.206 23.14C10.8262 23.6207 11.5079 24.0162 12.233 24.316L12.686 27.5C12.7066 27.6405 12.7776 27.7687 12.8858 27.8607C12.994 27.9527 13.132 28.0022 13.274 28H18.074C18.2159 28.002 18.3538 27.9524 18.4619 27.8605C18.5701 27.7685 18.6412 27.6404 18.662 27.5L19.118 24.32C19.8409 24.0158 20.5221 23.6206 21.145 23.144L24.133 24.344C24.266 24.3971 24.4139 24.3996 24.5487 24.3509C24.6834 24.3023 24.7956 24.2059 24.864 24.08L27.264 19.928C27.3357 19.8039 27.3606 19.6582 27.3342 19.5173C27.3077 19.3765 27.2318 19.2497 27.12 19.16L24.589 17.18L24.59 17.175ZM15.675 20.2C14.8443 20.2 14.0323 19.9537 13.3416 19.4922C12.6509 19.0307 12.1126 18.3747 11.7947 17.6073C11.4768 16.8398 11.3936 15.9953 11.5557 15.1806C11.7178 14.3659 12.1178 13.6175 12.7052 13.0302C13.2925 12.4428 14.0409 12.0428 14.8556 11.8807C15.6703 11.7186 16.5148 11.8018 17.2823 12.1197C18.0497 12.4376 18.7057 12.9759 19.1672 13.6666C19.6287 14.3573 19.875 15.1693 19.875 16C19.875 17.1139 19.4325 18.1822 18.6448 18.9698C17.8572 19.7575 16.7889 20.2 15.675 20.2Z" />
    </SvgIcon>
  );
};
