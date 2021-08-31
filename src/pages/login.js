import { Button, Card, Form, Input, notification } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React,{useState} from "react";
import { useHistory } from "react-router-dom";
const Login=()=>{
    const [adminKey,setAdminKey]=useState('');
    const history=useHistory()
   const onFinish=()=>{
        // history.push('/dashboard')
        if(adminKey==='u2tNIQuLp3VpdISdHQ8mxjsIxzx2'){
            let loggedIn=localStorage.setItem('authenticated',JSON.stringify(true))
            history.push('/dashboard')

        }else{
            notification.error({
                message: 'Incorrect Key',
                description:
                  'The key you entered is incorrect',
              }
            )
        }

    }
    return (
        <div style={{width:'100vw',height:'100vh',backgroundColor:'gainsboro',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Avatar size={100} style={{marginBottom:30}} icon={<span>CL</span>}/>
            
            <Card style={{width:'min(500px,95vw)'}}>
                {/* <text>Login</text> */}
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item
                     label='Enter Admin Key'
                     name='loginKey'
                     rules={[{ required: true, message: 'Please input the key!' }]}
                    
                    >
                    <Input value={adminKey} size='large' onChange={(e)=>setAdminKey(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                    <Button htmlType='submit' size='large' block type='primary' >Login</Button>
                    </Form.Item>
                    

                </Form>
            </Card>
        </div>
    );
}
export default Login;