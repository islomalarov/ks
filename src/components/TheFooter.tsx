import { Send } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const TheFooter: FunctionComponent = () => {
  return (
    <footer className="bg-black text-white h-auto">
      <div className="max-w-5xl mx-auto px-4 py-4 h-full flex flex-wrap gap-5 justify-center sm:justify-between items-center text-xl">
        <div>
          <p className=" text-gray-400"> &copy; 2024 Kompyuter Savodxonligi</p>
        </div>

        <div>
          <div className="flex items-center space-x-4">
            {/* <Link href="">
              <Facebook className="text-gray-400 hover:text-white" />
            </Link> */}
            <Link
              href="https://t.me/ks_kursi"
              target="_blank"
              className="flex items-center gap-3 text-gray-400 hover:text-white">
              <Send />
              <p>Videokursimiz kanali</p>
            </Link>
            {/* <Link href="">
              <Youtube className="text-gray-400 hover:text-white" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
