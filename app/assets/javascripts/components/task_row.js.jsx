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
        <li>
           <a href="#">
               <i className="awe-icon awe-icon-check"></i>
               <i className="awe-icon awe-icon-arrow-right"></i>
               <span className="task-title">{this.props.taskRow.title}</span>
               <span>{this.props.taskRow.description}</span>
               <span>{this.props.taskRow.priority}</span>
               <span>{this.props.taskRow.status}</span>
               <span>{this.props.taskRow.target}</span>
           </a>
        </li>
      );
  }
});


