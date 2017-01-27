"use strict";

var TaskListEntry = function TaskListEntry(props) {

  return React.createElement(
    "div",
    { className: "task list entry" },
    React.createElement("div", { className: "media-left media-middle" }),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement("div", { className: "task-list-entry-title" }),
      React.createElement("div", { className: "task-list-entry-detail" })
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
TaskListEntry.propTypes = {
  task: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.TaskListEntry = TaskListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIlRhc2tMaXN0RW50cnkiLCJwcm9wcyIsInByb3BUeXBlcyIsInRhc2siLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7O0FBRTdCLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxpQkFBZjtBQUNFLGlDQUFLLFdBQVUseUJBQWYsR0FERjtBQUdFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFLG1DQUFLLFdBQVUsdUJBQWYsR0FERjtBQUVFLG1DQUFLLFdBQVUsd0JBQWY7QUFGRjtBQUhGLEdBREY7QUFVRCxDQVpEOztBQWNBO0FBQ0E7QUFDQUQsY0FBY0UsU0FBZCxHQUEwQjtBQUN4QkMsUUFBTUMsTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREwsQ0FBMUI7O0FBSUE7QUFDQTtBQUNBQyxPQUFPUixhQUFQLEdBQXVCQSxhQUF2QiIsImZpbGUiOiJUYXNrTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRhc2tMaXN0RW50cnkgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzayBsaXN0IGVudHJ5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2stbGlzdC1lbnRyeS10aXRsZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2stbGlzdC1lbnRyeS1kZXRhaWxcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVGFza0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHRhc2s6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5UYXNrTGlzdEVudHJ5ID0gVGFza0xpc3RFbnRyeTtcbiJdfQ==