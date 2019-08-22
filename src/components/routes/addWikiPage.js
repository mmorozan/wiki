import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectWiki } from '../../store/selectors'; 
import { addWiki } from '../../store/ac'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  PageHeader
} from "antd";

const { Option } = Select;
const { TextArea } = Input;

class AddWikiPageF extends Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.dispatchAddWiki(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    console.log('newWikiPage props', this.props);
    console.log('newWikiPage state', this.state);
    return (
      <>
        <Row>
          <Col className="gutter-row" span={24}>
            <PageHeader onBack={() => null} title="New wiki page" />
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row" span={24}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="Название">
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "Введи название епт"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Тип wiki">
                {getFieldDecorator("wiki_type", {
                  rules: [
                    {
                      required: true,
                      message: "Введи тип епт"
                    }
                  ]
                })(
                  <Select>
                    <Option value="1">База данных</Option>
                    <Option value="2">JavaScript</Option>
                    <Option value="3">PHP</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Описание">
                {getFieldDecorator("description", {
                  rules: [
                    {
                      required: true,
                      message: "Введи описание епт"
                    }
                  ]
                })(<TextArea rows={4} />)}
              </Form.Item>
              <Form.Item label="Пример кода">
                {getFieldDecorator("code_example")(<TextArea rows={4} />)}
              </Form.Item>
              
              
              <Form.Item label="Кто добавил">
                {getFieldDecorator("author", {
                  rules: [
                    {
                      required: true,
                      message: "Напиши имя, пусть страна знает своих Героев!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

const AddWikiPage = Form.create({ name: "addWiki" })(AddWikiPageF);
  
export default connect(
    state => ({
        wiki: selectWiki(state)
    }),
    dispatch => ({
        dispatchAddWiki: (wiki) => {
            dispatch(addWiki(wiki))
        }
    })
)(AddWikiPage);
