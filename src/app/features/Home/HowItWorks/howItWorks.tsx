import { Container, Image, Wrapper } from "./styledHowItWorks";
import topWave from '../../../common/Images/topWave.svg';

export default function HowItWorks() {
    return (
        <Wrapper>
            <Image src={topWave.src} alt="wave" />
            <Container>

            </Container>

            <Image src={topWave.src} alt="wave" rotate />
        </Wrapper>
    );
}