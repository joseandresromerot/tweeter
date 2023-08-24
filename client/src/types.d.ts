import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface UserData {
  id: string
  fullname: string
  avatarUrl?: string
}

interface CommentData {
  id: string
  user: UserData
  datetime: number
  message: string
  pictureUrl?: string | null
  numberOfLikes: number
  likedByMe: boolean
}

interface Tweet {
  id: string
  user: UserData
  datetime: number
  message: string
  pictureUrl?: string |null
  retweetedByMe: boolean
  likedByMe: boolean
  savedByMe: boolean
  numberOfComments: number
  numberOfRetweets: number
  numberOfSaved: number
  retweetedBy?: UserData | null
  comments: CommentData[]
}

interface Timeline {
  totalItems: number
  totalPages: number
  currentPage: number
  tweets: Tweet[]
}

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

interface TweetPostProps {
  tweet: Tweet
}

interface TweetPostRetweetedBy {
  retweetedByFullname: string
}

interface TweetPostHeaderProps {
  avatarUrl?: string
  userFullname: string
  datetime: number
}

interface TweetPostPictureProps {
  pictureUrl: string
}

interface TweetPostStatsProps {
  numberOfComments: number
  numberOfRetweets: number
  numberOfSaved: number
}

interface TweetAction {
  label: string
  activeLabel: string
  icon: IconProp,
  activeColor: string
  activeField?: string
  onClick: () => void
}

interface TweetPostActionsProps {
  retweetedByMe: boolean
  likedByMe: boolean
  savedByMe: boolean
}

interface TweetPostActionProps {
  label: string
  activeLabel?: string
  active: boolean
  activeColor?: string
  icon: IconProp
  onClick: () => void
}