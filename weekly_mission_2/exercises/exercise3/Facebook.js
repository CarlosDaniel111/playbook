class User{
    constructor(name, gender, birthday, relationship, biography, numberOfFriends, numberOfPosts){
        this.name = name
        this.gender = gender
        this.birthday = birthday
        this.relationship = relationship
        this.biography = biography
        this.numberOfFriends = numberOfFriends
        this.numberOfPosts = numberOfPosts
    }
    getNumberOfFriends(){
        return this.numberOfFriends
    }
}

class Post{
    constructor(id, author, description, postAudience, likes, comments, share, dateCreated){
        this.id = id
        this.author = author
        this.description = description
        this.postAudience = postAudience
        this.likes = likes
        this.comments = comments
        this.share = share
        this.dateCreated = dateCreated
    }
    getGeneralInfo(){
        return `Post: ${this.id} was created by ${this.author} with the description: ${this.description}`
    }
}

console.log("Instancia de User")
const myuser = new User("Carlos Daniel", "Male", "10-30-2003", "Single", "...", 500, 20)
console.log(myuser.getNumberOfFriends())

console.log("\nInstancia de Post")
const post1 = new Post("123455","Carlos Daniel","Este es un post de ejemplo","Public",20,2,0,"04-15-2022")
console.log(post1.getGeneralInfo())