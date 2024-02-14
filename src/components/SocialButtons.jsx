import { Container } from "react-bootstrap"



const SocialButtons = ({face, github, linkedin}) => {

    return (
       <> 
        <Container>
            <a href="">{face}</a>
            <a href="">{github}</a>
            <a href="">{linkedin}</a>
        </Container>
       </>
    )
}
export default SocialButtons