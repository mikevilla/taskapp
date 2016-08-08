var TaskListComponent = React.createClass ({

  getInitialState: function() {
     console.log('getInitialState TaskListComponent 2');
     return {taskListData: this.props.taskListData};
  },

  componentDidMount: function() {
      console.log('componentDidMount TaskListComponent');
   },


  render: function() {
    console.log('render: TaskRowComponent');
    console.log('this.state.taskListData', this.state.taskListData);

    var rows = this.state.taskListData.map((taskRow) => {
      return (<TaskRowComponent key={taskRow.id} taskRow={taskRow} />)}
    );

    return (
      <div className="">
        <ul className="">
        {rows}
        </ul>
      </div>
    );
  }

});


