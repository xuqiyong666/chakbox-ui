import { useRef } from 'react';

/**
 * 在当前组件**挂载周期**内创建一个只初始化一次的局部对象实例。
 *
 * 适用场景：
 * - 需要引用稳定、可原地修改、且**不触发 React 重渲染**的运行时对象
 *   （例如 3D 场景索引、THREE 对象引用、每帧更新的引擎状态等）
 *
 * 与相近 API 的区别：
 * - `useState`：更新会触发重渲染，不适合高频原地修改
 * - `useMemo`：语义是「缓存依赖计算结果」，不适合作为可变实例容器
 * - `useRef`：容器稳定，但读写通常要写 `.current`
 * - `useStateRef`：每次 render 会用新值覆盖 ref 内容，适合 props 快照
 *
 * @param factory 仅在首次创建实例时调用；应返回可长期复用的可变对象
 * @returns 当前挂载周期内稳定的实例引用，可直接读写属性而无需 `.current`
 *
 * @example
 * const sceneRuntime = useStableInstance(() => createInitialSceneRuntime());
 * sceneRuntime.door.pivot = hingePivot;
 */
export function useStableInstance<T>(factory: () => T): T {
  const ref = useRef<T | null>(null);
  if (ref.current === null) {
    ref.current = factory();
  }
  return ref.current;
}
