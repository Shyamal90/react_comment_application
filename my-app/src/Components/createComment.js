export const createComment = (text,parentId = null) => {
    return {
        id : Math.random().toString(36).substring(2,9),
        author: "Shyamal",
        body: text,
        timestamp: new Date().toISOString(),
        points: "3",
        replyId:"1",
        parentReplyId:parentId,
        replies:[]
    }
}
/*
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

*/