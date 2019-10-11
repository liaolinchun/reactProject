import React,{Component} from "react";
import {Layout} from "antd";

export default class MainFooter extends Component{
    render(){
        return (
            <Layout.Footer id="footer">
                备案号：湘ICP备15014315号—1 版权所有：湖南潭州教育网络科技有限公司
            </Layout.Footer>
        );
    }
}