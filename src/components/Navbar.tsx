import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon, MagnifierIcon, USIcon } from "./ui/icons";

const Navbar = () => {
  return (
    <div className="flex shrink-0 py-[30px] px-[40px] bg-white justify-center items-center grow">
      <h1 className="font-semibold text-4xl justify-self-start mr-auto">
        Dashboard
      </h1>
      <div className="bg-[#F9FAFB] rounded-2xl px-6 py-3 flex justify-center items-center gap-2">
        <MagnifierIcon width={24} height={24} />
        <input placeholder="Search here..." className="outline-none" />
      </div>
      <div className="flex gap-6 ml-auto items-center">
        <Select defaultValue="en-us">
          <SelectTrigger className="w-min border-none shadow-none font-semibold text-base">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en-us">
              <USIcon width={24} height={24} />
              Eng(US)
            </SelectItem>
            <SelectItem value="en-ca">Eng(CA)</SelectItem>
            <SelectItem value="en-in">Eng(IN)</SelectItem>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="bg-[#FFFAF1] p-3 rounded-[8px] *:stroke-[#FFA412] relative before:absolute before:top-2 before:right-2 before:w-1.5 before:h-1.5 before:bg-[#EB5757] before:rounded-full">
              <BellIcon width={24} height={24} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <Avatar className="mr-5 h-[60px] w-[60px] *:object-cover">
              <AvatarImage src="https://s3-alpha-sig.figma.com/img/1b73/04b2/85d08c0f8b29f8fc61ad6621680532e7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jLnpXoacqkzTHz2x0ZjatS3U~~XDpFhyE04dEr8RmeXrFqlxp3kaZOxbrCWugm68jA7Bw8L8DDnJozpPGabyNcWjHgZIAm4ABjfvGg5sZdabBG0VMdKl-4Hsqbcr5e7R-06kl9VPZ2ohAmhrNVSGu9rt~g0t1p84aqgoh90c5l8WPTUiaC99G-6AJ7mhECKfd5MH9nOTHO-0pgb4pFx96JlSZiK3tOijmqyhVxUrGxv1-iF9G7Us8-WZJTgdhoagp~8vEAw3T2lZc-s-yXNRODxWhRsVq-5LaIanaZxxSfqYyHheppzjZbhBbMmYNdknVWOoPfHx4H2Qv~8eFVPBAA__" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="font-medium text-md block">Musfiq</span>
              <span className="font-normal text-sm text-[#737791]">Admin</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
