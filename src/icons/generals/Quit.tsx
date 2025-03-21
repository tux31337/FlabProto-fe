import { IconProps, defaultIconSize, defaultIconColor } from '../constants';
import { SvgIcon } from '../SvgIcon';

export const Quit = ({
  size = defaultIconSize,
  color = defaultIconColor,
  className = '',
}: IconProps) => {
  return (
    <SvgIcon size={size} color={color} className={className}>
      <path d="M16 28C13.8948 28.0063 11.8252 27.457 10.0002 26.4075C8.17524 25.3581 6.65948 23.8457 5.606 22.023C4.53979 20.1959 3.98505 18.1154 4 16C3.99106 13.0351 5.0952 10.1748 7.094 7.985C7.14067 7.93767 7.23033 7.844 7.363 7.704C7.49567 7.564 7.60533 7.45067 7.692 7.364C7.79664 7.26519 7.91524 7.1823 8.044 7.118C8.18397 7.04172 8.3406 7.00119 8.5 7C8.69694 6.99809 8.89217 7.03659 9.07363 7.11313C9.25509 7.18967 9.41893 7.30262 9.555 7.445C9.69714 7.58126 9.80993 7.74512 9.88646 7.92654C9.96298 8.10796 10.0016 8.30311 10 8.5C10.0036 8.72143 9.97596 8.94226 9.918 9.156C9.8885 9.29272 9.82832 9.42095 9.742 9.531L9.671 9.648C8.83027 10.47 8.16041 11.4501 7.7 12.532C7.23236 13.6281 6.99414 14.8083 7 16C6.98942 17.5852 7.40638 19.1438 8.207 20.512C8.99235 21.8757 10.1243 23.0077 11.488 23.793C12.8604 24.5834 14.4163 24.9994 16 24.9994C17.5837 24.9994 19.1396 24.5834 20.512 23.793C21.876 23.008 23.008 21.876 23.793 20.512C24.4872 19.3085 24.8936 17.9608 24.9804 16.5741C25.0671 15.1875 24.8318 13.7996 24.293 12.519C23.8375 11.4378 23.1771 10.4551 22.348 9.625C22.0876 9.31086 21.9625 8.90628 22 8.5C22.0057 8.10395 22.1655 7.72571 22.4456 7.44563C22.7257 7.16555 23.1039 7.00569 23.5 7C23.6074 6.99954 23.7143 7.01539 23.817 7.047C23.9013 7.07195 23.9835 7.10337 24.063 7.141C24.1529 7.19255 24.2356 7.25577 24.309 7.329C24.3796 7.39162 24.4464 7.4584 24.509 7.529C24.5403 7.56767 24.6107 7.64967 24.72 7.775C24.8293 7.90033 24.892 7.97067 24.908 7.986C26.4392 9.67401 27.4548 11.7653 27.8348 14.0124C28.2147 16.2595 27.9431 18.5684 27.052 20.666C26.4618 22.0993 25.5936 23.4015 24.4976 24.4976C23.4015 25.5936 22.0993 26.4618 20.666 27.052C19.1915 27.6826 17.6037 28.0051 16 28ZM16 16C15.8023 16.0026 15.6061 15.9655 15.423 15.891C15.2398 15.8165 15.0735 15.7061 14.9337 15.5663C14.7939 15.4266 14.6835 15.2602 14.609 15.077C14.5345 14.8939 14.4974 14.6977 14.5 14.5V5.5C14.4959 5.3009 14.5335 5.10314 14.6103 4.9194C14.6871 4.73567 14.8015 4.56999 14.946 4.433C15.0856 4.29309 15.2519 4.18266 15.435 4.10827C15.6182 4.03389 15.8144 3.99707 16.012 4C16.2079 3.99638 16.4025 4.03293 16.5838 4.1074C16.7651 4.18187 16.9292 4.29268 17.066 4.433C17.2074 4.57177 17.3189 4.73804 17.3935 4.92156C17.4681 5.10507 17.5044 5.30193 17.5 5.5V14.5C17.5026 14.6977 17.4655 14.8939 17.391 15.077C17.3165 15.2602 17.2061 15.4266 17.0663 15.5663C16.9266 15.7061 16.7602 15.8165 16.577 15.891C16.3939 15.9655 16.1977 16.0026 16 16Z" />
    </SvgIcon>
  );
};
