let dataTweet = [];
class Tweet {
  constructor(username, tweet) {
    (this.username = username),
      (this.tweet = tweet)
     
  }
}
const btnSubmit = document.querySelector('#submit');
let _username = document.getElementById("username");
let _tweet = document.getElementById("newtweet");

function addNewTweet() {
  let username = _username.value
  let tweet = _tweet.value
  console.log(dataTweet)
  let newTweet = new Tweet(username, tweet );
  dataTweet.unshift(newTweet);
  let newtweet = document.getElementById("content-newtweet")

  clearLibrary(newtweet);
  createNewTweet();

}
function createNewTweet () {
  for (let i = 0; i < dataTweet.length; i++) {
    let newtweet = document.getElementById("content-newtweet");
    let newfeed = document.createElement("div");
    newfeed.classList.add("newsfeed");
    const container =document.createElement("div");
    container.classList.add("container");
    newfeed.appendChild(container);
    newtweet.appendChild(newfeed);

    let newUserName = document.createElement("h2");
    newUserName.textContent = `${dataTweet[i]["username"]}`;
    container.appendChild(newUserName);

   let contentNewTweet = document.createElement("p");
    contentNewTweet.textContent = `${dataTweet[i]["tweet"]}`;
    container.appendChild(contentNewTweet);

 const btntweet = document.createElement("div");
    btntweet.classList.add("icon-tweet");
    const ico1 = document.createElement("i");
    ico1.classList.add(`${dataTweet[i]["like"]}`);
    ico1.classList.add("fa-heart");
    btntweet.appendChild(ico1);
    const ico2 = document.createElement("i");
    ico2.classList.add(`${dataTweet[i]["retweet"]}`);
    ico2.classList.add("fa-retweet");
    btntweet.appendChild(ico2);
    container.appendChild(btntweet);
  }
}
btnSubmit.addEventListener("click",(e)=>{
  e.preventDefault()
  addNewTweet()
}) ;


function clearLibrary(newtweet) {
  while (newtweet.firstChild) {
    newtweet.removeChild(newtweet.firstChild);
  }
}



































