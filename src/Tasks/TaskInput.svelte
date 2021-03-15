<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import Button from '../UI/Button.svelte';
    import Modal from '../UI/Modal.svelte';
    import TextInput from '../UI/TextInput.svelte';
    import {fade} from 'svelte/transition'
    let task = '';

    $: taskValid = task

    let date = 'Today';
    let tag = 'Coding 👨‍💻  Personal 🛀';
    // let customTags = ["Coding 👨‍💻", "Home 🏡", "Family 👨‍👩‍👦", "Other ❓"]

    function closeModal(){
        dispatch('cancel')
    }

    function submitForm(){
        var tagArray = tag.split('  ')
        dispatch('save', {
            taskID: Math.random().toString(),
            task: task,
            date: date,
            tags: tagArray,
            done: false
        })
    }

</script>

    <Modal title="Add a Task" on:cancel={closeModal}>
        <form on:submit|preventDefault={submitForm}>
            <TextInput 
                label="Task" 
                id="task"
                type="text" 
                value={task} 
                placeholder="Input your task"
                on:input={(event) => task = event.target.value}
            />
            <TextInput 
                label="Date" 
                id="date"
                type="text" 
                value={date} 
                placeholder="Example: Mar 10"
                on:input={(event) => date = event.target.value}
            />
            <TextInput 
                label="Tag" 
                id="tags"
                type="text" 
                value={tag} 
                placeholder="Input your tags, seperate 2 spaces"
                on:input={(event) => tag = event.target.value}
            />
        </form>
        <div slot="footer">
            <Button 
            type="button" 
            content="Close" 
            on:click={closeModal}/>
            
            <Button 
            type="button" 
            content="Add Task" 
            on:click={submitForm} 
            disabled={!taskValid} />
        </div>
    </Modal>



