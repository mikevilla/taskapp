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
        <section className="sale-flights-section-demo">
          <div className="container">
              <div className="row">
                  <div className="">
                      <div className="awe-services">
                          <h2>Date</h2>
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


