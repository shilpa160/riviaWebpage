import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const NavBar = () => (
    <div className="nav">
  <Menu mode="horizontal" defaultSelectedKeys={['services']}>
    <Menu.Item key="services" >
      Services
    </Menu.Item>
    <Menu.Item key="plan"  >
     Plan
    </Menu.Item>
    <Menu.Item key="blogs" >
     Blogs
    </Menu.Item>
    <Menu.Item key="aboutus" >
      About us
    </Menu.Item>
    <Menu.Item key="career" >
      Career
    </Menu.Item>
  </Menu>
  </div>
);






export default NavBar;