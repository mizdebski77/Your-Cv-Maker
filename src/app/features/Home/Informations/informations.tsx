import { Button } from "@/app/common/components/button";
import { Container, Image, InformationWrapper, MainText, SecondText, Wrapper } from "./styledInformations";
import { informationsData } from "@/app/core/arrays";

export default function Informations() {
    return (
        <Wrapper>
            <Container>
                {informationsData.map((information, index) => (
                    <InformationWrapper key={index}>
                        <Image src={information.img.src} />
                        <MainText>{information.preText}
                            <SecondText>{information.postText}</SecondText>
                        </MainText>
                    </InformationWrapper>
                ))}

            </Container>
        </Wrapper>
    );
}
