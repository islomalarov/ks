import { RefObject } from 'react';

const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};
export default scrollToSection;
