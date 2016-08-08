var TaskContainerComponent = React.createClass ({

  getInitialState: function() {
    return {
      taskData: this.props.taskData
    };
  },

  componentDidMount: function() {

  },

  render: function() {
    console.log('componentDidMount TaskContainerComponent');
    console.log('TaskContainerComponent state', this.state.taskData);
    return (
      <div className="taskContainerComponent">
        <TaskListComponent taskListData={this.state.taskData}/>
      </div>
    );
  }
});

