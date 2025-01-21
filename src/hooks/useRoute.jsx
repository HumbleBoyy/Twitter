import {Bookmarks, Explore, Home, Lists, Messages, More, NotFound, Notifications, Profile} from "../Pages/Dashboard/pages"
import { PATH } from '../hooks/usePath.jsx'
import {Likes, Media, Tweets, TweetsReplies} from "../Pages/Dashboard/NestedPages"
import { Login, Register } from "../Pages/Registiration"
import { HomeIcon, ExploreIcon, NotificationIcon, MessagesIcon, BookmarksIcon, ListIcon, ProfileIcon, MoreIcon} from "../assets/Logos/icons.jsx"
import { BsThreeDots } from "react-icons/bs"
import angela from "../../src/assets/Images/angela.png"
import johnny from "../../src/assets/Images/johnny.png"
import avatarDefault from "../assets/Images/emptyAvatar.jpg"
// Dashboard List data collaction
export  const dashboardRouteList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        children:[]
    },
    {
        id:2,
        path:PATH.explore,
        element:<Explore/>,
        children:[]
    },
    {
        id:3,
        path:PATH.notification,
        element:<Notifications/>,
        children:[]
    },
    {
        id:4,
        path:PATH.messages,
        element:<Messages/>,
        children:[]
    },
    {
        id:5,
        path:PATH.bookmarks,
        element:<Bookmarks/>,
        children:[]
    },
    {
        id:6,
        path:PATH.lists,
        element:<Lists/>,
        children:[]
    },
    {
        id:7,
        path:PATH.profile,
        element:<Profile/>,
        children:[
            {
                id:9,
                path:PATH.profileTweets,
                element:<Tweets/>,
                children:[]
            },
            {
                id:10,
                path:PATH.profileTweetsReplies,
                element:<TweetsReplies/>,
                children:[]
            },
            {
                id:11,
                path:PATH.profileMedia,
                element:<Media/>,
                children:[]
            },
            {
                id:12,
                path:PATH.profileLikes,
                element:<Likes/>,
                children:[]
            }
        ]
    },
    {
        id:8,
        path:PATH.more,
        element:<More/>,
        children:[]
    },
    {
        id:9,
        path:PATH.notFound,
        element:<NotFound/>,
        children:[]
    }
]

// Register List data collaction
export const registirationRoutes = [
    {
        id:1,
        path:PATH.home,
        element:<Login/>,
        children:[]
    },
    {
        id:1,
        path:PATH.register,
        element:<Register/>,
        children:[]
    },
]

// Navbar List data collaction
export const navbarList = [
    {
        id:1,
        title:"Home",
        path:PATH.home,
        icon:<HomeIcon active={false}/>,
        activeIcon:<HomeIcon active={true}/>
    },
    {
        id:2,
        title:"Explore",
        path:PATH.explore,
        icon:<ExploreIcon active={false}/>,
        activeIcon:<ExploreIcon active={true}/>,
    },
    {
        id:3,
        title:"Notifications",
        path:PATH.notification,
        icon:<NotificationIcon active={false}/>,
        activeIcon:<NotificationIcon active={true}/>,
    },
    {
        id:4,
        title:"Messages",
        path:PATH.messages,
        icon:<MessagesIcon active={false}/>,
        activeIcon:<MessagesIcon active={true}/>,
    },
    {
        id:5,
        title:"Bookmarks",
        path:PATH.bookmarks,
        icon:<BookmarksIcon active={false}/>,
        activeIcon:<BookmarksIcon active={true}/>,
    },
    {
        id:6,
        title:"Lists",
        path:PATH.lists,
        icon:<ListIcon active={false}/>,
        activeIcon:<ListIcon active={true}/>,
    },
    {
        id:7,
        title:"Profile",
        path:PATH.profile,
        icon:<ProfileIcon active={false}/>,
        activeIcon:<ProfileIcon active={true}/>,
    },
    {
        id:8,
        title:"More",
        path:PATH.more,
        icon:<MoreIcon active={false}/>,
        activeIcon:<MoreIcon active={true}/>,
    },
]


// Trends List data collaction
export const trendsList = [
    {
        id:1,
        secondaryTitle:"Revolution",
        mainTitle:"Trending in Uzbekistan",
        tweetCount:270.4,
        moreIcon:<BsThreeDots />
    },
    {
        id:2,
        secondaryTitle:"Revolution",
        mainTitle:"Trending in USA",
        tweetCount:150.4,
        moreIcon:<BsThreeDots />
    },
    {
        id:3,
        secondaryTitle:"Revolution",
        mainTitle:"Trending in Turkiye",
        tweetCount:80.4,
        moreIcon:<BsThreeDots />
    },
    {
        id:4,
        secondaryTitle:"Revolution",
        mainTitle:"Trending in Kazakhstan",
        tweetCount:80.4,
        moreIcon:<BsThreeDots />
    },
    {
        id:5,
        secondaryTitle:"Revolution",
        mainTitle:"Trending in Middle East",
        tweetCount:20.4,
        moreIcon:<BsThreeDots />
    },
    {
        id:6,
        secondaryTitle:"Revolution",
        mainTitle:"Trending in China",
        tweetCount:810.4,
        moreIcon:<BsThreeDots />
    },
]

// Suggestions List data collaction
export const suggestionsList = [
    {
        id:1,
        name:"Angela",
        userName:"angela_06",
        avatarImage:angela
    },
    {
        id:2,
        name:"Johnny",
        userName:"johnny_02",
        avatarImage:johnny
    },
    {
        id:2,
        name:"Jerry",
        userName:"jerry_01",
        avatarImage:avatarDefault
    },
]