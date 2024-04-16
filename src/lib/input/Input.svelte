<script>
    let text = '';

    function handleSubmit() {
        if (text.trim() === '') {
            console.log('Please enter a message before sending.');
            return; 
        }
        console.log('Message sent:', text);
       
        text = ''; 
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={text} placeholder="Type your message here...">
    <button type="submit" disabled={text.trim() === ''}>Send</button>
</form>

<style>
    input, button {
        padding: 8px;
        margin: 5px;
        font-size: 16px;
    }
    button {
        cursor: pointer;
    }
    button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
</style>
