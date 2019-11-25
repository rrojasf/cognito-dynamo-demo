import React from "react"

const DetailItem = ({ className, data }) => (
  <div className={className}>
    <span>{data.id}</span>
    <span>{data.last_stage}</span>
  </div>
)

export default DetailItem
