import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItemsData = [
    {
        key: 1,
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        key: 2,
        icon: <InboxIcon />,
        text: "All DMs"
    },
    {
        key: 3,
        icon: <DraftsIcon />,
        text: "Mentions & Reactions"
    },
    {
        key: 4,
        icon: <BookmarkBorderIcon />,
        text: "Save Items"
    },
    {
        key: 5,
        icon: <PeopleIcon />,
        text: "Peoples & Groups"
    },
    {
        key: 6,
        icon: <AppsIcon />,
        text: "More"
    },
]
