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
  const { showDrawer, hideDrawer, drawerOpen } = useDrawerStore();
  const { status } = useSession();
  const domLoaded = useDomLoaded();
  const [isAdmin] = useAdmin();

  const goToPage = (page: string) => {
    void router.push(page);
    hideDrawer();
  };

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
          extraClasses="w-8 h-8 md:w-12 md:h-12 md:hidden"
        />
        <IconButton
          imageSrc="hitea-logo.png"
          altText="Hi Tea"
          onClick={() => goToPage("/")}
          fill
          sizes="64px"
          spacing={0}
          extraClasses="rounded-full hover:brightness-110 w-12 h-12 md:w-16 md:h-16"
        />
        <div className="hidden gap-6 md:flex">
          <Link href="/">
            <p className="font-medium hover:text-gray-700">Menu</p>
          </Link>
          {status === "authenticated" ? (
            <>
              <Link href="/myorders">
                <p className="font-medium hover:text-gray-700">My Orders</p>
              </Link>
              {isAdmin && (
                <Link href="/admin">
                  <p className="font-medium hover:text-gray-700">Admin</p>
                </Link>
              )}
            </>
          ) : (
            <button onClick={() => void signIn("auth0")}>
              <p className="font-medium hover:text-gray-700">Login</p>
            </button>
          )}
        </div>
        <div className="flex gap-1">
          {domLoaded && (
            <IconButton
              imageSrc="icons/trolley.svg"
              altText="Go To Cart"
              onClick={() => goToPage("/checkout")}
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
                className="p-3 font-medium hover:bg-gray-100"
                onClick={() => goToPage("/")}
              >
                Menu
              </button>
              <button
                className="p-3 font-medium hover:bg-gray-100"
                onClick={() => goToPage("/myorders")}
              >
                My Orders
              </button>
              {isAdmin && (
                <button
                  className="p-3 font-medium hover:bg-gray-100"
                  onClick={() => goToPage("/admin")}
                >
                  Admin Page
                </button>
              )}
              <button
                className="p-3 font-medium hover:bg-gray-100"
                onClick={() => void signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="p-3 font-medium hover:bg-gray-100"
              onClick={() => void signIn("auth0")}
            >
              Sign In
            </button>
          )}
        </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
