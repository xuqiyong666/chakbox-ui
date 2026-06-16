import { useStateRef } from './useStateRef'

/**
 * 在当前组件挂载周期内返回引用稳定的对象，并在每次 render 时同步为最新值。
 *
 * 适用场景：
 * - 在 `useCallback` / 事件处理函数中读取最新的 props 或 state，又不想把频繁变化的值加入依赖项
 * - 希望直接读写对象属性，而无需 `ref.current`
 *
 * 与相近 API 的区别：
 * - `useStateRef`：行为相同，但返回 ref，读写需 `.current`
 * - `useStableInstance`：仅在首次创建实例，不会每轮 render 自动同步外部值
 *
 * @param getValue 工厂函数，返回要在每轮 render 同步的对象
 * @returns 引用稳定、内容随 render 更新的对象，可直接读写属性
 *
 * @example
 * ```ts
 * const latest = useStableLatest(() => ({
 *   containerWidth: containerSize.width,
 *   containerHeight: containerSize.height,
 *   transform,
 * }))
 *
 * const handleClick = useCallback(() => {
 *   doSomething(latest.transform)
 * }, [])
 * ```
 */
export function useStableLatest<T extends Record<string, unknown>>(
  getValue: () => T,
): T {
  const ref = useStateRef(getValue)
  return ref.current
}
