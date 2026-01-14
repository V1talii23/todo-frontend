// import Menu from "../Menu/Menu";
// import SearchBox from "../SearchBox/SearchBox";

// export default function Header() {
//   return (
//     <div className="flex items-center justify-between p-2 gap-16">
//       <Menu />
//       <SearchBox />
//     </div>
//   );
// }
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu className="p-1">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/tasks">Tasks</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
