// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

let fetchGreeting = ()=>{
    return setTimeout(() =>{
        console.log("Welcome to our classroom!");
    },2000);
};
fetchGreeting();

// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask(){
    console.log("Task started");

    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}

simulateTask();

// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

fetchData().then((data) => {
    console.log(data);
});

// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random() * 10 + 1;
      if (randomNum < 5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data fetch failed!");
      }
    }, 1000);
  });
}

fetchWithError()
.then((success) => {
    console.log(success);
})
.catch((failed)=>{
    console.log(failed);
});

// Question # 5
// Write a function executeSequentially that executes two functions fetchData and 
// processData sequentially using Promises, and logs the results in the order they are 
// called.

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processedData = `Processed: ${data}`;
            resolve(processedData);
        }, 1000);
    });
}
async function executeSequentially(): Promise<void> {
    try{
        const fetchedData = await fetchData();
        console.log(fetchedData);

        const processedData = await processData(fetchedData);
        console.log(processedData); 
    } catch (error){
        console.log("Error occurred:", error);
    }
}

executeSequentially();



