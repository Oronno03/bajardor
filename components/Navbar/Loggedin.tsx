import { StripEmptyObjects } from "better-auth";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";


const handleLogout = async () => {
    await authClient.signOut({}, {
        onRequest: () => {
            toast.info("সাইন আউট হচ্ছে");
        },
        onSuccess: () => {
            toast.success("সাইন আউট সফল হয়েছে")
        }
    })
}

const Loggedin = ({
  session,
}: {
  session: {
    user: StripEmptyObjects<{
      id: string;
      createdAt: Date;
      updatedAt: Date;
      email: string;
      emailVerified: boolean;
      name: string;
      image?: string | null | undefined;
    }>;
    session: StripEmptyObjects<{
      id: string;
      createdAt: Date;
      updatedAt: Date;
      userId: string;
      expiresAt: Date;
      token: string;
      ipAddress?: string | null | undefined;
      userAgent?: string | null | undefined;
    }>;
  };
}) => {
  const { user } = session;
  if (!user) return;

  return (
    <div className="flex gap-3 items-center">
      {user.image ? (
        <Image
          src={user.image as string}
          height={40}
          width={40}
          alt="User PFP"
        />
      ) : (
        <div className="bg-primary w-10 h-10 flex items-center justify-center text-white font-bold rounded-full">
          {user.name.charAt(0)}
        </div>
      )}
      <h1>স্বাগতম, {user.name}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger className={"cursor-pointer"}>▼</DropdownMenuTrigger>
        <DropdownMenuContent className={"bg-white"}>
          <DropdownMenuGroup>
            <DropdownMenuLabel>আমার একাউন্ট</DropdownMenuLabel>
            <DropdownMenuItem>
                <Link href={"/profile"} className="flex gap-2"><CgProfile /> প্রোফাইল</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <button onClick={handleLogout} className="flex gap-2 cursor-pointer"><MdLogout /> লগআউট</button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Loggedin;
