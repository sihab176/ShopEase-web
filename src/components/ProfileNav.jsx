import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaUser } from "react-icons/fa";
export default function ProfileNav() {
  return (
    <DropdownMenu.Root>
      {/* Trigger */}
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-3 text-sm shadow-sm hover:bg-gray-50">
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

          <DropdownMenu.Item
            className="cursor-pointer rounded-md px-2 py-2 text-sm outline-none data-[highlighted]:bg-gray-100"
            onSelect={() => console.log("Storefront")}
          >
            Storefront
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="cursor-pointer rounded-md px-2 py-2 text-sm outline-none data-[highlighted]:bg-gray-100"
            onSelect={() => console.log("Warehouse")}
          >
            Warehouse
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="cursor-pointer rounded-md px-2 py-2 text-sm outline-none data-[highlighted]:bg-gray-100"
            onSelect={() => console.log("Stock")}
          >
            Stock
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />

          <DropdownMenu.Label className="px-2 py-1 text-xs text-gray-400">
            Actions
          </DropdownMenu.Label>

          <DropdownMenu.Item
            onSelect={(e) => {
              // ডিফল্ট সিলেক্ট-আউটকাম বন্ধ করতে চাইলে:
              // e.preventDefault();
              alert("Deleted");
            }}
            className="cursor-pointer rounded-md px-2 py-2 text-sm text-red-600 outline-none data-[highlighted]:bg-red-50"
          >
            <span className="flex items-center">**** Delete</span>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
