const issue = {
    title: "Live 2 Semana 1",
    repositoryNameAssociated: "semanas",
    status: "Open",
    numberOfComments: 32,
    labels: ["FINALIZADO", "LIVE 2", "Semana-1"],
    author: "CarlosDaniel111",
    dateCreated: "04-10-2022",
    lastUpdated: "04-14-2022",
    getTitleAndAuthor: function() {
        return `Issue: ${this.title} by ${this.author}`
    },
    getGeneralInfo: function() {
        return `This issue ${this.title} was created by ${this.author} on ${this.dateCreated}`
    }
}

console.log(issue.getGeneralInfo())