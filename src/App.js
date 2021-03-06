import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';
import { Layout, Button, Checkbox, Form, Card, Row, Col } from 'antd';
import Moment from 'react-moment';
import { deviceDetect } from 'react-device-detect';

const FormItem = Form.Item;
const str = deviceDetect().userAgent
const word = str.includes('Win64');
console.log(word, 'llllll');

export class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: 'Home',
      person: '',
      remember: false,
      re: false,
      message: "ยอมรับข้อตกลงการใช้บริการ",
      sideDrawerOpen: false,
      redirectToReferrer: false,
    };
  }

  renderContent = () => {
    // if (word) {
    //   return
    // }
    // else if (word !== undefined) {
    if (!word) {
      return <Button style={{ fontSize: 20 }} type="danger" >เครื่องของคุณไม่รองรับการใช้งาน FFC Airsync</Button>
    }
  }

  onSubmit = (key) => {
    if (this.state.order.length === 0) {
    }
  }

  handleCheck = (e) => {
    this.setState({ remember: e.target.checked })
  }

  handle = (e) => {
    this.setState({ re: e.target.checked })
  }

  handleHo = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // if (this.state.re !== true) {
      //   return this.state.message;
      // }
      if (this.state.remember !== true) {
        return this.state.message;
      }
      if (!err) {
        console.log('Received values of form: ', values);
      }
      if (!err) {
        setTimeout(() => {
          window.setTimeout(window.location.href = "https://github.com/ffc-nectec/airsync-launcher/releases/download/1.1.1/ffc-airsync-installer.exe", 100);
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
    console.log(person.assets, '111110');

    const { Footer, Content } = Layout;
    const { getFieldDecorator } = this.props.form;
    if (this.state.next === 'q') {
      return (
        <Layout style={{ minHeight: '120vh', backgroundColor: '#fff' }}>
          <center>
            <h2 style={{ marginTop: 200, fontSize: 30, fontFamily: 'Kanit' }}>
              ขอบคุณสำหรับการดาวน์โหลด FFC AirSync
            </h2>
            <h3 style={{ fontSize: 24, fontFamily: 'Kanit' }} class="sub-title no-margin-bottom">หากท่านดาวน์โหลด FFC AirSync ไม่ได้ กรุณากดที่นี่ <a data-release-download-link="" href='https://github.com/ffc-nectec/airsync-launcher/releases/download/1.1.1/ffc-airsync-installer.exe' id="download-link">link</a>.</h3>
          </center>
        </Layout>
      )
    } else if (this.state.next === 'Home') {
      return (
        <Layout style={{ minHeight: '120vh', backgroundColor: '#fff' }}>
          <div style={{ marginTop: 100 }}>
            <center>
              <div className="Logo">
                <Row gutter={16} style={{ fontSize: 16, marginLeft: 50 }}>
                  <Col className="gutter-row" md={8}>
                    <div className="gutter-box">
                      <img style={{ height: 300, width: 300, marginTop: -130, marginLeft: 130 }} src="LOGO_Color.png"></img>
                    </div>
                  </Col>
                  <Col className="gutter-row" md={14}>
                    <div className="gutter-box">
                      <p style={{ fontSize: 42, marginLeft: -30, fontWeight: 200 }}>DOWNLOAD <h style={{ fontSize: 42, fontWeight: 500 }}>FFC AIRSYNC</h></p>
                    </div>
                  </Col>
                </Row>
              </div>
            </center>
            <center>
              <div className="Font">
                <Row gutter={16} style={{ marginBottom: 50, fontSize: 16, maxWidth: 1000, marginLeft: '20px', marginRight: '20px' }}>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box" style={{ textAlign: "initial", }}>
                      <p style={{ fontSize: 18 }}>System requirements</p>
                      <p>- OS: Windows</p>
                      <p>- Java: 1.8 x64 </p>
                      <p>- Ram: 4 GB ขึ้นไป</p>
                      <p>- จำเป็นต้องติดตั้ง JHCIS</p>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div className="gutter-box" style={{ textAlign: "initial", marginLeft: 100 }}>
                      <p style={{ fontSize: 18 }}>Description</p>
                      <p>- Version:&nbsp;{person.tag_name}</p>
                      <p>- เผยแพร่:&nbsp;<Moment format="DD/MM/YYYY">{dateToFormat}</Moment></p>
                    </div>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: 50, fontSize: 16, maxWidth: 1000, marginLeft: '20px', marginRight: '20px' }}>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box" style={{ textAlign: "initial", }}>
                      {this.renderContent()}
                    </div>
                  </Col>
                </Row>
              </div>
            </center>
            <p style={{ fontSize: 16, color: '#24292e' }}>กรุณาอ่านข้อตกลงการใช้บริการและทำความเข้าใจ ก่อน download ffc airsync</p>
            <center style={{ marginTop: -35 }}>
              <Card style={{ maxWidth: 1000, marginLeft: '20px', marginRight: '20px', marginTop: 50 }}>
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
                        <Checkbox style={{ fontSize: 16 }} name="remember"
                          checked={this.state.remember}
                          onChange={this.handleCheck} >ยอมรับข้อตกลงการใช้บริการ</Checkbox>
                      </div>
                    )}
                </Form.Item>
              {/* )},
              {(!word) && (
                <Form.Item>
                  {getFieldDecorator('remember',
                    {
                      rules: [{ required: true, message: 'กรุณากดยอมรับข้อตกลงการใช้บริการ' }],
                    })(
                      <div style={{ marginTop: 30, width: 360, }}>
                        <Checkbox style={{ fontSize: 16 }} name="remember"
                          checked={this.state.remember}
                          onChange={this.handleCheck} >ยอมรับข้อตกลงการใช้บริการ</Checkbox>
                      </div>
                    )}
                </Form.Item>
              )}
              {(!word) && (
                <Form.Item>
                  {getFieldDecorator('re',
                    {
                      // เมื่อโหลดไปแล้วเครื่องของคุณไม่สามารถติดตั้ง ffc airsync ได้
                      // กรุณาตรวจสอบเครื่องของคุณ ใช้ java 64 bit ไหม ก่อนดาวน์โหลด
                      // กรุณายอมรับข้อตกลง
                      rules: [{ required: true, message: 'กรุณากดยอมรับ (เครื่องของคุณไม่รองรับการใช้งาน FFC Airsync)' }],
                    })(
                      <div style={{ width: 360, }}>
                        <Checkbox style={{ fontSize: 16 }} name="re"
                          checked={this.state.re}
                          onChange={this.handle} >เครื่องของคุณไม่รองรับการใช้งาน FFC Airsync</Checkbox>
                      </div>
                    )}
                </Form.Item>
              )} */}
              <FormItem>
                <Button style={{ width: 150, height: 40, fontSize: 20 }} type="primary" htmlType="submit" className="login-form-button">Download</Button>
              </FormItem>
            </Form>
          </center>
        </Layout>
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

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    const { Content } = Layout;
    return (
      <div className="App">
        <Layout style={{ background: '#F5F5F5' }}>
          <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <div style={{ paddingTop: 100, background: '#fff' }}>
            <Content style={{ backgroundColor: '#fff' }}>
              {this.test()}
            </Content>
          </div>
          <div style={{ marginTop: 50, background: '#F5F5F5', fontSize: 16 }}>
            <Row gutter={16} type="flex" justify="center" style={{ padding: '0px 347px' }}>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                  <a href="{{ site.baseurl }}/contact"><p style={{ color: '#595959' }}>Contact us</p></a>
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                  <a href="{{ site.baseurl }}/blog"><p style={{ color: '#595959' }}>Blog</p></a>
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                  <a href="{{ site.baseurl }}/policy"><p style={{ color: '#595959' }}>Privacy Policy</p></a>
                </div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="gutter-box">
                  <a href="{{ site.baseurl }}/terms"><p style={{ color: '#595959' }}>Terms</p></a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="toorbar" style={{ height: 110, background: '#F5F5F5', marginTop: 20 }}>
            <img style={{ height: 45, width: 100, marginTop: 10 }} src="nstda-color1.png"></img>
            <p>Copyright &copy; 2019<a href="https://www.nstda.or.th/" target="_blank">NSTDA </a>National Science and Technology Development Agency</p>
            <p>This website use <a href="https://github.com/ndrewtl/airspace-jekyll" target="_blank">Airspace</a>. Theme developed and design by <a href="http://www.themefisher.com">Themefisher</a>.</p>
          </div>
        </Layout>
      </div>
    );
  }
}
const App = Form.create()(AppForm);

export default App;


