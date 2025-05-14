import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
return(
    <nav>
        <Link href='/' className="flex items-center gap-2">
        <Image width={38} height={32} alt="logo" src='/logo.svg'></Image>
        <h2 className="text-primary-100">TrainInternview</h2>
        </Link>
    </nav>
)
}