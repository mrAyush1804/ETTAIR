import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center space-x-2 shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={32} height={32} />    
        <span className="text-white font-semibold text-lg">ETTAIR</span>

    </Link>
  );
}
