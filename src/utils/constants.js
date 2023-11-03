const API_KEY = "AIzaSyD-f1F9nNOe6l9oIOEw1axaBxbM2KkeLMo";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  API_KEY;

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "Shivang Tripathi",
    text: "Thankful for whoever left , whoever stayed and whoever is here right now !",
    replies: [
      {
        name: "Shivang Tripathi",
        text: "To the family , Sometimes they are shelter from the storm",
        replies: [
          {
            name: "Shivang Tripathi",
            text: "And sometimes they are storm themselves",
            replies: [
              {
                name: "Shivang",
                text: "You gotta be the best , leave behind everyone",
                replies: [
                  {
                    name: "Beast",
                    text: "even the god is with you in this battle",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Shivang Tripathi",
        text: "To the family , Sometimes they are shelter from the storm",
        replies: [
          {
            name: "Shivang Tripathi",
            text: "And sometimes they are storm themselves",
            replies: [
              {
                name: "Shivang",
                text: "You gotta be the best , leave behind everyone",
                replies: [
                  {
                    name: "Beast",
                    text: "even the god is with you in this battle",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Naruto Uzumaki",
    text: "Uzumaki Naruto , thats my ninja way",
    replies: [
      {
        name: "Hinata",
        text: "Naruto kun",
        replies: [
          {
            name: "Sasuke",
            text: "Team 7",
          },
        ],
      },
    ],
  },
  {
    name: "Jiraiya",
    text: "Pervy sage is back",
    replies: [
      {
        name: "Minato Namikaze",
        text: "yellow flash of the leave",
        replies: [
          {
            name: "Itachi Uchiha",
            text: "Is there a meaning to life ? None, exactly !",
          },
        ],
      },
    ],
  },
];
