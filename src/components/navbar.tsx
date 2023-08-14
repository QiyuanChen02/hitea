import { useRouter } from "next/router";
import { useCartStore } from "~/hooks/useCart";
import IconButton from "./iconbutton";

// Returns a <Navbar> component
const Navbar = () => {
  const router = useRouter();
  const { items } = useCartStore();

  return (
    <nav className="flex h-20 w-full items-center bg-pink-400 px-4 md:h-24 md:px-6">
      <div className="flex w-full items-center justify-between">
        <IconButton
          imageSrc="hitea-logo.png"
          altText="Hi Tea"
          onClick={() => void router.push("/")}
          fill
          sizes="64px"
          spacing={0}
          extraClasses="rounded-full hover:brightness-110 w-12 h-12 md:w-16 md:h-16"
        />
        <div className="flex gap-1">
          <IconButton
            imageSrc="trolley.svg"
            altText="Go To Cart"
            onClick={() => void router.push("/checkout")}
            spacing={10}
            width={32}
            height={32}
            text={`Cart ${items.length}`}
            extraClasses="hover:bg-pink-300 rounded-full border border-2 border-black"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
