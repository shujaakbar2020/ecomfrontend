import { Badge, AppBar, IconButton } from '@material-ui/core';
import { Search, ShoppingCartOutlined, Mail, MailOutline, MailOutlined, AccountCircle, Notifications, NotificationsOutlined, ShoppingCart } from '@material-ui/icons';
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useNavigate } from 'react-router-dom'


const Container = styled.div`
    height: 60px;
    background-color: blue;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    border-radius: 4px;
    align-items: center;
    width: 30vw;
    margin-top: 2px;
    justify-content: center;
    background-color: white;
`;
const Input = styled.input`
    padding: 0.7em;
    margin: 0em;
    color: palevioletred;
    border: none;
    border-radius: 3px 0px 0px 3px;
    width: 100%;
    ${mobile({ width: "50px" })}
`;
const Logo = styled.div`
    font-weight: bold;
    cursor: pointer;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ justifyContent: "center", flex: 2 })}
`;
const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const NameB = styled.div`
    color: white;
`;

export const Navbar = () => {

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    const navigateToCart = () => {
        navigate('/cart');
    }
    const navigateToLogin = () => {
        navigate('/login');
    }
    const navigateToRegister = () => {
        navigate('/register');
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo onClick={navigateToHome} >LAMA.</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Search for products" />
                        <Search style={{ color: "gray", fontSize: 35, margin: "0px 3px 0px 0px" }} />
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>
                        <IconButton
                            size="small"
                            aria-label="register"
                            color="inherit"
                            onClick={navigateToRegister}
                        >
                            <NameB>REGISTER</NameB>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton
                            size="small"
                            aria-label="register"
                            color="inherit"
                            onClick={navigateToLogin}
                        >
                            <NameB>LOGIN</NameB>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton
                            size="small"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <Notifications style={{ color: "white" }} />
                            </Badge>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton
                            size="small"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCart onClick={navigateToCart} style={{ color: "white" }} />
                            </Badge>
                        </IconButton>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

