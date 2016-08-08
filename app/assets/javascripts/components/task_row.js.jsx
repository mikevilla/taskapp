var TaskRowComponent = React.createClass ({

  getInitialState: function() {
     console.log('getInitialState TaskComponent');
     return {taskRowData: this.props.taskRow};
  },

  componentDidMount: function() {
      console.log('componentDidMount TaskComponent');
   },

  render: function() {

      console.log('render TaskComponent');
      console.log(this.props.taskRow);

      return (
        <div className="taskContainer">
          <hr/>
          <div>
            <div>Title: {this.props.taskRow.title}</div>
            <div>Description: {this.props.taskRow.description}</div>
            <div>Priority: {this.props.taskRow.priority}</div>
            <div>Status: {this.props.taskRow.status}</div>
            <div>Target: {this.props.taskRow.target}</div>
          </div>
        </div>
      );
  }
});


