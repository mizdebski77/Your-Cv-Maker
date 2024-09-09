import { Container, Wave, TextSection, Title, Wrapper, SectionText, Image, Content } from "./styledHowItWorks";
import topWave from '../../../common/Images/topWave.svg';
import howItWorks from '../../../common/Images/howItWorks.jpg';
import { Button } from "@/app/common/components/button";

export default function HowItWorks() {
    return (
        <Wrapper>
            <Wave src={topWave.src} alt="wave" />
            <Container>
                <Content>
                    <Image src={howItWorks.src} alt="how it works" />
                    <TextSection>
                        <Title>How it works</Title>
                        <SectionText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ut iure explicabo saepe aperiam, beatae maxime culpa repellendus iste. Perferendis ea consequatur totam incidunt ad nam doloremque architecto repellendus ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ut iure explicabo saepe aperiam, beatae maxime culpa repellendus iste. Perferendis ea consequatur totam incidunt ad nam doloremque architecto repellendus ab?
                        </SectionText>

                        <Button
                            text="Create Account"
                            onClick={() => alert('Button clicked!')}
                            padding="24px"
                            margin="10px"
                            background="blue"
                            hoverColor="lightBlue"
                        />
                    </TextSection>
                </Content>
            </Container>
            <Wave src={topWave.src} alt="wave" rotate />
        </Wrapper >
    );
}