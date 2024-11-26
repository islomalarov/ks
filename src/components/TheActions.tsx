import Link from 'next/link';
import { ModeToggle } from './ui/theme-toggle';
import { CircleX, Menu } from 'lucide-react';
interface TheActionsProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const TheActions = ({ openMenu, setOpenMenu }: TheActionsProps) => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://t.me/wmteam95"
        target="_blank"
        className="hidden lg:flex bg-blue-600 text-white text-center rounded-lg shadow-lg py-1 px-3 ">
        O&apos;rganishni boshlash!
      </Link>
      <ModeToggle />
      <div className="lg:hidden z-10">
        {openMenu ? (
          <CircleX onClick={() => setOpenMenu(!openMenu)} size={30} />
        ) : (
          <Menu onClick={() => setOpenMenu(!openMenu)} size={30} />
        )}
      </div>
    </div>
  );
};
export default TheActions;
