import FirstComment from '../../assets/Svg/firstComment'
import SecondComment from '../../assets/Svg/secondComent'
import ThirdComment from '../../assets/Svg/thirdComment'
import ChatImg from '../../assets/Svg/chatImg'

export const commentData = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
        svgImg: <FirstComment />,
        name: "Kate Tanner",
        likes: '2,245'
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
        svgImg: <SecondComment />,
        name: "Devon Miles",
        likes: '0'

    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
        svgImg: <ThirdComment />,
        name: "Devon Miles",
        likes: '2,245'

    }
]


export const categoryList = [
    {
        id: 1,
        title: "Category 1",
        Description: "Lorem ipsum dolor sit amet consectetur. Vel sed auctor lorem rhoncus semper non. Posuere velit.",
    },
    {
        id: 2,
        title: "Category 2",
        Description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        id: 3,
        title: "Category 3",
        Description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        id: 4,
        title: "Category 4",
        Description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        id: 5,
        title: "Category 5",
        Description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        id: 6,
        title: "Category 6",
        Description: "Lorem ipsum dolor sit amet consectetur.",
    }

]


export const notificationsList = [
    {
        dateTitle: 'Today',
        notifications: [
            {
                id: 1,
                message: 'Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet...',
                svgImg: <FirstComment />,
                name: "Kate Tanner",
                time: '10:00 AM',
            },
            {
                id: 2,
                message: 'Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet...',
                svgImg: <SecondComment />,
                name: "Devon Miles",
                time: '11:00 AM',
            },
            {
                id: 3,
                message: 'Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet...',
                svgImg: <ThirdComment />,
                name: "Devon Miles",
                time: '12:00 PM',
            },
        ],
    },
    {
        dateTitle: 'Yesterday',
        notifications: [
            {
                id: 4,
                message: 'Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet...',
                svgImg: <FirstComment />,
                name: "Peter Thornton",
                time: '09:00 AM',
            },
            {
                id: 5,
                message: 'Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet...',
                svgImg: <SecondComment />,
                name: "Mike Torello",
                time: '10:30 AM',
            },
            {
                id: 6,
                message: 'Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet...',
                svgImg: <ThirdComment />,
                name: "Rick Wright",
                time: '12:45 PM',
            },
            {
                id: 7,
                message: 'Lorem ipsum dolor sit amet consectetur. Montes nec nam varius amet...',
                time: '02:00 PM',
                svgImg: <FirstComment />,
                name: "Willie Tanner",


            },
        ],
    },
];


export const filters = [
    {
        title: "All",
        id: 1,
    },
    {
        title: "Date",
        id: 2,
    },
    {
        title: "Flake",
        id: 3,
    },
    {
        title: "Confidence Test",
        id: 4,
    },
    {
        title: "Confidence",
        id: 5,
    },
]

export const ChallengesList = [
    {
        id: 1,
        title: 'The Compliment Dare',
        catNo: 1,
        description: "Approach someone and give them a genuine, specific compliment. This challenge helps you practice giving compliments confidently and observing how they make the other person feel."
    },
    {
        id: 2,
        title: 'The Fun Fact Opener',
        catNo: 2,
        description: "Approach someone and give them a genuine, specific compliment. This challenge helps you practice giving compliments confidently and observing how they make the other person feel."
    },
    {
        id: 3,
        title: 'The Availability Check',
        catNo: 3,
        description: "Approach someone and give them a genuine, specific compliment. This challenge helps you practice giving compliments confidently and observing how they make the other person feel."
    },
    {
        id: 4,
        title: 'The Follow-Up Plan',
        catNo: 4,
        description: "Approach someone and give them a genuine, specific compliment. This challenge helps you practice giving compliments confidently and observing how they make the other person feel."
    }
]


export const chatData =[
    {
        userId:1,
        svgImg:<ChatImg/>,
        text:"Hi there! I just wanted to say I Love"
    },
    {
        userId:2,
        text:"Oh, thank you so much! That’s really kind of you. I appreciate it!"
    },
    {
        userId:1,
        svgImg:<ChatImg/>,
        text:"By the way Whats Something?"
    },
    {
        userId:2,
        text:"I started a new hobby—photography. It’s been really fun. How about you?"
    },
    {
        userId:1,
        svgImg:<ChatImg/>,
        text:"By the way Whats Something?"
    },
]

export const reviewData =[
    {
        userId:1,
        svgImg:<ChatImg/>,
        text:"Hi there! I just wanted to say I love your outfit. You have a great sense of style!",
    },
    {
        userId:2,
        text:"Oh, thank you so much! That’s really kind of you. I appreciate it!",
        emoji:"😎 Intelligent!"
      

    },
    {
        userId:1,
        svgImg:<ChatImg/>,
        text:"By the way Whats Something?"
    },
    {
        userId:2,
        text:"I started a new hobby—photography. It’s been really fun. How about you?",
        emoji:"😎 Excellent!"
    },
    {
        userId:1,
        svgImg:<ChatImg/>,
        text:"By the way Whats Something?"
    },
]