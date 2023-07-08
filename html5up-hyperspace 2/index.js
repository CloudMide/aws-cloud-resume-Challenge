// View Counter Code on Resume Challenge
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://6xxtrkxde77ny27ustw34jvsia0yfizg.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data};
}

updateCounter();