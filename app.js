// Query selectors

ratingNumbers = document.querySelectorAll(".number");
submitBtn = document.querySelector(".submit-button")
rateCard = document.getElementById("rate");
thanksCard = document.getElementById("thank-you");
ratingText = document.querySelector(".rating-number");

console.log(ratingText);

ratingNumbers.forEach(number => {
    number.addEventListener("click", function (event) {

        ratingNumbers.forEach(rating => {
            rating.classList.remove("active");

        })
        event.target.classList.add("active");
        ratingText.textContent = event.target.id

    });
});


submitBtn.addEventListener("click", function () {

    rateCard.style.display = "none";
    thanksCard.style.display = "block";

})

// console.log(selectedNumber);
