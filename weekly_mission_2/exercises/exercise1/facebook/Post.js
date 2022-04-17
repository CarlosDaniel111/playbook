const post = {
    id: "892741923",
    author: "Carlos Daniel",
    description: "Este es mi post",
    postAudience: "Public",
    likes: 20,
    comments: 2,
    share: 0,
    dateCreated: "15-04-2022",
    getGeneralInfo: function(){
        return `Post: ${this.id} was created by ${this.author} with the description: ${this.description}`
    }
}

console.log(post.getGeneralInfo())