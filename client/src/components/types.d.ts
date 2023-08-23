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

interface ReplyType {
  key: string
  label: string
  icon: IconProp
}

interface WhoCanReplyPopupProps {
  buttons: ReplyType[]
  onChange: (key: string) => void
}

interface WhoCanReplyPopupButtonProps extends ReplyType {
  onClick: () => void
}