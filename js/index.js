// let dataTweet =[];
// class Tweet {
//   constructor(username, tweet) {
//     (this.username = username),
//       (this.tweet = tweet)
//   }
// }
const username = document.getElementById("username");
const tweet = document.getElementById("newtweet");
const btnSubmit = document.querySelector('#submit');
const createTweet = document.getElementById("from")
// const like = document.getElementsByClassName("far");
// const userVal = username.value;
// console.log(userVal);
// const tweetVal = tweet.value;
// console.log(userVal);


// console.log(username, tweet);
// function addNewTweet () {
  
// let username = document.getElementById("username").target.value;
// let tweet = document.getElementById("newtweet").target.value;
// console.log(username,tweet)
//     let newTweet = new Tweet(username, tweet);
//     dataTweet.unshift(newTweet);
//     let newtweet = document.getElementById("content-newtweet")
   

//   clearLibrary(newtweet);  
//   createNewTweet();


//   let inputs = document.querySelectorAll("input");
//   inputs.forEach((input) => (input.value = ""));
// }  
// function createNewTweet () {

//   for (let i = 0; i < dataTweet.length; i++) {
//     let newtweet = document.getElementById("content-newtweet")
//     let newfeed = document.createElement("div");
//     newfeed.classList.add("newsfeed");
//      const container =document.createElement("div");
//     container.classList.add("container");
//     newfeed.appendChild(container);
//     newtweet.appendChild(newfeed);

//     let newUserName = document.createElement("h2");
//     newUserName.textContent = `${username}`;
//     container.appendChild(newUserName);

//    let contentNewTweet = document.createElement("p");
//     contentNewTweet.textContent = `${tweet}`;
//     container.appendChild(contentNewTweet);

//   }
// }
// btnSubmit.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     addNewTweet();
// });


// let tweet1 = new Tweet("Eloquent JavaScript", "Marijn Haverbeke" );
// dataTweet.push(tweet1);
// createNewTweet();


// function clearLibrary(newtweet) {
//   while (newtweet.firstChild) {
//     newtweet.removeChild(newtweet.firstChild);
//   }
// }
const createNewTweet = () => {
  const newfeed = document.createElement("div");
  newfeed.classList.add("newsfeed");
  const container =document.createElement("div");
  container.classList.add("container");
  newfeed.appendChild(container);
  const newUserName = document.createElement("h2");
  let nameVal = username.value;
  console.log(nameVal)
  newUserName.textContent = nameVal;
    container.appendChild(newUserName);
    const newTweeet = document.createElement("div");
    newTweeet.classList.add("tweetfeed");
    container.appendChild(newTweeet);
    const contentNewTweet =document.createElement("p");
    let tweetVal = tweet.value;
    contentNewTweet.textContent = tweetVal;
    newTweeet.appendChild(contentNewTweet);
    const btntweet = document.createElement("div");
    btntweet.classList.add("icon-tweet");
    const ico1 = document.createElement("i");
    ico1.classList.add("far");
    ico1.classList.add("fa-heart");
    btntweet.appendChild(ico1);
     const ico2 = document.createElement("i");
    ico2.classList.add("fas");
    ico2.classList.add("fa-retweet");
    btntweet.appendChild(ico2);
    container.appendChild(btntweet);
    newtweet.appendChild(newfeed);
}

createTweet.addEventListener("submit",(e) => {
    e.preventDefault();

    createNewTweet();
    
})

// const addlike = () => {
//     ico1.classList.remove("far");
//     ico1.classList.add("fas");

// }
// console.log(like)
// like.addEventListener("click",(e)=>{
// e.preventDefault();
// addlike();
// })
// createNewTweet()