<script>
  import Header from "./UI/Header.svelte";
  import Main from "./UI/Main.svelte";
  import TodoTasks from "./Tasks/TodoTasks.svelte";
  import TaskInput from "./Tasks/TaskInput.svelte";
  import Button from "./UI/Button.svelte";

  //TODO 0.1: Look into ES6 variable naming to understand the shortcut
  //TODO 0.2: Study the deferred-transitions code to understand it and hack it a bit.
  //TODO 1: Create a store we can subscribe to for our tasks.
  //TODO 2: Create a delete task button.
  //TODO 3: Create a set of 'view' buttons to see All, Complete and ToDo tasks.
  //TODO 4: Create a button to 'Delete Done' tasks.
  //TODO 5: 

  let tasks = [
    {
      id: Math.random().toString(),
      task: "Clean room",
      date: "10 Mar",
      tags: ["Home 🏡", "Couple 👫","LoveyDovey 😍"],
      done: false
    },
    {
      id: Math.random().toString(),
      task: "Finish coding project",
      date: "10 Mar",
      tags: ["Coding 🤓", "Mastery 🌄"],
      done: false
    }
  ];

  function addTask(event) {
    const newTask = {
      id: event.detail.taskID,
      task: event.detail.task,
      date: event.detail.date,
      tags: event.detail.tags,
      done: event.detail.done,
    };

    tasks = [newTask,...tasks];
    showModal = false;
  }

  let showModal = false;

  function closeModal() {
    showModal = false;
  }

  function updateDoneTasks(e) {
    const id = e.detail; //grab our ID
    const updatedTask = { ...tasks.find((t) => t.id === id) }; //grab our task
    updatedTask.done = !updatedTask.done; //toggle true/false
    const taskIndex = tasks.findIndex((t) => t.id === id); //grab task index
    tasks[taskIndex] = updatedTask;
    console.table(tasks);
  }
</script>

<Header>Todoist</Header>
<Button
  type="button"
  content="+"
  on:click={() => (showModal = true)}
  specialClass="special"
/>
{#if showModal}
  <TaskInput on:save={addTask} on:cancel={closeModal} />
{/if}
<Main>
  <TodoTasks {tasks} on:task-done-toggle={updateDoneTasks} />
</Main>
