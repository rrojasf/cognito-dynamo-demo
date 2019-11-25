import React from "react"

import DashboardItem from "../DashboardItem/DashboardItem"

const Dashboard = ({ className }) => (
  <div className={className}>
    <DashboardItem
      title="Transferidas"
      total="36"
      icon="gc-icon_down-arrow"
      color="4577ED"
    />
    <DashboardItem
      title="Iniciadas"
      total="3728"
      icon="gc-icon_dialog"
      color="00C2C7"
    />
    <DashboardItem
      title="Discadas"
      total="11712"
      icon="gc-icon_check"
      color="8B51EA"
    />
    <DashboardItem
      title="No Iniciadas"
      total="7984"
      icon="gc-icon_waiting"
      color="FD9F02"
    />
    <DashboardItem
      title="Numeros"
      total="11712"
      icon="gc-icon_phone"
      color="0499DE"
    />
    <DashboardItem
      title="Fallidas"
      total="10"
      icon="gc-icon_close"
      color="CB1D32"
    />
    <DashboardItem
      title="Compromiso Pago"
      total="14"
      icon="gc-icon_time"
      color="F4107B"
    />
  </div>
)

export default Dashboard
