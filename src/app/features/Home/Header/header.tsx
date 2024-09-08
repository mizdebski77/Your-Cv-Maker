import { Button } from "@/app/common/components/button";
import { ButtonsWrapper, Content, Title, TitleSpan, Wrapper } from "./styledHeader";

export default function Header() {
    return (
        <Wrapper>
            <Content>
                <Title>
                    Stand Out in the job Market with our
                    <TitleSpan> AI - Powered </TitleSpan>
                    CV Creator
                </Title>

                <ButtonsWrapper>
                    <Button
                        text="Create your CV with AI"
                        onClick={() => alert('Button clicked!')}
                        padding="15px"
                        margin="10px"
                        background="green"
                        hoverColor="lightGreen"
                    />
                    <span>or</span>
                    <Button
                        text="Log-In to your account"
                        onClick={() => alert('Button clicked!')}
                        padding="15px"
                        margin="10px"
                        background="blue"
                        hoverColor="darkred"
                    />
                </ButtonsWrapper>
            </Content>
        </Wrapper>
    );
}
