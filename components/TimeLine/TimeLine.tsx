import * as React from "react";
import {Container,InnerConatiner, TitleDiv,SubTitle, Div, Photo, SS} from './styles'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Books } from "../../constants/MOCK_DATA";
import { CgBoy , CgGirl} from "react-icons/cg";
import { Images } from "../../helpers/Image";
import Link from "next/link";

let wonamIcon ={
    background:'#ffa500'

}
let manIcon ={
    background:'#15a3f9'

}
const date={
    color:'red'
}
export default class ReactVerticalTimelineComponentTests extends React.Component {
   
  elementClick(){
   //console.log('p')
   }
    render() {
        return (
            <Container>
                <InnerConatiner>
                    <TitleDiv> <h1>New Released</h1></TitleDiv>
                   
            <VerticalTimeline>
                {Books.slice(0,5).map((item, index)=>{
                    let woman=item.icon === 'woman'
                    return <SS
                    key={item.id}
                    date={item.author}
                    dateClassName='date'
                    iconStyle={woman ? wonamIcon : manIcon}
                    icon={woman ? <CgGirl/> : <CgBoy/>}
                    onTimelineElementClick={this.elementClick}
                   
                    >
                       
                       
                     
                        <Div>
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <SubTitle >{item.author}</SubTitle>
                        <Images src={item.image} width={250} height={300}   alt="book"/>
                        </Div>
                        <Photo className={index%2 ==0 ? 'odd' : 'even'}>
                        <Images src={item.face} width={100} height={100}   alt="book"/>
                        </Photo>
                    </SS>
                })}
            </VerticalTimeline>
           
          </InnerConatiner>
          </Container>
        );
    }
}