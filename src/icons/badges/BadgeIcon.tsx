import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Point } from './Point';
import { Star } from './Star';

export enum BadgeIconType {
  star = 'star',
  point = 'point',
  wildSwingWarrior = 'wildSwingWarrior', // this file is not retina compatible
}

export type BadgeIconBaseProps = {
  className?: string;
};

export type BadgeIconProps = {
  iconType: BadgeIconType;
  className?: string;
};

export const BadgeIcon = ({ iconType, className = '' }: BadgeIconProps) => {
  let iconPosition = '';
  if (iconType == BadgeIconType.wildSwingWarrior) {
    iconPosition = 'top-[-2px] left-[-1px]';
  }

  return (
    <div className="relative">
      {iconType === BadgeIconType.star && <Star className={className} />}
      {iconType === BadgeIconType.point && <Point className={className} />}
      {iconType === BadgeIconType.wildSwingWarrior && (
        <Image
          className={cn('absolute', iconPosition, className)}
          width="48"
          height="48"
          src="/icons/badges/wildSwingWarrior.png"
          alt="Wild Swing Warrior"
        />
      )}
    </div>
  );
};
