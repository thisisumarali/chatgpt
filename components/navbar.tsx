
import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./mobileSidebar";
import { ModeToggle } from "./Modetoggle";
export const Navbar = () => {
    return (
        <>
            <div className="flex items-center p-4">
                <MobileSidebar />
                <div className="flex w-full justify-end gap-x-2 items-center">
                    <ModeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </>
    );
};
export default Navbar