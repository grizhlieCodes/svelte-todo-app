<script>
  import Task from "./Task.svelte";
  export let tasks;
  import { flip } from "svelte/animate";
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

</script>

<ul>
  <h1>ToDo Tasks</h1>
  {#each tasks.filter((t) => !t.done) as task(task.id)}
    <div 
    class="task-container" 
    animate:flip
    in:receive="{{key: task.id}}"
    out:send="{{key: task.id}}">
      <Task
        id={task.id}
        task={task.task}
        date={task.date}
        tags={task.tags}
        done={task.done}
        on:task-done-toggle
      />
    </div>
  {/each}
</ul>
<ul>
  <h1>Done Tasks</h1>
  {#each tasks.filter((t) => t.done) as task(task.id)}
    <div 
    class="task-container" 
    animate:flip
    in:receive="{{key: task.id}}"
    out:send="{{key: task.id}}" >
      <Task
        id={task.id}
        task={task.task}
        date={task.date}
        tags={task.tags}
        done={task.done} 
        on:task-done-toggle
      />
    </div>
  {/each}
</ul>

<style>
  /* General Styling */
  ul {
    margin-top: 2rem;
    padding: 0 1.5rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
</style>
