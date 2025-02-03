
let seatAvailable = document.getElementById("avalableSeat").innerText;
let availableSeat = parseInt(seatAvailable);
let seatBus = document.getElementsByClassName("seat");
let clickedSeatNumber = document.getElementById("numberOfSelectedSeat").innerText;
let selectedSeat = parseInt(clickedSeatNumber);
let ticketPrice = 550;

for(let seat of seatBus){
    seat.addEventListener("click", function(){
        console.log(seat.innerText);
        seat.classList.add("pointer-events-none")
       const seatSectionDisplayDiv = document.getElementById("displayedSeatSection")
       let li = document.createElement("li");
       li.innerText = seat.innerText;
       seatSectionDisplayDiv.appendChild(li);

       const seatClass = document.getElementById("seatClass");
       let p = document.createElement("p");
       p.innerText = `Economic`;
       seatClass.appendChild(p);

    //    console.log(ticketPrice, "ticket Price", typeof ticketPrice);

    let priceContainer = document.getElementById("seatPriceContainer");
    let price = document.createElement("p");
    price.innerText = ticketPrice;
    priceContainer.appendChild(price)


    seat.classList.add("bg-[#1DD100]")
     selectedSeat++;
    //  console.log(availableSeat, "type of available seat:", typeof availableSeat)

    availableSeat--;

document.getElementById("avalableSeat").innerText = availableSeat;
    //  console.log(selectedSeat, typeof selectedSeat)

    
     document.getElementById("numberOfSelectedSeat").innerText = selectedSeat;
       if(selectedSeat === 4){
        disableDiv();
       }

       let totalPriceString = document.getElementById("bdtPrice").innerText;
       let totalPrice = parseInt(totalPriceString);
    
       let perSeattPrice = parseInt(price.innerText)
       
       totalPrice = totalPrice + perSeattPrice;
    //    console.log(totalPrice);
       document.getElementById("bdtPrice").innerText = totalPrice;

       let grandTotalPrice = document.getElementById("grandTotal");

       grandTotalPrice.innerText = totalPrice;

      

      if(selectedSeat === 4){
        const applyButton = document.getElementById("couponeAppplybtn");
        applyButton.disabled = false;
      }


      const couponeFiledText = document.getElementById("couponeInputField").value;
      const applyButton = document.getElementById("couponeAppplybtn")
      applyButton.addEventListener("click", function(){
        if(couponeFiledText === "NEW15"){
            let grandTotalPriceObj = document.getElementById("grandTotal").innerText;
            let grandTotalPrice = parseInt(grandTotalPriceObj)
                console.log("uporere line", typeof grandTotalPrice, grandTotalPrice);
                let discount = (0.15*grandTotalPrice)
                grandTotalPrice = grandTotalPrice - discount
      
                console.log("after discount", grandTotalPrice, typeof grandTotalPrice);
      
      
                document.getElementById("grandTotal").innerText = grandTotalPrice;
      
          }

          else if(couponeFiledText === "Couple 20"){
            let grandTotalPriceObj = document.getElementById("grandTotal").innerText;
            let grandTotalPrice = parseInt(grandTotalPriceObj)
                console.log("uporere line", typeof grandTotalPrice, grandTotalPrice);
                let discount = (0.2*grandTotalPrice)
                grandTotalPrice = grandTotalPrice - discount
      
                console.log("after discount", grandTotalPrice, typeof grandTotalPrice);
      
      
                document.getElementById("grandTotal").innerText = grandTotalPrice;
      
          }
      
       
        
      })
      
       
    })
    

    
}


// *************



function disableDiv() {

    const seats = document.getElementsByClassName("seat"); 
    for (let i = 0; i < seats.length; i++) {
        seats[i].classList.add("pointer-events-none")}
   
}
      
    



// let seatAvailable = document.getElementById("avalableSeat").innerText;
// let availableSeat = parseInt(seatAvailable);
// let seatBus = document.getElementsByClassName("seat");
// let clickedSeatNumber = document.getElementById("numberOfSelectedSeat").innerText;
// let selectedSeat = parseInt(clickedSeatNumber);
// let ticketPrice = 550;

// for (let seat of seatBus) {
//     seat.addEventListener("click", function () {
//         console.log(seat.innerText);

//         seat.style.pointerEvents = "none"; // Fixing pointer-events issue

//         const seatSectionDisplayDiv = document.getElementById("displayedSeatSection");
//         let li = document.createElement("li");
//         li.innerText = seat.innerText;
//         seatSectionDisplayDiv.appendChild(li);

//         const seatClass = document.getElementById("seatClass");
//         if (!seatClass.querySelector("p")) { // Prevent multiple Economic entries
//             let p = document.createElement("p");
//             p.innerText = `Economic`;
//             seatClass.appendChild(p);
//         }

//         let priceContainer = document.getElementById("seatPriceContainer");
//         let price = document.createElement("p");
//         price.innerText = ticketPrice;
//         priceContainer.appendChild(price);

//         seat.classList.add("bg-[#1DD100]");

//         selectedSeat++;

//         if (availableSeat > 0) { // Prevent availableSeat from going negative
//             availableSeat--;
//         }

//         document.getElementById("avalableSeat").innerText = availableSeat;
//         document.getElementById("numberOfSelectedSeat").innerText = selectedSeat;

//         if (selectedSeat >= 4) { // Fixing issue with disableDiv()
//             disableDiv();
//         }

//         let totalPriceString = document.getElementById("bdtPrice").innerText || "0"; // Fix NaN issue
//         let totalPrice = parseInt(totalPriceString);
//         let perSeattPrice = parseInt(price.innerText);

//         totalPrice = totalPrice + perSeattPrice;
//         document.getElementById("bdtPrice").innerText = totalPrice; // Make sure to update the total price
//     });
// }

// function disableDiv() {
//     const seats = document.getElementsByClassName("seat");
//     for (let i = 0; i < seats.length; i++) {
//         seats[i].style.pointerEvents = "none"; // Using inline style for better compatibility
//     }
// }
