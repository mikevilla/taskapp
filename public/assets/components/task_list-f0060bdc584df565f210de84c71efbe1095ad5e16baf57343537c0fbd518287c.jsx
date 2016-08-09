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
        <section className="main-task-container">
          <div className="container">
              <div className="row">
                  <div className="">
                      <div className="awe-services">
                          <div className="top-nav-container">
                            <div className="col-xs-5 top-nav">Priority</div>
                            <div className="col-xs-5 top-nav">Date</div>
                          </div>
                          <ul className="awe-services__list">
                            {rows}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }

});


