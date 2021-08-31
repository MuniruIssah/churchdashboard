import { Row, Col, Card, Button, Input, Form, DatePicker, Skeleton, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useState,useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faBookReader, faBuilding, faBullhorn, faFileAudio, faCalendarAlt, faChartLine, faDesktop, faEllipsisH, faEllipsisV, faList, faPlus, faPray, faPrayingHands, faProjectDiagram, faRunning, faSmile, faSun, faUser, faUserFriends, faVideo } from '@fortawesome/free-solid-svg-icons';
import { UserOutlined, LineChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { collectionCount, getCollection, updateWOD } from "../backend/functions";

function onChange(date, dateString) {
    console.log(date, dateString);
}

const ButtonNav = (params) => {
    return (
        <div onClick={params.onClick} className='buttonNav' >
            <h3 style={{ color: 'white' }}>{params.name}</h3>
            {params.icon}
        </div>
    );
}
const AddVideoCard = () => {
    return (
        <Card >
            <div>
                <FontAwesomeIcon style={{ color: 'grey', marginRight: 10, fontSize: 17 }} icon={faVideo} />
                <span style={{ color: 'grey', fontSize: 17 }}>Add A Video</span>
            </div>
            <Form layout='inline' style={{ marginTop: 10 }}>
                <Form.Item
                    label='Enter Video Title'
                    name='title'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please input the key!' }]}
                >
                    <Input type='text' size='large' />

                </Form.Item>
                <Form.Item
                    label='Select Video'
                    name='video'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please select a video' }]}
                >
                    <Input type='file' />

                </Form.Item>
                <Form.Item
                    style={{ marginTop: 10 }}
                >
                    <Button style={{ width: 150, height: 35 }} htmlType='submit' type='primary'>
                        <FontAwesomeIcon style={{ marginRight: 10, }} icon={faPlus} />
                        Add</Button>
                </Form.Item>

            </Form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            </div>

        </Card>
    );
}


const AddAudioCard = () => {
    return (
        <Card >
            <div>
                <FontAwesomeIcon style={{ color: 'grey', marginRight: 10, fontSize: 17 }} icon={faFileAudio} />
                <span style={{ color: 'grey', fontSize: 17 }}>Add An Audio</span>
            </div>
            <Form layout='inline' style={{ marginTop: 10 }}>
                <Form.Item
                    label='Enter Audio Title'
                    name='title'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please input the key!' }]}
                >
                    <Input type='text' size='large' />

                </Form.Item>
                <Form.Item
                    label='Select Audio'
                    name='video'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please select a audio' }]}
                >
                    <Input type='file' />

                </Form.Item>
                <Form.Item
                    style={{ marginTop: 10 }}
                >
                    <Button style={{ width: 150, height: 35 }} htmlType='submit' type='primary'>
                        <FontAwesomeIcon style={{ marginRight: 10, }} icon={faPlus} />
                        Add</Button>
                </Form.Item>

            </Form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            </div>

        </Card>
    );
}



const AddAnnouncementCard = () => {
    const [announcementTitle,setAnnouncementTitle]=useState('')
    const [announcementDescription,setAnnouncementDescription]=useState('')


    return (
        <Card >
            <div>
                <FontAwesomeIcon style={{ color: 'grey', marginRight: 10, fontSize: 17 }} icon={faBullhorn} />
                <span style={{ color: 'grey', fontSize: 17 }}>Add an Announcement</span>
            </div>
            <Form layout='vertical' style={{ marginTop: 10 }}>
                <Form.Item
                    label='Enter Announcement Title'
                    name='announcementTitle'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please enter the announcement title' }]}
                >
                    <Input type='text' size='large' />

                </Form.Item>
                <Form.Item
                    label='Enter Announcement Description'
                    name='announcementDesc'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please enter the announcement description' }]}
                >
                    <Input.TextArea />

                </Form.Item>

                <Form.Item
                    style={{ marginTop: 10 }}
                >

                    <Button style={{ width: 150, height: 35 }} htmlType='submit' type='primary'>
                        <FontAwesomeIcon style={{ marginRight: 10, }} icon={faPlus} />
                        Add</Button>
                </Form.Item>

            </Form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            </div>

        </Card>
    );
}


const AddEventCard = () => {
    return (
        <Card >
            <div>
                <FontAwesomeIcon style={{ color: 'grey', marginRight: 10, fontSize: 17 }} icon={faCalendarAlt} />
                <span style={{ color: 'grey', fontSize: 17 }}>Add an Event</span>
            </div>
            <Form layout='vertical' style={{ marginTop: 10 }}>
                <Form.Item
                    label='Enter Event Title'
                    name='eventTitle'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please enter the event title' }]}
                >
                    <Input type='text' size='large' />

                </Form.Item>
                <Form.Item
                    label='Enter Event Description'
                    name='eventDesc'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please enter the event description' }]}
                >
                    <Input.TextArea />

                </Form.Item>
                <Form.Item
                    label='Select Event Date and Time'
                    name='eventDate'
                    style={{ marginTop: 10 }}
                    rules={[{ required: true, message: 'Please select the event date' }]}
                >
                    <DatePicker showTime onChange={onChange} placeholder='Select Date and Time' />

                </Form.Item>
                <Form.Item
                    style={{ marginTop: 10 }}
                >

                    <Button style={{ width: 150, height: 35 }} htmlType='submit' type='primary'>
                        <FontAwesomeIcon style={{ marginRight: 10, }} icon={faPlus} />
                        Add</Button>
                </Form.Item>

            </Form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            </div>

        </Card>
    );
}


const AddProjectCard = () => {
    return (
        <Card >
            <div>
                <FontAwesomeIcon style={{ color: 'grey', marginRight: 10, fontSize: 17 }} icon={faBuilding} />
                <span style={{ color: 'grey', fontSize: 17 }}>Add A Project</span>
            </div>
            <Form layout='vertical' style={{ marginTop: 10 }}>
                <Form.Item
                    label='Enter Project Name'
                    name='projectName'
                    style={{ marginTop: 5 }}
                    rules={[{ required: true, message: 'Please input project name!' }]}
                >
                    <Input type='text' size='large' />

                </Form.Item>
                <Form.Item
                    label='Add a Flyer'
                    name='projectFlyer'
                    style={{ marginTop: 5 }}
                // rules={[{ required: true, message: 'Please select a video' }]}
                >
                    <Input type='file' />

                </Form.Item>
                <Form.Item
                    label='Enter Amount expected'
                    name='expectedAmount'
                    style={{ marginTop: 5 }}
                    rules={[{ required: true, message: 'Please select a video' }]}
                >
                    <Input type='text' size='large' />

                </Form.Item>
                <Form.Item
                    label='Project Description'
                    name='description'
                    style={{ marginTop: 5 }}
                    rules={[{ required: true, message: 'Please select a video' }]}
                >
                    <Input.TextArea />

                </Form.Item>
                <Form.Item
                    style={{ marginTop: 5 }}
                >
                    <Button style={{ width: 150, height: 35 }} htmlType='submit' type='primary'>
                        <FontAwesomeIcon style={{ marginRight: 10, }} icon={faPlus} />
                        Add</Button>
                </Form.Item>

            </Form>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
            </div>
            {/* 
                    */}
        </Card>
    );

};
const Create = () => {
    const [whatToShow, setWhatToShow] = useState('video')
    let displayed;

    if (whatToShow === 'video') {
        displayed = <AddVideoCard />
    } else if (whatToShow === 'announcement') {
        displayed = <AddAnnouncementCard />


    } else if (whatToShow === 'project') {
        displayed = <AddProjectCard />
    } else if (whatToShow === 'event') {
        displayed = <AddEventCard />

    }else if (whatToShow === 'audio'){
        displayed = <AddAudioCard />

    }
    return (
        <>
           <UpdateWodCard/>
            <Row style={{ width: '100%' }}>
                <Col md={24}>
                    <div style={{ height: 80, width: '100%', paddingRight: 10, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll' }}>
                        <Button onClick={() => { setWhatToShow('video') }} style={{ margin: 10, color: whatToShow === 'video' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'video' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text' ><FontAwesomeIcon style={{ color: whatToShow === 'video' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faVideo} />Add A Video</Button>
                        <Button onClick={() => { setWhatToShow('project') }} style={{ margin: 10, color: whatToShow === 'project' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'project' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: whatToShow === 'project' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faBuilding} />Add A Project</Button>
                        <Button onClick={() => { setWhatToShow('announcement') }} style={{ margin: 10, color: whatToShow === 'announcement' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'announcement' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: whatToShow === 'announcement' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faBullhorn} />Add An Announcement</Button>
                        <Button onClick={() => { setWhatToShow('event') }} style={{ margin: 10, color: whatToShow === 'event' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'event' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: whatToShow === 'event' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faCalendarAlt} />Add An Event</Button>
                        <Button onClick={() => { setWhatToShow('audio') }} style={{ margin: 10, color: whatToShow === 'audio' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'audio' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: whatToShow === 'audio' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faFileAudio} />Add An Audio</Button>



                    </div>
                </Col>
            </Row>
            {/* Video Card */}
            {/* */}
            {/* Project Card */}

            {displayed}

        </>
    );
}

const UpdateWodCard=()=>{
    const [WOD,setWOD]=useState('')
    return(
    <Card style={{
                marginBottom: 30
            }}>
                <p style={{ color: 'grey', marginBottom: 15 }}>
                    Update the Word of the Day
                            </p>
                <div >
                    <form style={{ display: 'flex' }} 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        updateWOD(WOD)}}>
                    <Input value={WOD} onChange={(e)=>setWOD(e.target.value)} size='large' placeholder="Enter Today's word" />
                    <Button htmlType='submit' size='large' type='primary'>Update</Button>
                    </form>
                </div>
            </Card>
    );
}

const Statistics = () => {
    const [numberOfUsers,setNumberOfUsers]=useState(0)
    const [numberOfPrayerRequests,setNumberOfPrayerRequests]=useState(0)
    const [numberOfProjects,setNumberOfProjects]=useState(0)


    // const NumberOfUsers=collectionCount('users')
    // const NumberOfPrayerRequests=collectionCount('prayer-requests')
    // const NumberOfProjects=collectionCount('projects')

    useEffect(()=>{
    let useeee=collectionCount('users')
    let prs=collectionCount('prayer-requests')
    let proj=collectionCount('projects')


    setNumberOfUsers(useeee)
    setNumberOfPrayerRequests(prs)
    setNumberOfProjects(proj)
    },[])
    // console.log(NumberOfPrayerRequests,NumberOfProjects,NumberOfUsers)


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'cen', marginBottom: 30 }}>
                <FontAwesomeIcon icon={faSun} style={{ fontSize: 30, color: 'orange' }} />

                <span style={{ fontSize: 35, color: 'grey', marginTop: 10, fontWeight: '400' }}>
                    Good Morning, Admin
                            </span>
            </div>
            <UpdateWodCard/>
            
            <Card style={{
                borderRadius: 5, background: ' #1e3c72', background: '-webkit-linear-gradient(to right, #1e3c72, #2a5298)',
                background: 'linear-gradient(to right, #1e3c72, #2a5298)',
                marginBottom: 20,
                position:'relative'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <span style={{ color: 'white', fontSize: 'max(2vw,20px)', fontWeight: 'bold' }}>
                        Users
                                 </span>
                    <FontAwesomeIcon style={{ fontSize: 25, color: 'white' }} icon={faUserFriends} />
                </div>
                <div style={{position:'absolute',top:5,left:10,zIndex:2}}>
                <FontAwesomeIcon style={{ fontSize: 150, color: '#fcfcfc10' }} icon={faUserFriends} />
                </div>
                <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                    <text style={{ fontWeight: 'bolder', alignSelf: 'flex-end', color: 'ghostwhite', fontSize: 20 }}>
                        {numberOfUsers}
                                </text>
                </div>

            </Card>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <Card style={{
                    flex: 1, margin: 10,
                    borderRadius: 5, background: ' #e53935', background: '-webkit-linear-gradient(to right, #e53935, #e35d5b)',
                    background: 'linear-gradient(to right, #e53935, #e35d5b)',position:'relative'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <span style={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}>
                            Prayer Requests
                                 </span>
                        <FontAwesomeIcon style={{ fontSize: 22, color: 'white' }} icon={faPray} />
                    </div>
                    <div style={{position:'absolute',top:5,left:10,zIndex:2}}>
                <FontAwesomeIcon style={{ fontSize: 140, color: '#fcfcfc20' }} icon={faPray} />
                </div>
                    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                        <text style={{ fontWeight: 'bolder', alignSelf: 'flex-end', color: 'ghostwhite', fontSize: 20 }}>
                        {numberOfPrayerRequests}
                                </text>
                    </div>


                </Card>
                <Card style={{
                    flex: 1, margin: 10,
                    borderRadius: 5, background: '#2c3e50', background: '-webkit-linear-gradient(to right, #2c3e50, #3498db)',
                    background: 'linear-gradient(to right, #2c3e50, #3498db)',position:'relative'

                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <span style={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}>
                            Projects
                                 </span>
                        <FontAwesomeIcon style={{ fontSize: 22, color: 'white' }} icon={faBuilding} />
                    </div>
                    <div style={{position:'absolute',top:5,left:10,zIndex:2}}>
                <FontAwesomeIcon style={{ fontSize: 140, color: '#fcfcfc10' }} icon={faBuilding} />
                </div>
                    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                        <text style={{ fontWeight: 'bolder', alignSelf: 'flex-end', color: 'ghostwhite', fontSize: 20 }}>
                        {numberOfProjects}
                                </text>
                    </div>
                </Card>
            </div>
        </>
    );
}
const PrayerRequests = () => {
    const [allPRS,setAllPRS]=useState();
    const list = [
        'Hadjor',
        'Isaac',
        'Isaac'
    ];

    useEffect(()=>{
        let allPRs=getCollection('prayer-requests')
        let objAllPRS=JSON.parse(allPRs)
        console.log(objAllPRS)
        setAllPRS(objAllPRS)
    },[])
    return (
        <>
            <UpdateWodCard/>
            {/* <List
                itemLayout="vertical"
                size="large"
                dataSource={list}
                renderItem={item => (
                    <Skeleton active avatar />
                )} /> */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <FontAwesomeIcon icon={faPrayingHands} style={{ fontSize: 18, marginRight: 7, color: 'grey' }} />
                <span style={{ fontSize: 20, color: 'grey', fontWeight: '400' }}>
                    Prayer Requests
            </span>
            </div>
            <List
                className="demo-loadmore-list"
                // loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={allPRS}
                renderItem={item => (
                    <List.Item
                        actions={[<Button type='text' key="list-loadmore-more" style={{ borderRadius: 5 }} >Read</Button>, <Button type='text' key="list-loadmore-more" danger style={{ borderRadius: 5 }}>Delete</Button>]}
                    >
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.username}</a>}
                                description={item.prayer}
                            />
                        </Skeleton>
                    </List.Item>
                )} />


        </>
    );
}
const More = () => {
    const list = [
        'Hadjor',
        'Isaac',
        'Isaac'
    ]
    const [moreDisplay, setMoreDisplay] = useState('announcements');
    const [data,setData]=useState()
    let showing;

    useEffect(()=>{
        let allData=getCollection(moreDisplay)
        let objAllData=JSON.parse(allData)
        console.log(objAllData)
        setData(objAllData)

    },[moreDisplay])


    if (moreDisplay === 'announcements') {
        showing = <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
            <div style={{
                width: 40, height: 40, borderRadius: 50, background: ' #e53935', background: '-webkit-linear-gradient(to right, #e53935, #e35d5b)',
                background: 'linear-gradient(to right, #e53935, #e35d5b)', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <FontAwesomeIcon icon={faBullhorn}
                    style={{ fontSize: 15, color: 'white' }}
                />
            </div>
            <span style={{ fontSize: 20, color: 'grey', fontWeight: '400' }}>
                Announcements
        </span>
        </div>

    } else if (moreDisplay === 'events') {
        showing = <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <div style={{
            width: 40, height: 40, borderRadius: 50, background: ' #e53935', background: ' #2196f3', background: '-webkit-linear-gradient(to right,#2196f3, #f44336)',
            background: 'linear-gradient(to right, #2196f3, #f44336)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <FontAwesomeIcon icon={faCalendarAlt}
                style={{ fontSize: 15, color: 'white' }}
            />
        </div>
        <span style={{ fontSize: 20, color: 'grey', fontWeight: '400' }}>
            Events
    </span>
    </div>

    } else if (moreDisplay === 'projects') {
        showing = <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <div style={{
            width: 40, height: 40, borderRadius: 50, background: ' #e53935',  background: ' #1d976c', background: '-webkit-linear-gradient(to left,#1d976c, #004e92)',
            background: 'linear-gradient(to left, #1d976c, #004e92)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <FontAwesomeIcon icon={faBuilding}
                style={{ fontSize: 15, color: 'white' }}
            />
        </div>
        <span style={{ fontSize: 20, color: 'grey', fontWeight: '400' }}>
            Projects
    </span>
    </div>
    }


    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(500px,1fr))', marginBottom: 40 }}>
                <Card 
                hoverable
                onClick={()=>setMoreDisplay('announcements')}
                style={{
                    margin: 10,
                    cursor:'pointer',
                    borderRadius: 5, background: ' #e53935', background: '-webkit-linear-gradient(to right, #e53935, #e35d5b)',
                    background: 'linear-gradient(to right, #e53935, #e35d5b)',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <span style={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}>
                            Announcements
                          </span>
                        <FontAwesomeIcon style={{ fontSize: 22, color: 'white' }} icon={faBullhorn} />
                    </div>
                </Card>
                <Card
                hoverable
                
                 onClick={()=>setMoreDisplay('events')}
                style={{
                    cursor:'pointer',
                    margin: 10,
                    borderRadius: 5, background: ' #2196f3', background: '-webkit-linear-gradient(to right,#2196f3, #f44336)',
                    background: 'linear-gradient(to right, #2196f3, #f44336)',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <span style={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}>
                            Events
                                 </span>
                        <FontAwesomeIcon style={{ fontSize: 22, color: 'white' }} icon={faCalendarAlt} />
                    </div>

                </Card>
                <Card
                hoverable
                 onClick={()=>setMoreDisplay('projects')}
                style={{
                    cursor:'pointer',
                    margin: 10,
                    borderRadius: 5, background: ' #1d976c', background: '-webkit-linear-gradient(to left,#1d976c, #004e92)',
                    background: 'linear-gradient(to left, #1d976c, #004e92)',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <span style={{ color: 'white', fontSize: '17px', fontWeight: 'bold' }}>
                            Projects
                                 </span>
                        <FontAwesomeIcon style={{ fontSize: 22, color: 'white' }} icon={faBuilding} />
                    </div>

                </Card>

            </div>
            {showing}
            <List
                className="demo-loadmore-list"
                // loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[<Button type='text' key="list-loadmore-more" danger style={{ borderRadius: 5 }}>Delete</Button>]}
                    >
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                // avatar={
                                //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                // }
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.title}
                            />
                        </Skeleton>
                    </List.Item>
                )} />



        </>
    );
}
const Users = () => {
    const [users,setUsers]=useState([])
    const list = [
        'Hadjor',
        'Isaac',
        'Isaac'
    ]
    useEffect(()=>{
        let allUsers=getCollection('users')
        let objAllUsers=JSON.parse(allUsers)
        console.log(objAllUsers)
        setUsers(objAllUsers)
    },[])
    return (
        <>
           <UpdateWodCard/>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <FontAwesomeIcon icon={faUserFriends} style={{ fontSize: 18, marginRight: 7, color: 'grey' }} />
                <span style={{ fontSize: 20, color: 'grey', fontWeight: '400' }}>
                    Users
            </span>
            </div>

            {/* <List
                itemLayout="vertical"
                size="large"
                dataSource={list}
                renderItem={item => (
                    <Skeleton active avatar />
                )} /> */}
            <List
                className="demo-loadmore-list"
                // loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={users}
                renderItem={item => (
                    <List.Item
                    // actions={[<Button type='text' key="list-loadmore-more" style={{borderRadius:5}} >Read</Button>, <Button type='text' key="list-loadmore-more" danger style={{borderRadius:5}}>Delete</Button>]}
                    >
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.username}</a>}
                                description={item.email}
                            />
                        </Skeleton>
                    </List.Item>
                )} />


        </>
    );
}

const Dashboard = () => {
    const [showInDashboard, setShowInDashboard] = useState('statistics')
    let displayed;

    if (showInDashboard === 'statistics') {
        displayed = <Statistics />
    } else if (showInDashboard === 'create') {
        displayed = <Create />


    } else if (showInDashboard === 'prayer_requests') {
        displayed = <PrayerRequests />
    } else if (showInDashboard === 'users') {
        displayed = <Users />

    } else if (showInDashboard === 'more') {
        displayed = <More />

    }


    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <Row style={{ width: '100%', height: '100%' }} >

                <Col md={6} style={{
                    background: ' #1e3c72', background: '-webkit-linear-gradient(to top, #1e3c72, #2a5298)',
                    background: 'linear-gradient(to top, #1e3c72, #2a5298)',
                }} xs={0}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', paddingTop: 30 }}>
                        <Avatar size={90} icon={<UserOutlined style={{ color: 'grey' }} />} style={{ backgroundColor: 'white' }} />
                        <div style={{ width: '100%', padding: 20, paddingTop: 40 }}>

                            <ButtonNav onClick={() => setShowInDashboard('statistics')} name='Statistics' icon={<FontAwesomeIcon style={{ color: 'white', fontSize: 20 }} icon={faChartLine} />} />
                            <ButtonNav onClick={() => setShowInDashboard('create')} name='Create' icon={<FontAwesomeIcon style={{ color: 'white', fontSize: 20 }} icon={faPlus} />} />
                            <ButtonNav onClick={() => setShowInDashboard('prayer_requests')} name='Prayer Requests' icon={<FontAwesomeIcon style={{ color: 'white', fontSize: 20 }} icon={faPray} />} />
                            <ButtonNav onClick={() => setShowInDashboard('users')} name='Users' icon={<FontAwesomeIcon style={{ color: 'white', fontSize: 20 }} icon={faUserFriends} />} />
                            <ButtonNav onClick={() => setShowInDashboard('more')} name='More' icon={<FontAwesomeIcon style={{ color: 'white', fontSize: 20 }} icon={faEllipsisH} />} />

                        </div>
                    </div>
                </Col>
                <Col md={18} xs={24} style={{position:'relative'}}>
                    <Row style={{ width: '100%' ,position:'sticky',top:0,zIndex:3}}>
                        <Col md={0} xs={24} >
                            <div style={{ height: 80,backgroundColor:'white', width: '100%', paddingRight: 10, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll' }}>
                                <Button onClick={() => setShowInDashboard('statistics')} style={{ margin: 10, color: showInDashboard === 'statistics' ? '#2196f3' : 'grey', backgroundColor: showInDashboard === 'statistics' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text' ><FontAwesomeIcon style={{ color: showInDashboard === 'statistics' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faChartLine} />Statistics</Button>
                                <Button onClick={() => setShowInDashboard('create')} style={{ margin: 10, color: showInDashboard === 'create' ? '#2196f3' : 'grey', backgroundColor: showInDashboard === 'create' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: showInDashboard === 'create' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faPlus} />Create</Button>
                                <Button onClick={() => setShowInDashboard('prayer_requests')} style={{ margin: 10, color: showInDashboard === 'prayer_requests' ? '#2196f3' : 'grey', backgroundColor: showInDashboard === 'prayer_requests' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: showInDashboard === 'prayer_requests' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faPray} />Prayer Requests</Button>
                                <Button onClick={() => setShowInDashboard('users')} style={{ margin: 10, color: showInDashboard === 'users' ? '#2196f3' : 'grey', backgroundColor: showInDashboard === 'users' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: showInDashboard === 'users' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faUserFriends} />Users</Button>
                                <Button onClick={() => setShowInDashboard('more')} style={{ margin: 10, color: showInDashboard === 'more' ? '#2196f3' : 'grey', backgroundColor: showInDashboard === 'more' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: showInDashboard === 'more' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faEllipsisH} />More</Button>

                                {/* <Button onClick={() => { setWhatToShow('video') }} style={{ margin: 10, color: whatToShow === 'video' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'video' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text' ><FontAwesomeIcon style={{ color: whatToShow === 'video' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faVideo} />Add A Video</Button>
                        <Button onClick={() => { setWhatToShow('project') }} style={{ margin: 10, color: whatToShow === 'project' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'project' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: whatToShow === 'project' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faBuilding} />Add A Project</Button>
                        <Button onClick={() => { setWhatToShow('announcement') }} style={{ margin: 10, color: whatToShow === 'announcement' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'announcement' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: whatToShow === 'announcement' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faBullhorn} />Add An Announcement</Button>
                        <Button onClick={() => { setWhatToShow('event') }} style={{ margin: 10, color: whatToShow === 'event' ? '#2196f3' : 'grey', backgroundColor: whatToShow === 'event' ? '#2196f330' : '#00000020', borderRadius: 10 }} type='text'><FontAwesomeIcon style={{ color: whatToShow === 'event' ? '#2196f3' : 'grey', marginRight: 10 }} icon={faCalendarAlt} />Add An Event</Button> */}

                            </div>
                        </Col>
                    </Row>
                    <div style={{ padding: 30, width: '100%' }}>

                        {/* <Statistics/> */}
                        {/* <Create /> */}
                        {displayed}
                    </div>

                </Col>
            </Row>

            {/* <div style={{ position: 'absolute', zIndex: 5, bottom: 30, right: 30 }}>
                <Avatar size='large' icon={<LogoutOutlined />} style={{ backgroundColor: '#c0000095' }} />

            </div> */}
        </div>
    );
}
export default Dashboard;