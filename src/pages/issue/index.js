import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {issue} from "../../services/issue";
import { message,Form, Icon, Input, Button, Checkbox ,Upload,Rate,Row,Col} from 'antd';
import "./index.scss"
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 7},
    wrapperCol: { span: 12 },
};
class NormalLoginForm extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            values['dm_id'] =3;
            values['photo'] = values['photo'].pop().thumbUrl;
            issue(values)
                .then(res => res.json())
                .then(data => {
                    message.info(data.msg);
                    this.setState({
                        posting: false
                    })
                })
            }
        });
    }

    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{padding: '200px 300px', background: '#0d1427'}}>
                <div className="issueBox">
                    <div className="issueBoxTitle">
                        <div className="issueTitle">
                            议题提交
                        </div>
                    </div>
                    <div className="issueForm">
                        <Form  onSubmit={this.handleSubmit}>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                                colon={false}
                            >
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: '请输入姓名!' }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="公司"
                                colon={false}
                            >
                                {getFieldDecorator('company', {
                                    rules: [{ required: true, message: '请输入公司!' }],
                                })(
                                    <Input/>
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="职位"
                                colon={false}
                            >
                                {getFieldDecorator('position', {
                                    rules: [{ required: true, message: '请输入职位!' }],
                                })(
                                    <Input />
                                )}
                            </FormItem>


                            <FormItem
                                {...formItemLayout}
                                label="手机"
                                colon={false}
                            >
                                {getFieldDecorator('phone', {
                                    rules: [
                                        {required: true, message: '手机号不能为空!',}
                                    ],
                                })(
                                    <Input  style={{ width: '100%' }} />
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="邮箱"
                                colon={false}
                                hasFeedback
                            >
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: '邮箱格式不对!',
                                    }, {
                                        required: true, message: '邮箱不能为空!',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>


                            <FormItem
                                {...formItemLayout}
                                label="详细地址"
                                colon={false}
                            >
                                {getFieldDecorator('addr', {
                                    rules: [{ required: true, message: '地址不能为空!' }],
                                })(
                                    <textarea style={{outline:'none',resize: 'none',width:'100%', height:'100px',border:'1px solid #ccc'}}  placeholder="       用于证件快递，请填写方便收件的地址" />
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="个人照片"
                                colon={false}
                                extra="高清个人半照，不戴墨镜,帽子，职业照最佳"
                            >
                                {getFieldDecorator('photo', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile,
                                    rules: [{ required: true, message: '请上传照片' }],
                                })(
                                    <Upload name="logo" action="http://120.92.10.182:8000/api/gitc/meetissue/upload.json?token=1afb756d16740266efde290917ca1a8e&doamin" listType="picture">
                                        <Button>
                                            <Icon type="upload" /> 上传照片
                                        </Button>
                                    </Upload>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="个人简介"
                                colon={false}
                            >
                                {getFieldDecorator('summary', {
                                    rules: [{ required: true, message: '请输入个人简介!' }],
                                })(
                                    <textarea style={{outline:'none',resize: 'none',width:'100%', height:'100px',border:'1px solid #ccc'}}  placeholder="       200字左右即可" />
                                )}
                            </FormItem>




                            <FormItem
                                {...formItemLayout}
                                label="演讲经验"
                                colon={false}
                            >
                                {getFieldDecorator('speech_experience', {

                                })(
                                    <textarea style={{outline:'none',resize: 'none',width:'100%', height:'100px',border:'1px solid #ccc'}}  placeholder="       您之前在行业会议、论坛、技术交流中的演讲、主持或荣誉简介" />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="感兴趣的专场"
                                colon={false}
                            >
                                {getFieldDecorator('interest', {
                                    rules: [{ required: true, message: '选择1-2个!' }],
                                })(
                                    <Checkbox.Group>
                                        <Row>
                                            <Col span={8}><Checkbox value="主会场">主会场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="运维专场">运维专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="基础架构专场">基础架构专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="大数据专场">大数据专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="互联网金融峰会">互联网金融峰会</Checkbox></Col>
                                            <Col span={8}><Checkbox value="IOT峰会">IOT峰会</Checkbox></Col>
                                            <Col span={8}><Checkbox value="网络安全专场">网络安全专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="技术管理&产品专场">技术管理&产品专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="移动互联网专场">移动互联网专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="前端技术专场">前端技术专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="质量和测试专场">质量和测试专场</Checkbox></Col>
                                            <Col span={8}><Checkbox value="智慧物流论坛">智慧物流论坛</Checkbox></Col>
                                        </Row>
                                    </Checkbox.Group>
                                )}
                                <div>备注:主会场包含大数据应用,人工智能,区块链,互联网,智能驾驶互联网教育等演讲能容</div>
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="演讲主题"
                                colon={false}
                            >
                                {getFieldDecorator('theme', {
                                    rules: [{ required: true, message: '请输入演讲主题!' }],
                                })(
                                    <textarea style={{outline:'none',resize: 'none',width:'100%', height:'100px',border:'1px solid #ccc'}}  placeholder="       请确保该主题未在其他公开场合分享过" />
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="内容简介"
                                colon={false}
                            >
                                {getFieldDecorator('content', {
                                    rules: [{ required: true, message: '请输入内容简介!' }],
                                })(
                                    <textarea style={{outline:'none',resize: 'none',width:'100%', height:'100px',border:'1px solid #ccc'}}  placeholder="       用于演讲内容审核，200字左右即可" />
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="主题创新"
                                colon={false}
                            >
                                {getFieldDecorator('innovate', {
                                    rules: [{ required: true, message: '主题创新不能为空!' }],
                                })(
                                    <Rate className='issue' onChange={this.handleChange}/>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="话题热度"
                                colon={false}
                            >
                                {getFieldDecorator('hot_topic', {
                                    rules: [{ required: true, message: '话题热度不能为空!' }],
                                })(
                                    <Rate className='issue' onChange={this.handleChange}/>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="实战经验"
                                colon={false}
                            >
                                {getFieldDecorator('experience', {
                                    rules: [{ required: true, message: '实战经验不能为空!' }],
                                })(
                                    <Rate className='issue' onChange={this.handleChange}/>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="通用性"
                                colon={false}
                            >
                                {getFieldDecorator('generality', {
                                    rules: [{ required: true, message: '通用性不能为空!' }],
                                })(
                                    <Rate className='issue' onChange={this.handleChange}/>
                                )}
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="推荐人"
                                colon={false}
                            >
                                {getFieldDecorator('referee')(
                                    <Input  />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="意见建议"
                                colon={false}
                            >
                                {getFieldDecorator('suggest', {
                                })(
                                    <textarea style={{outline:'none',resize: 'none',width:'100%', height:'100px',border:'1px solid #ccc'}} />
                                )}
                            </FormItem>
                            <FormItem
                                wrapperCol={{ offset: 11 }}
                            >
                                <Button type="primary" style={{backgroundColor:'#2f72ff',fontSize:'11px',width:'104px',height:'27px',marginBottom:'50px'}} htmlType="submit">确定提交</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>


        );
    }
}

const Issue = Form.create()(NormalLoginForm);
export default Issue;
