import FirebaseConfig from "./fireconfig";
import { ref, set, get, update, remove, child } from "firebase/database";
let db = FirebaseConfig();

function incremcout() {
  get(child(ref(db), "count")).then((snapshot) => {
    if (snapshot.exists()) {
      let a = snapshot.val().count + 1;

      set(ref(db, "count"), {
        count: a,
      });
    }
  });
}

async function adddata(item, cost, date, category) {
  get(child(ref(db), "count")).then((snapshot) => {
    if (snapshot.exists()) {
      let a = snapshot.exportVal().count;
      console.log("this" + a);
      dataadd(a, item, cost, date, category);
    }
  });
}

function dataadd(uid, item, cost, date, category) {
  set(ref(db, "data/" + uid), {
    item: item,
    cost: cost,
    date: date,
    category: category,
  });
  incremcout();
}

export default adddata;
