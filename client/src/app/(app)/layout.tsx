import { faHouse, faCompass, faBookmark } from "@fortawesome/free-solid-svg-icons";
import BottomNavbar from "@/components/layout/BottomNavbar";
import TopNavbar from "@/components/layout/TopNavbar";

const MENU = [
  {
    url: "/home",
    icon: faHouse,
    label: "Home"
  },
  {
    url: "/explore",
    icon: faCompass,
    label: "Explore"
  },
  {
    url: "/bookmarks",
    icon: faBookmark,
    label: "Bookmarks"
  }
];

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <TopNavbar options={MENU} />
      <main>
        {children}
      </main>
      <BottomNavbar options={MENU} />
    </div>
    
  )
}
