import { ReactNode } from "react";

export interface SvgMaskProps {
    children: ReactNode;
}

export const MASK_ID = "mask_of_transparency!";

export const SvgMask = (props: SvgMaskProps) => {
    return (
        <mask id={MASK_ID} maskUnits="userSpaceOnUse">
            {props.children}
        </mask>
    );
};
