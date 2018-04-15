import React, { Component } from 'react';
import './App.css';
import TaskForm from  './components/TaskForm';
import Control from './components/Control';
import TaskList from "./components/TaskList";
const randomstring =require('randomstring');

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            tasks:[],
            isDislayForm: false
        }
    }
    
    componentWillMount(){
        if (localStorage && localStorage.getItem('tasks')!=null) {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks :tasks
            });
        }
    }

    onGenerate=()=>{
      var tasks=[
          {
              id: randomstring.generate(12),
              name: 'Học lập trình reactjs',
              status:true,
          },
          {
              id: randomstring.generate(12),
              name: 'Học lập trình Nodejs',
              status:true,
          },
          {
              id: randomstring.generate(12),
              name: 'Học lập trình MongoDB',
              status:true,
          }
      ];
        localStorage.setItem('tasks',JSON.stringify(tasks));
    };

    HandleDislayForm=()=>{
            this.setState({
                isDislayForm : !this.state.isDislayForm
            });
    };

    onCloseForm=()=>{
        this.setState({
           isDislayForm: false
        });
    };

    onSubmit=(data)=>{
         const {tasks}=this.state;
         data.id= randomstring.generate();
         tasks.push(data);
           this.setState({
                tasks:tasks

           });
           localStorage.setItem('tasks',JSON.stringify(tasks));
    };

  render() {
      var {tasks,isDislayForm}=this.state;

    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className={isDislayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":''}>
                    {/*Form*/}
                    {isDislayForm?
                        <TaskForm
                            onChangeDislayForm={this.onCloseForm}
                            onSubmit={this.onSubmit}
                        /> : ''}

                </div>

                <div className={isDislayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button
                        type="button"
                        className="btn btn-primary ma"
                        onClick={this.HandleDislayForm}
                    >
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>

                    <button
                        type="button"
                        className="btn btn-primary ml-2"
                        onClick={this.onGenerate}
                    >
                        <span className="fa fa-plus mr-5"></span>Generate
                    </button>

                    <div className="row mt-3">
                        <Control/>
                    </div>

                    {/*Table*/}
                    <TaskList tasks={tasks}/>

                </div>
            </div>
        </div>
    );
  }
}

export default App;
