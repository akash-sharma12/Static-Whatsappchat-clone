import styled from 'styled-components';
import {AiOutlineMore} from 'react-icons/ai';
import {BiSolidMessageDetail} from 'react-icons/bi'
import {BiLoaderCircle} from 'react-icons/bi'
import {IoIosPeople} from 'react-icons/io'
import './ContactListComponents.css';
import {AiOutlineSearch} from 'react-icons/ai'


const Container = styled.div`
display:flex;
flex-direction:column;
height:  100%;
flex: 0.8;
`;

const ProfileInfoDiv = styled.div`
display:flex;
flex-direction:row;
background:#ededed;
padding:10px;
`;

const ProfileImage = styled.img`
width:40px;
height:40px;
border-radius:50%;
`;

const SearchBox = styled.div`
display:flex;

background: #f6f6f6;
padding:10px;
`;

const SearchContainer = styled.div`
display:flex;
flex-direction:row;
border-radius:16px;
width:100%;
background: white;
padding:10px 0px;
padding-left:10px;

`;

const SearchInput = styled.input`
width:80%;
padding-left: 15px;
outline: none;
border:none;
font-size:15px;
`;

const ContactItem = styled.div`
display:flex;
flex-direction:row;
width:92%;
border-bottom:1px solid #f2f2f2;
background:white;
cursor:pointer;
padding:15px;

`;

const ProfileIcon =styled(ProfileImage)`
width:38px;
height:38px;
`;



const ContactName = styled.span`
width:100%;
font-size:18px;
color:black;
padding-left:15px;
padding-top:3px;


`;

const MessageText =styled.span`
width:20%;
font-size:14px;
margin:3px;
color: #808080;
padding-left:15px;

`;


const ContactInfo = styled.div`
display:flex;
flex-direction:column;
width:100%;
padding:0 10px;

`;


const ContactComponent = () => {
    return<ContactItem>
        <ProfileImage src="/profile/profilephoto1.jpg"/>
        <ContactInfo>
            <ContactName>Sandeep Thakur</ContactName>
            <MessageText>https://youtu.be/0KfFdjmBpvE</MessageText>
        </ContactInfo>
        <MessageText>Yesterday</MessageText>

        

        
    </ContactItem>;
};
function ContactListComponents () {
 
    return <Container>
        <ProfileInfoDiv>
        <ProfileImage src = "/profile/profilephoto.jpeg"/>

        <div className="cart-layout1">
        <AiOutlineMore/>
    </div>

    <div className='cart-layout2'>
        <BiSolidMessageDetail/>
    </div>

    <div className='cart-layout3'>
        <BiLoaderCircle/>
    </div>

    <div className='cart-layout4'>
        <IoIosPeople/>
    </div>
   
        </ProfileInfoDiv>

        <SearchBox>
            <SearchContainer>

            <div className='cart-layout5'>
        <AiOutlineSearch/>
    </div>
    <SearchInput placeholder='Search or Start a new chat'/>
    
            </SearchContainer>
            
        </SearchBox>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>
<ContactComponent/>

        </Container>
}

export default ContactListComponents;




