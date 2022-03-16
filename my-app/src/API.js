export const data = [
    {
        id: "001",
        author: "albert",
        body: "Whats the status?",
        timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
        points: "2",
        replyId:"1",
        parentReplyId: null,
        replies: [
          {
            id: "003",
            author: "haren",
            body: "Wrote the test suites, waiting for approval?",
            timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
            points: "3",
            replyId : "1",
            parentReplyId: "001",
            replies: [
              {
                id: "004",
                author: "albert",
                body: "Thanks for the update!",
                timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
                points: "8",
                replyId: "1",
                parentReplyId : "003"
              }
            ]
          },
          {
            id: "002",
            author: "Nrupul",
            body: "looking forward for the demo!",
            timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
            points: "2",
            replyId : "2",
            parentReplyId: "001"
          }
        ]
    },
    {
      id: "002",
      author: "albert",
      body: "This is awesome picture",
      timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
      points: "2",
      replyId:"1",
      parentReplyId: null,
      replies: [],
    }
]