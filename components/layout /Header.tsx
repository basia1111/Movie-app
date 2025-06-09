import { Search } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import Input from "../ui/Input";

const Header = () => {
  return (
    <div className="header w-screen bg-secondary py-4 md:px-8 px-4 flex justify-between items-center gap-4">
      <Link
        href="/"
        className="header-logo font-sans md:text-2xl text-l font-bold text-brand-primary line-br whitespace-nowrap focus-visible:border-focus/70 focus-visible:ring-focus/20 focus-visible:ring-[3px] focus"
      >
        Movie App
      </Link>
      <div className="header-search flex gap-2">
        <Input placeholder="search..." />
        <Button icon={Search} />
      </div>
    </div>
  );
};

export default Header;
