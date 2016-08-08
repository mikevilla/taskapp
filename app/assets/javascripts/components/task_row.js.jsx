var TaskRowComponent = React.createClass ({

  getInitialState: function() {
     console.log('getInitialState TaskComponent');
     return {taskRowData: this.props.taskRow};
  },

  componentDidMount: function() {
      console.log('componentDidMount TaskComponent');

      var propsTaskID = this.props.taskRow.id;

      // Event handlers, for now using jquery but later will move over to handle the event with reactjs. This is just a demo.
      $( ".completed_" + propsTaskID ).click(function() {
        var taskId = $(this).attr('data-id');
        console.log('One clicked', taskId);

        // send request to update this task as In Progress

      });

      $( ".inprogress_" + propsTaskID).click(function() {
        var taskId = $(this).attr('data-id');
        console.log('One clicked', taskId);

       // send request to update this task as Completed


      });

   },

  render: function() {

      console.log('render TaskComponent');
      console.log(this.props.taskRow);

      var status = this.props.taskRow.status.toLowerCase().replace(/ /g, ''),
        editUrl = "/tasks/" + this.props.taskRow.id + "/edit",
        statusClass = "checkmark awe-icon awe-icon-check " + status + "_" + this.props.taskRow.id ;

      return (
        <li>
               <i className={statusClass} data-id={this.props.taskRow.id}></i>
               <div>
                 <a href={editUrl}>
                   <i className="awe-icon awe-icon-arrow-right"></i>
                   <span className="task-title">{this.props.taskRow.title}</span>
                   <span>{this.props.taskRow.description}</span>
                   <span>{this.props.taskRow.priority}</span>
                   <span>{this.props.taskRow.status}</span>
                   <span>{this.props.taskRow.target}</span>
                 </a>
               </div>
        </li>
      );
  }
});


