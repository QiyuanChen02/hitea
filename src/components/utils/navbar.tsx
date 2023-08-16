import { useRouter } from "next/router";
import { useCartStore } from "~/hooks/zustand/useCart";
import IconButton from "./iconbutton";
import { useDomLoaded } from "~/hooks/utils/useDomLoaded";
import { useDrawerStore } from "~/hooks/zustand/useDrawer";
import Drawer from "./drawer";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useAdmin } from "~/hooks/utils/useAdmin";

// Returns a <Navbar> component
const Navbar = () => {
  const router = useRouter();
  const { items } = useCartStore();
  const { showDrawer, drawerOpen } = useDrawerStore();
  const { status } = useSession();
  const domLoaded = useDomLoaded();
  const isAdmin = useAdmin();

  return (
    <nav className="flex h-20 w-full items-center bg-pink-400 px-4 md:h-24 md:px-6">
      <div className="flex w-full items-center justify-between">
        <IconButton
          imageSrc="icons/menu.svg"
          altText="Open Menu"
          onClick={() => showDrawer()}
          fill
          sizes="64px"
          spacing={0}
          extraClasses="w-8 h-8 md:w-12 md:h-12"
        />
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
          {domLoaded && (
            <IconButton
              imageSrc="icons/trolley.svg"
              altText="Go To Cart"
              onClick={() => void router.push("/checkout")}
              spacing={10}
              width={32}
              height={32}
              text={`${items.length}`}
              extraClasses="hover:bg-pink-300 rounded-full border border-2 border-black"
            />
          )}
        </div>
      </div>
      {drawerOpen && (
        <Drawer>
          {status === "authenticated" ? (
            <>
              <button
                className="p-2"
                onClick={() => void router.push("/myorders")}
              >
                My Orders
              </button>
              {isAdmin && (
                <button
                  className="p-2"
                  onClick={() => void router.push("/admin")}
                >
                  Admin Page
                </button>
              )}
              <button className="p-2" onClick={() => void signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <button className="p-2" onClick={() => void signIn("auth0")}>
              Sign In
            </button>
          )}
        </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
