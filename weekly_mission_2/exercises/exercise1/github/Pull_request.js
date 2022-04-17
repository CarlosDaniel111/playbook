const pull_request = {
    title: "Agregando mi blog",
    author: "CarlosDaniel111",
    branchName: "main",
    dateCreated: "04-12-2022",
    status: "Open",
    respositoryNameAssociated: "launch-x-explorers",
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `Pull request: ${this.title} by ${this.author}`
    }
}

console.log(pull_request.getTitleAndAuthor())