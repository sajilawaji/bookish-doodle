
//access the button element

//access the button element
const resetBtn = document.getElementById("reset-btn");
// console.log(resetBtn)

//call the onclick
const reset = () => {
    console.log("reset button clicked!");
};

const btn = document.querySelector("#add-comment");
// const yellow = document.querySelector('.yellow-background')
// console.log(btn);

//event listener - we will learn more on this tomorrow
btn.addEventListener("click", () => {
    //   console.log("button clicked!");
    //===== logic goes here =========/
    //create a list item
    const li = document.createElement("li");
    console.log(li);
    //accessed the input element
    const input = document.querySelector("input");
    console.log("this is the text inside of the the input", input.value);

    //set the li item text context to the input's value
    li.textContent = input.value;

    //append list item to the ul (as a child)
    document.querySelector("ul").appendChild(li);

    changeColor(li)
});


const changeColor = (li) => {
    console.log(li)
}