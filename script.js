'use strict'; //Makes JavaScript give more useful errors

let calculateBtn = document.getElementById("scalculate-btn");
let result = document.getElementById("sresult");
let calculate = () => {
  let p = Number(document.getElementById("sprincipal").value);
  let r = Number(document.getElementById("srate").value);
  let t = Number(document.getElementById("stime").value);
  let duration = document.getElementById("sduration").value;
  let simpleInterest =
    duration == "syear" ? (p * r * t) / 100 : (p * r * t) / 1200;
  let amount = p + simpleInterest;

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);

let calculateBtn2 = document.getElementById("ccalculate-btn");
let result2 = document.getElementById("cresult");
let calculate2 = () => {
  let pc = Number(document.getElementById("cprincipal").value);
  let rc = Number(document.getElementById("crate").value);
  let tc = Number(document.getElementById("ctime").value);
  let nc = Number(document.getElementById("cnum").value);
  let compoundInterest = pc * (1 + rc/nc)^(nc*tc);
  let amount2 = pc + compoundInterest;

  result2.innerHTML = `<div>Principal Amount: <span>${pc.toFixed(2)}</span></div>
  <div>Total Interest: <span>${compoundInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount2.toFixed(2)}</span></div>`;
};
calculateBtn2.addEventListener("click", calculate2);
window.addEventListener("load", calculate2);

