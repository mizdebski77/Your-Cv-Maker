import { ColoredText, Image, InformationWrapper, MainText, TextWrapper, Wrapper } from "./styledInformations";
import { informationsData } from "@/app/core/arrays";

export default function Informations() {
    return (
        <Wrapper>
            {informationsData.map((information, index) => (
                <InformationWrapper key={index} index={index}>
                    <Image src={information.img.src} alt="Information image" />
                    <TextWrapper>
                        <MainText>{information.preText} </MainText>
                        <ColoredText>{information.coloredText}</ColoredText>
                        <MainText>{information.postText}</MainText>
                    </TextWrapper>
                </InformationWrapper>
            ))}
        </Wrapper>
    );
}
