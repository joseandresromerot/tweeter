interface NavbarOption {
  url: string
  icon: IconProp
  label: string
}

interface BottomNavbarProps {
  options: NavbarOption[]
}

interface TopNavbarProps {
  options: NavbarOption[]
}

interface UserPopupLinkProps {
  href: string
  label: string
  icon: IconProp
}