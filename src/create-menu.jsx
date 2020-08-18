import React from "react";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";

class CreateMenu extends React.Component {
  state = this.props.initialData;

  onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newOptions = Array.from(this.state.options);
    const elementToMove = newOptions.splice(source.index, 1)[0];
    newOptions.splice(destination.index, 0, elementToMove);

    const newState = {
      options: newOptions,
    };

    this.setState(newState);
  };

  onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.options).length
      : 0;

    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  onDragStart = () => {
    document.body.style.color = "gray";
    document.body.style.transition = "background-color 0.2s ease";
  };

  onSave = () => {
    console.table(this.state.options);
  };

  render() {
    const column = {
      id: "1",
      title: "Menu",
    };

    return (
      <React.Fragment>
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
        >
          <Column key={column.id} column={column} tasks={this.state.options} />
        </DragDropContext>
        <button onClick={this.onSave}>Save</button>
      </React.Fragment>
    );
  }
}

export default CreateMenu;
