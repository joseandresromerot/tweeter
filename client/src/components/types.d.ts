interface NavbarOption {
  url: string
  icon: IconProp
  label: string
}

interface BottomNavbarProps {
  options: NavbarOption[]
};

interface TopNavbarProps {
  options: NavbarOption[]
};

interface UserPopupProps {
  children: React.ReactNode
}

interface UserPopupLinkProps {
  href: string
  label: string
  icon: IconProp
}