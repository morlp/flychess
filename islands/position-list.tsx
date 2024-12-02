import { useEffect } from "preact/hooks";

export default function PositionList(params) {
    let { positions } = params;

    return (
        <>
            <div class="grid grid-cols-2 gap-2">
                {positions.map((p) => (
                    <img src={atob(p)} class="rounded mx-auto block" />
                ))}
            </div>
            {/* 移除会员提示 */}
        </>
    );
}
