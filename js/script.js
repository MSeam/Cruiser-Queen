function getSlotsAmount(cabin, increase) {
  const cabinClassInput = document.getElementById(cabin + "-count");
  const cabinClassCount = parseInt(cabinClassInput.value);
  let newCabinClassCount = cabinClassCount;
  if (increase == true) {
    newCabinClassCount = cabinClassCount + 1;
  }
  if (increase == false) {
    newCabinClassCount = cabinClassCount - 1;
    if (newCabinClassCount < 0) {
      return 0;
    }
  }
  cabinClassInput.value = newCabinClassCount;

  const slotsCharge = document.getElementById(cabin + "-ticket-charge");
  const perSlotsCharge = parseInt(slotsCharge.innerText);
  let totalSlotsCharge = 0;
  if (cabin == "first-class") {
    totalSlotsCharge = newCabinClassCount * 150;
  }
  if (cabin == "economy-class") {
    totalSlotsCharge = newCabinClassCount * 100;
  }
  slotsCharge.innerText = totalSlotsCharge; //showed cabin class value in first/economy class span

  //cabin class value parse converter section
  const firstClassCabin = document.getElementById("first-class-ticket-charge");
  const firstClassCabinCharge = parseInt(firstClassCabin.innerText);
  const economyClassCabin = document.getElementById(
    "economy-class-ticket-charge"
  );
  const economyClassCabinCharge = parseInt(economyClassCabin.innerText);

  //subtotal section
  const subTotal = firstClassCabinCharge + economyClassCabinCharge;
  document.getElementById("sub-total").innerText = subTotal;

  //vat section
  const vat = Math.round(subTotal * 0.1);
  document.getElementById("vat-total").innerText = vat;

  //total section
  const total = subTotal + vat;
  document.getElementById("total-total").innerText = total;
}
function clickBookBtn() {
  const bookChart = document.getElementById("booking-chart");
  bookChart.style.display = "none";
  const bookMemo = document.getElementById("booking-memo");
  bookMemo.style.display = "block";
  //Flying from
  document.getElementById("flying-from-output").innerText =
    document.getElementById("flying-from").value;
  //Flying to
  document.getElementById("flying-to-output").innerText =
    document.getElementById("flying-to").value;
  //Departure Date
  document.getElementById("departure-date-output").innerText =
    document.getElementById("departure-date").value;
  //Return Date
  document.getElementById("return-date-output").innerText =
    document.getElementById("return-date").value;
  //First Class
  document.getElementById("first-class-ticket-charge-output").innerText =
    document.getElementById("first-class-ticket-charge").innerText;
  //Economic Class
  document.getElementById("economy-class-ticket-charge-output").innerText =
    document.getElementById("economy-class-ticket-charge").innerText;
  //sub-total
  document.getElementById("sub-total-output").innerText =
    document.getElementById("sub-total").innerText;
  //vat
  document.getElementById("vat-output").innerText =
    document.getElementById("vat-total").innerText;
  //total
  document.getElementById("total-output").innerText =
    document.getElementById("total-total").innerText;
}
