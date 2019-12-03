import { ImagePicker, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { DivContainer } from "./styled"
const data = [
    {
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
    }
];

class ImagePickerExample extends Component {
    state = {
        files: data,
        multiple: false,
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }

    render() {
        const { files } = this.state;
        return (
            <WingBlank>
                <DivContainer>
                    <span>照片墙</span>
                    <span>0/4</span>
                </DivContainer>
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 7}
                    multiple={this.state.multiple}
                />
            </WingBlank>
        );
    }
}

export default ImagePickerExample;