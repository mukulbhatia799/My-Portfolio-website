import './education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";

const Education = () => {
    return <div className="education-outer-div my-5">
        <h1 className="text-success text-center">Education</h1><hr />
        <div className="education-inner-div">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work" 
                    contentStyle={{backgroundColor: 'rgba(169, 220, 237, 0.5)'}}
                    contentArrowStyle={{borderRight: '10px solid rgba(169, 220, 237, 0.5)'}}
                    date="2023 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<IoSchoolSharp />}
                >
                    <h4 className="vertical-timeline-element-title">Master of Computer Application (MCA)</h4>
                    <h5 className="vertical-timeline-element-title">Lovely Professional University</h5>
                    <h6 className="vertical-timeline-element-subtitle">Jalandar, Punjab</h6>
                    {/* <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{backgroundColor: 'rgba(169, 220, 237, 0.5)'}}
                    contentArrowStyle={{borderRight: '10px solid rgba(169, 220, 237, 0.5)'}}
                    date="2020 - 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdOutlineSchool />}
                >
                    <h4 className="vertical-timeline-element-title">Bachelor of Computer Application (BCA)</h4>
                    <h5 className="vertical-timeline-element-title">SRM University</h5>
                    <h6 className="vertical-timeline-element-subtitle">Delhi-NCR, Sonipat, Haryana</h6>
                    {/* <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p> */}
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
}

export default Education;