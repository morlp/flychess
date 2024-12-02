import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface Props {
  children: ComponentChildren;
}

export default function VipIsland({ children }: Props) {
   useEffect(()=>{
      if(IS_BROWSER){
          localStorage.setItem('vip', true); // 设置 VIP 状态
      }
   },[])

   return (
       <div>
          {children} {/* 渲染子组件 */}
       </div>
   );
}
