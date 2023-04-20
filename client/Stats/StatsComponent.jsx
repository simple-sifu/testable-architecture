import React from "react";
import { useSelector } from "react-redux";
import * as presenter from "./StatsPresenter";

export default function StatsComponent() {
  const lastAddedBook = useSelector(presenter.selectLastAddedBook);

  return (
    <div>
      <h5>Last Added Book (ui)</h5>
      {lastAddedBook}
    </div>
  );
}
