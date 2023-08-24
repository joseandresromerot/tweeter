import { Timeline } from "./types";

export const timeline: Timeline = {
  totalItems: 2,
  totalPages: 1,
  currentPage: 1,
  tweets: [
    {
      id: "1",
      user: {
        id: "1",
        fullname: "Peyton Lyons",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      },
      datetime: 1692809270,
      message: "This is a new tweet posted using the Tweeter app. We are testing this app right now.",
      pictureUrl: "https://img.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg?w=2000",
      retweetedByMe: true,
      likedByMe: true,
      savedByMe: true,
      numberOfComments: 2,
      numberOfRetweets: 59120,
      numberOfSaved: 234,
      retweetedBy: {
        id: "2",
        fullname: "Daniel Jensen"
      },
      comments: [
        {
          id: "1",
          user: {
            id: "1",
            fullname: "Peyton Lyons",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          },
          datetime: 1692809270,
          message: "First comment :)",
          pictureUrl: null,
          numberOfLikes: 12000,
          likedByMe: true
        },
        {
          id: "3",
          user: {
            id: "1",
            fullname: "Peyton Lyons",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          },
          datetime: 1692809270,
          message: "Another comment :)",
          pictureUrl: null,
          numberOfLikes: 10,
          likedByMe: true
        }
      ]
    },

    {
      id: "2",
      user: {
        id: "1",
        fullname: "Peyton Lyons",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      },
      datetime: 1692810866,
      message: "My second tweet",
      pictureUrl: "https://www.shutterstock.com/shutterstock/photos/2170090439/display_1500/stock-photo-summer-landscape-in-forest-with-beautiful-lake-amazing-lake-landscape-colorful-nature-scenery-2170090439.jpg",
      retweetedByMe: false,
      likedByMe: false,
      savedByMe: false,
      numberOfComments: 1,
      numberOfRetweets: 59340,
      numberOfSaved: 234,
      retweetedBy: null,
      comments: [
        {
          id: "1",
          user: {
            id: "1",
            fullname: "Peyton Lyons",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          },
          datetime: 1692810866,
          message: "Second comment :)",
          pictureUrl: null,
          numberOfLikes: 12000,
          likedByMe: false
        }
      ]
    }
  ]
};