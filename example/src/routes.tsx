import type { ReactNode } from 'react'
import { AntdPage } from './pages/AntdPage'
import { InteractionPage } from './pages/InteractionPage'
import { LayoutPage } from './pages/LayoutPage'
import { OverviewPage } from './pages/OverviewPage'

export type DemoRoute = {
  path: string
  label: string
  element: ReactNode
}

export const demoRoutes: DemoRoute[] = [
  { path: '/', label: '概览', element: <OverviewPage /> },
  { path: '/layout', label: '布局', element: <LayoutPage /> },
  { path: '/interaction', label: '交互状态', element: <InteractionPage /> },
  { path: '/antd', label: 'antd 集成', element: <AntdPage /> },
]
