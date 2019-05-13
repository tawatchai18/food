import React, { Component } from 'react';
import './App.css';
import { Menu, Layout, Button, Tabs, Checkbox, Form, Card, Row, Col, Icon } from 'antd';
import Moment from 'react-moment';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const FormItem = Form.Item;

export class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: 'Home',
      person: ''
    };
  }

  onSubmit = (key) => {
    if (this.state.order.length === 0) {
    }
  }

  handleHo = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        setTimeout((anchor) => {
          window.setTimeout(window.location.href = "https://github.com/ffc-nectec/airsync-launcher/releases/download/1.1.0/ffc-airsync-installer.exe", 100);
        }, 0);
      }
      if (!err) {
        this.setState({ next: 'q' })
      }
    });

  }

  handleH = () => {
    this.setState({ next: 'Home' })
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  test = () => {
    const { person } = this.state;
    const dateToFormat = person.published_at;
    console.log(person.id, '111110');

    const { Footer } = Layout;
    const { getFieldDecorator } = this.props.form;
    if (this.state.next === 'q') {
      return (
        <div className="Font">
          <center>
            <img style={{ height: 300, width: 400, marginTop: 200}} src="Gif.gif"></img>
            <h2 style={{ marginTop: 100, fontSize: 28, fontFamily: 'Kanit' }}>
              ขอบคุณสำหรับการดาวน์โหลด FFC AirSync
              {/* Thank you for downloading FFC AirSync! */}
            </h2>
            <h3 style={{ fontSize: 24, fontFamily: 'Kanit'}} class="sub-title no-margin-bottom">หากท่านดาวน์โหลด FFC AirSync ไม่ได้ กรุณากด <a data-release-download-link="" href='https://github.com/ffc-nectec/airsync-launcher/releases/download/1.1.0/ffc-airsync-installer.exe' id="download-link">ffc airsync link</a>.</h3>
          </center>
          <Layout style={{ marginTop: 800, backgroundColor: '#1DA57A' }}>
            <Footer style={{ backgroundColor: '#1DA57A' }}>
              <center>
                <img style={{ height: 50, width: 100 }} src="nstda.png"></img>
                <p style={{ fontSize: 16, color: '#fff', marginTop: 5 }}>สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ</p>
              </center>
            </Footer>
          </Layout>
        </div>
      )
    } else if (this.state.next === 'Home') {
      return (
        <div>
          <div style={{ marginTop: 100, fontFamily: 'Taviraj' }}>
            <Row>
              <Col span={8}>
                <img style={{ height: 300, width: 300, marginLeft: 150, marginTop: -130 }} src="LOGO_Color.png"></img>
              </Col>
              <Col span={12}>
                <h1 style={{ fontSize: 42, marginLeft: 110, fontWeight: 700 }}>DOWNLOAD FFC AIRSYNC</h1>
              </Col>
            </Row>
            <center style={{ marginLeft: 200 }}>
              <Row gutter={16} style={{ marginBottom: 50, fontSize: 16, marginLeft: 50 }}>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box" style={{ textAlign: "initial" }}>
                    <div className="gutter-box" style={{ textAlign: "initial", }}>
                      <b style={{ fontSize: 18 }}>System requirements</b>
                      <p>- OS: Windows</p>
                      <p>- Java: 1.8</p>
                      <p>- Ram: 4 GB ขึ้นไป</p>
                      <p>- จำเป็นต้องติดตั้ง JHCIS</p>
                   </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box" style={{ textAlign: "initial", marginLeft:100 }}>
                    <b style={{ fontSize: 18 }}>Description</b>
                    <p>- Version:&nbsp;{person.tag_name}</p>
                    <p>- เผยแพร่:&nbsp;<Moment format="DD/MM/YYYY">{dateToFormat}</Moment></p>
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box"></div>
                </Col>
              </Row>
            </center>
            <p style={{ fontSize: 16, marginLeft: 220, color: '#24292e' }}>กรุณาอ่านข้อตกลงการใช้บริการและทำความเข้าใจ ก่อน download ffc airsync</p>
            <center style={{ marginTop: -35 }}>
              <Card style={{ width: 1000, marginTop: 50 }}>
                <div className="Fontsize" style={{ textAlign: "left" }}>
                  <p style={{ marginTop: 10 }}><h2>ข้อตกลงการใช้บริการ</h2></p><hr></hr>
                  <p style={{ marginTop: 20, fontSize: 16, color: '#24292e' }}>โปรดอ่านข้อตกลงฉบับนี้อย่างระมัดระวังก่อนใช้บริการ และโปรดปฏิบัติตามเงื่อนไข ตลอดจนข้อกำหนดในข้อตกลงฉบับนี้อย่างเคร่งครัด</p>
                  <p style={{ marginTop: 20, color: '#24292e' }}><h2>ซึ่งในข้อตกลงการให้บริการนี้ ให้</h2></p><hr></hr>
                  <p style={{ marginTop: 20, fontSize: 16, color: '#24292e' }}>“ผู้ให้บริการ” หมายถึง ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ คือ “ผู้รับข้อมูล” ตามพระราชบัญญัติข้อมูลสุขภาพ 2561 </p>
                  <p style={{ fontSize: 16, color: '#24292e' }}>“ผู้ใช้บริการ” หมายถึง “เจ้าหน้าที่” ภายใต้หน่วยงานที่เป็น “ผู้ควบคุมข้อมูล” ซึ่งมีหน้าที่ให้บริการแก่ “เจ้าของข้อมูล” ตามพระราชบัญญัติข้อมูลสุขภาพ 2561</p>
                  <p style={{ marginTop: 20, color: '#24292e' }}><h2>ผู้ให้บริการและผู้ใช้บริการได้ตกลงกันโดยมีข้อความดังต่อไปนี้</h2></p><hr></hr>
                  <p style={{ marginTop: 20, fontSize: 16, color: '#24292e' }}>ข้อตกลงฉบับนี้ เป็นการกำหนดเงื่อนไขและข้อกำหนดในการใช้ “บริการ” ของ “ผู้ให้บริการ” ไม่ว่าจะเป็นการใช้บริการผ่านช่องทางใด การเข้าใช้ “บริการ” นี้ ถือว่าผู้ใช้บริการได้ยอมรับและผูกพันตามข้อตกลง ข้อควรทราบ เงื่อนไขการให้บริการ ตลอดจนข้อกำหนดอื่นๆภายใต้ข้อตกลงฉบับนี้ “ผู้ให้บริการ” สงวนสิทธิ์ ในการ เพิ่มเติม เปลี่ยนแปลง ยกเลิก รายละเอียด เงื่อนไข และข้อกำหนดในข้อตกลงฉบับนี้ โดยมิต้องแจ้งให้ท่านทราบล่วงหน้า ผู้ใช้บริการตกลงที่จะตรวจสอบข้อตกลง ข้อควรทราบ เงื่อนไขการให้บริการ ตลอดจนข้อกำหนดอื่นๆ ทุกครั้งที่เข้าใช้บริการ และเมื่อผู้ใช้บริการเข้าใช้บริการ ถือว่าท่านได้ยอมรับและผูกพันข้อตกลง ข้อควรทราบ เงื่อนไข การให้บริการ ตลอดจนข้อกำหนดอื่นๆ ที่มีอยู่ ณ เวลาที่เข้าใช้บริการ</p>
                  <li style={{ fontSize: 16, marginTop: 20, color: '#24292e' }}>เมื่อผู้ใช้บริการลงทะเบียนเพื่อเข้าใช้บริการแล้ว เท่ากับผู้ใช้บริการยืนยันว่าผู้ใช้บริการได้อ่านข้อตกลงการใช้งานนี้โดยละเอียดและครบถ้วน และยอมรับที่จะปฏิบัติตามข้อตกลงการใช้งานของ “ผู้ให้บริการ” ทุกข้อ</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ใช้บริการยินยอมให้ผู้ให้บริการเก็บข้อมูลสุขภาพของเจ้าของข้อมูลเพื่อประโยชน์แก่ผู้ใช้บริการและเจ้าของข้อมูล ซึ่งผู้ให้บริการจะรักษาข้อมูลอย่างปลอดภัยตามมาตรฐานอุตสาหกรรมซอฟต์แวร์</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ใช้บริการยินยอมให้ผู้ให้บริการสามารถนำข้อมูลสุขภาพของเจ้าของข้อมูลแบบไม่ระบุตัวตนไปใช้ในการวิเคราะห์ หรือทำการวิจัยเพื่อพัฒนาคุณภาพชีวิตของประชาชน</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ใช้บริการจะต้องปฏิบัติตามเงื่อนไขภายใต้ข้อตกลงการให้บริการโดยเคร่งครัด รวมถึงการปฏิบัติตามนโยบาย ประกาศ คำสั่ง ระเบียบ และข้อบังคับของผู้ให้บริการ ตลอดจนกฎหมายที่เกี่ยวข้องกับการใช้บริการทั้งที่ใช้อยู่ในปัจจุบันและที่จะเกิดขึ้นในอนาคต อาทิ พระราชบัญญัติว่าด้วยการกระทำความผิดทางคอมพิวเตอร์ พ.ศ. 2550, พระราชบัญญัติว่าด้วยธุรกรรมอิเล็กทรอนิกส์ พ.ศ. 2544, ระเบียบกระทรวงสาธารณสุขว่าด้วยการคุ้มครองและจัดการข้อมูลด้านสุขภาพของบุคคล พ.ศ.2561 เป็นต้น</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ให้บริการไม่ต้องรับผิดในความเสียหายที่เกิดขึ้นจากเหตุสุดวิสัยต่างๆ หรือเหตุการณ์ที่ผู้ให้บริการไม่สามารถควบคุมได้ ซึ่งรวมถึงการที่อุปกรณ์ ระบบสื่อสาร หรือการส่งสัญญาณเชื่อมต่อไม่ทำงาน หรือการรบกวนจากไวรัสคอมพิวเตอร์ หรือจากการกระทำที่ไม่ชอบด้วยกฎหมาย หรือในกรณีที่ผู้ให้บริการปิดให้บริการนี้ เพื่อปรับปรุงหรือบำรุงรักษาระบบ อันเป็นเหตุให้ผู้ใช้บริการไม่สามารถใช้บริการนี้ได้</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ใช้บริการจะต้องรักษาชื่อบัญชีผู้ใช้งานและรหัสผ่านไว้เป็นความลับ หากปรากฏว่ามีผู้อื่นสามารถใช้งานผ่านบัญชีของผู้ใช้บริการได้ ผู้ให้บริการจะไม่รับผิดชอบต่อความเสียหายที่เกิดขึ้น</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ให้บริการไม่รับผิดความเสียหายใดๆ ที่เกิดขึ้นจากการใช้บัญชีส่วนตัวของผู้ใช้บริการ หรืออนุญาตให้บุคคลใดใช้บัญชีส่วนตัวของตน ทั้งนี้ท่านจะไม่ใช้บัญชีส่วนตัว ของบุคคลอื่นเช่นกัน</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ใช้บริการจะต้องยินยอมให้ผู้ให้บริการเก็บข้อมูลพฤติกรรมการใช้บริการเพื่อปรับปรุงการให้บริการ</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>ผู้ใช้บริการตกลงจะไม่ใช้ถ้อยคำที่ไม่เหมาะสมระหว่างการใช้บริการ</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>กรณีฉุกเฉินอย่างไรก็ตามผู้ให้บริการไม่สามารถรับประกันได้ว่ามาตรการรักษาความปลอดภัยของผู้ให้บริการจะไม่ถูกล่วงล้ำ หรือนำไปสู่การใช้ข้อมูลส่วนบุคคลของผู้ใช้บริการและ/หรือเจ้าของข้อมูล เพื่อวัตถุประสงค์ที่ไม่เหมาะสม ทั้งนี้หากผู้ใช้บริการพบปัญหา หรือ ช่องโหว่ด้านความปลอดภัย ผู้ใช้บริการมีหน้าที่แจ้งให้ทางผู้ให้บริการทราบเพื่อแก้ไขปัญหาดังกล่าว</li>
                  <li style={{ fontSize: 16, color: '#24292e' }}>เนื้อหา ข้อความ รูปแบบ ของบริการนี้เป็นลิขสิทธิ์ของผู้ให้บริการ การทำซ้ำ ลอกเลียนดัดแปลง คัดลอก กระจายหรือจำหน่ายจ่ายแจก บางส่วนหรือทั้งหมดจากทรัพย์สินทางปัญญานี้โดยมิได้รับอนุญาตจากเจ้าของลิขสิทธิ์เป็นลายลักษณ์อักษร ถือเป็นการกระทำอันผิดกฎหมายอันเป็นการละเมิด และผู้กระทำความผิดจะได้รับโทษตามที่กฎหมายได้กำหนดไว้</li>
                </div>
              </Card>
            </center>
          </div>
          <center>
            <Form onSubmit={this.handleHo} className="login-form">
              <Form.Item>
                {getFieldDecorator('remember',
                  {
                    rules: [{ required: true, message: 'กรุณากดยอมรับข้อตกลงการใช้บริการ' }],
                  })(
                    <div style={{ marginTop: 30, width: 360, }}>
                      <Checkbox style={{ fontSize: 16 }}>ยอมรับข้อตกลงการใช้บริการ</Checkbox>
                    </div>
                  )}
              </Form.Item>
              <FormItem>
                <Button style={{ width: 150, height: 40, fontSize: 20 }} type="primary" htmlType="submit" className="login-form-button">Download</Button>
              </FormItem>
            </Form>
          </center>
          <Layout style={{ marginTop: 200, backgroundColor: '#1DA57A' }}>
            <Footer style={{ backgroundColor: '#1DA57A' }}>
              <center>
                <img style={{ height: 40, width: 100 }} src="nstda.png"></img>
                <p style={{ fontSize: 16, color: '#fff', marginTop: 5 }}>สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ</p>
              </center>
            </Footer>
          </Layout>

        </div>
      )
    }
  }
  async componentDidMount() {
    const url = "https://api.github.com/repos/ffc-nectec/airsync/releases/latest";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data })
    console.log(data, 'dkhdfbg');
  }

  render() {

    // const { getFieldDecorator } = this.props.form;
    // const TabPane = Tabs.TabPane;
    return (
      <div style={{}}>
        <div className="App">
          <div style={{ height: 105, backgroundColor: '#46bd93' }}>
            <Row>
              <Col span={6}>
                <a href="https://ffc.in.th/index">
                  <img style={{ height: 100, width: 100, }} src="LOGO_White.png" ></img>
                </a>
              </Col>
              <Col>
                <Menu style={{ marginLeft: 695, marginTop: 58, backgroundColor: '#46bd93' }}
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                >
                  <Menu.Item key="alipay">
                    <a href="https://ffc.in.th/#What" target="_blank" rel="noopener noreferrer">ABOUT</a>
                  </Menu.Item>
                  <Menu.Item key="alipay">
                    <a href="https://ffc.in.th/#Who" target="_blank" rel="noopener noreferrer">USER</a>
                  </Menu.Item>
                  <Menu.Item key="alipay">
                    <a href="https://ffc.in.th/#tour" target="_blank" rel="noopener noreferrer">FEATURES</a>
                  </Menu.Item>
                  <Menu.Item key="alipay">
                    <a href="https://ffc.in.th/FAQ-ffc.html" target="_blank" rel="noopener noreferrer">FAQ</a>
                  </Menu.Item>
                  <Menu.Item key="alipay">
                    <a href="https://ffc.in.th/download-ffc.html" target="_blank" rel="noopener noreferrer">DOWNLOAD</a>
                  </Menu.Item>
                  <Menu.Item key="alipay">
                    <a href="https://ffc.in.th/download-ffc.html#contact" target="_blank" rel="noopener noreferrer">CONTACT</a>
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </div>
        </div >
        {this.test()}
      </div>
    );
  }
}
const App = Form.create()(AppForm);

export default App;


