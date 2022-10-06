import React from "react";
import styled from "styled-components";

interface TextDividerProps {}

const TextDivider: React.FC<TextDividerProps> = (props: TextDividerProps) => (
    <Text>- - ---= -=-= - === - =-=- =--- - - </Text>
);

const Text = styled.p`
    text-align: center;
    color: #8c435a;
`;

export default TextDivider;
