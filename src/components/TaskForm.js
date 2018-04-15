import React, { Component } from 'react';


class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            status: false
        }
    }

    onChange=(event)=>{
        const target=event.target;
        const value=target.value;
        const  name=target.name;
        this.setState({
            [name]: value
        })
    };



    onSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.props.onChangeDislayForm();
    };

    onClear=()=>{
        this.setState({
            name:'',
            status:false
        })
    };

    onChangeDislayForm=()=>{
        this.onClear();
        this.props.onChangeDislayForm();
    };


    render() {
        return (<div>
                {/*Form*/}
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Thêm Công Việc
                            <span
                                className='fa fa-times-circle text-danger pull-right '
                                id='curso'
                                onClick={this.onChangeDislayForm}
                            >
                                </span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='name'
                                    onChange={this.onChange}
                                    value={this.state.name}
                                />

                            </div>
                            <label>Trạng Thái :</label>
                            <select
                                className="form-control"
                                required="required"
                                name="status"
                                onChange={this.onChange}
                                value={this.state.status}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-5"></span>Thêm</button>
                                &nbsp;
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={this.onChangeDislayForm}
                                ><span className='fa fa-times-circle  '>
                                </span>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default TaskForm;
