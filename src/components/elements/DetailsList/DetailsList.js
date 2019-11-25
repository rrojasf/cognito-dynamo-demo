import React from "react"

import DetailItem from "../DetailItem/DetailItem"

const DetailsList = ({ className, items }) => (
  <div className={className}>
    <div>
      {items.result.map(data => (
        <DetailItem data={data} />
      ))}
    </div>
  </div>
)

export default DetailsList
