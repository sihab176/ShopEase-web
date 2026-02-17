import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
export default function ProfileNav({ session }) {
  // console.log("new", session);

  const handleSingOut = () => {
    signOut();
    toast.success("Successfully Logout");
  };

  return (
    <DropdownMenu.Root>
      {/* Trigger */}
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-3 text-sm shadow-sm hover:bg-gray-50">
          <FaUser />
        </button>
      </DropdownMenu.Trigger>

      {/* Menu */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="w-48 rounded-md bg-white p-1 shadow-lg ring-1 ring-black/5"
        >
          <DropdownMenu.Label className="px-2 py-1 text-xs text-gray-400">
            General
          </DropdownMenu.Label>

          {/* <Link href="/login">
            <DropdownMenu.Item className="cursor-pointer rounded-md px-2 py-2 text-sm outline-none data-[highlighted]:bg-gray-100">
              Profile
            </DropdownMenu.Item>
          </Link> */}

          <DropdownMenu.Item className="cursor-pointer rounded-md px-2 py-2 text-sm outline-none data-[highlighted]:bg-gray-100">
            {session?.user?.name}
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="cursor-pointer rounded-md px-2 py-2 text-sm outline-none data-[highlighted]:bg-gray-100  truncate"
            onSelect={() => console.log("Stock")}
          >
            {session?.user?.email}
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />

          <DropdownMenu.Label className="px-2 py-1 text-xs text-gray-400">
            Actions
          </DropdownMenu.Label>

          <DropdownMenu.Item
            onClick={() => handleSingOut()}
            className="cursor-pointer rounded-md px-2 py-2 text-sm text-red-600 outline-none data-[highlighted]:bg-red-50"
          >
            <span className="flex items-center">Logout</span>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
