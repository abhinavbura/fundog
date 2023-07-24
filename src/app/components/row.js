"use client";
export default function Tow({ item, cost, category, date }) {
  return (
    <tr>
      <td>{item}</td>
      <td>{cost}</td>
      <td>{category}</td>
      <td>{date}</td>
    </tr>
  );
}
