//========= convert today to input format
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;
//=========== tomorow date calc
let tomorow = new Date();
tomorow.setDate(tomorow.getDate() + 1);
console.log(tomorow);
// ========= convert tomorow to input format
// let tomorowFormate = new Date(tomorow).toISOString().split("T")[0];;// on peut cette forme ou la formte ci-après
let tomorowFormate = tomorow.toISOString().split("T")[0];
end_date.value = tomorowFormate;
end_date.min = tomorowFormate;
// console.log(tomorowFormate);
////===========  créer un evenement sur start_date
start_date.addEventListener("input", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value <= start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
    // bookingCalc();
    // end_date.min = end_date.value;
    // console.log(tomorowDay);
  }
});

////===========  créer un evenement sur Endate_date
end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  if (start_date.value > end_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
    // start_date.max = start_date.value;
  }
  // bookingCalc(); // on peut utiliser la fonction de cette manièere ou comme la faire de cette fa façon suivante "start_date.addEventListener("change", bookingCalc);" ========
});
// ========== create Function to caculate price of booking
const bookingCalc = () => {
  //   diffTime est en millisecondes;
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  total.textContent = diffDay * nightPrice.textContent;
};
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
bookingCalc();
