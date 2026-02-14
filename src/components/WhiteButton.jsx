import Link from "next/link";
import { Play } from "lucide-react";

function WhiteButton({ linkurl, text, linktarget, MoveRighticon }) {
    return (
        <Link
            href={linkurl}
            target={linktarget}
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-black bg-white border border-[#DBDBDB] rounded-[6px] px-[35px] xl:px-[35px] lg:px-[28px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-white transition-transform hover:scale-104"
            >
            {text}

            {MoveRighticon && (
                <span>
                <Play width={20} />
                </span>
            )}
        </Link>
    )
}

export default WhiteButton;