"use client";
import { useEffect, useState } from "react";
import FirebaseConfig from "../firebase/fireconfig";
import { ref, get, child } from "firebase/database";
import Tow from "./row";
export default function Showing() {
  let [sdata, setsdata] = useState();

  let db = FirebaseConfig();
  const [news, setnews] = useState(false);

  function loaddata() {
    return get(child(ref(db), "data")).then((snapshot) => {
      if (snapshot.exists()) {
        let jaj = snapshot.val();
        let keys = Object.keys(snapshot.val());
        let mdata = [];
        keys.forEach((Obj) => {
          var hh = { item: "", category: "", cost: "", date: "", cost: "" };
          hh.category = jaj[Obj].category;
          hh.item = jaj[Obj].item;
          hh.cost = jaj[Obj].cost;
          hh.date = jaj[Obj].date;
          mdata.push(hh);
        });
        setsdata(mdata);
        setnews(true);
      }
    });
  }

  useEffect(() => {
    loaddata();
  }, [news]);

  return (
    <div>
      <h1>All Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>COST</th>
            <th>CATEGORY</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {news === true ? (
            sdata.map((obj) => (
              <Tow
                item={obj.item}
                category={obj.category}
                cost={obj.cost}
                date={obj.date}
              />
            ))
          ) : (
            <tr>
              <td>loading....</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
