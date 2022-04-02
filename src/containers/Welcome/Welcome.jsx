import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { Typography } from 'antd';
import "./Welcome.css";

const Welcome = () => {
  const { Title } = Typography;
  let navigate = useNavigate();
  
    return (
      <div className="designWelcome">
        <Button type="dashed" className="link" onClick={() => navigate("/login")}>Login</Button>  
        <Title className="welcome-title"level={1}>Welcome to the Jungle Social Network</Title>
          <Button type="dashed"  className="link" onClick={()=>navigate("/register")}>Register</Button> 
      </div>
    );
};

export default Welcome;