"use client";
import { useState } from "react";
import "./firecss.css";
import adddata from "../firebase/firebaseout";
export default function Transaction() {
  let [cost, setcost] = useState("");
  let [item, setitem] = useState("");
  let [category, setcategory] = useState("Entertainment");
  let [date, setdate] = useState("");
  let whitecheck = (value) => {
    value = value.toString();
    return value == null || value.replaceAll(" ", "").length < 1;
  };
  let insertdat = () => {
    if (
      whitecheck(cost) ||
      whitecheck(item) ||
      whitecheck(category) ||
      whitecheck(date)
    ) {
      alert("fill in the data");
      return;
    }
    adddata(item, cost, date, category);
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="regbox">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-25">
              <label>Cost</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="fname"
                name="firstname"
                placeholder="cost of that"
                value={cost}
                onChange={(e) => {
                  setcost(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Item</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Name of the item"
                value={item}
                onChange={(e) => {
                  setitem(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>category</label>
            </div>
            <div className="col-75">
              <select
                id="country"
                name="country"
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              >
                <option value="Entertainment">Entertainment</option>
                <option value="Veggies">Veggies</option>
                <option value="Food">Food</option>
                <option value="misselanious">misselanious</option>
                <option value="meds">Medical</option>
                <option value="petrol">petrol</option>
                <option value="essentials">essentials</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Date</label>
            </div>
            <div className="col-75">
              <input
                type="date"
                id="lname"
                name="lastname"
                placeholder="date of transaction"
                value={date}
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <input onClick={insertdat} type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}
