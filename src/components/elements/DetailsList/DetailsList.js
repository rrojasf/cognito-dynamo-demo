import React from "react"

import DetailItem from "../DetailItem/DetailItem"

const DetailsList = ({ className, items }) => (
  <div className={className}>
    <div>
      {items.users.map(({ id, email }) => (
        <DetailItem title={email} />
      ))}
    </div>
  </div>
)

export default DetailsList
