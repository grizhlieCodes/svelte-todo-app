<script>
  import Header from "./UI/Header.svelte";
  import Main from "./UI/Main.svelte";
  import TodoTasks from "./Tasks/TodoTasks.svelte";
  import TaskInput from "./Tasks/TaskInput.svelte";
  import Button from "./UI/Button.svelte";
  import CustomTasks from './Tasks/tasks-store.js'
  
  let showModal = false;

  function addTask(event) {
    const taskData = {
      id: event.detail.taskID,
      task: event.detail.task,
      date: event.detail.date,
      tags: event.detail.tags,
      done: event.detail.done,
    };

    CustomTasks.addTask(taskData)
    showModal = false;
  }

  function closeModal() {
    showModal = false;
  }

  function updateDoneTasks(e) {
    const id = e.detail;
    CustomTasks.updateDoneTasks(id)
  }

  function deleteTask(e){
    const id = e.detail;
    CustomTasks.deleteTask(id);
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
  <TodoTasks 
  tasks={$CustomTasks} 
  on:task-done-toggle={updateDoneTasks}
  on:delete-task={deleteTask} />
</Main>
