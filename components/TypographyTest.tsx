import React from "react";

interface TypographyTestProps {}

const TypographyTest: React.FC<TypographyTestProps> = (
    props: TypographyTestProps
) => {
    return (
        <>
            <p>
                this is a character limit calculator and I want to see how far
                it can go (78).
            </p>

            <p>
                this is a character limit calculator and I want to see how far
                it can go (78). The rest of this paragraph is just a lengthy
                paragraph to see how it would look like in a blog post. I will
                write blog posts about graphics with crazy long words like{" "}
                <code>DiscombobulationFactoryConstructorBuilder</code> no doubt.
                I think it will add to the charm. In conclusion, I should make
                my paragraphs look like this.
            </p>
        </>
    );
};

export default TypographyTest;
